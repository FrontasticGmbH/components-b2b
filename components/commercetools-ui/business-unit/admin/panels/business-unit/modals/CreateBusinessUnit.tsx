import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { BusinessUnit } from 'cofe-ct-b2b-ecommerce/types/business-unit/BusinessUnit';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { useAccount } from 'helpers/hooks/useAccount';
import { useBusinessUnit } from 'helpers/hooks/useBusinessUnit';
import { useFormat } from 'helpers/hooks/useFormat';
import { useDarkMode } from 'frontastic';

type Props = {
  open: boolean;
  parentBusinessUnit: BusinessUnit;
  onClose: () => void;
  onCreate: () => void;
};

const DeleteBusinessUnit: React.FC<Props> = ({ open, parentBusinessUnit, onClose, onCreate }) => {
  const { mode } = useDarkMode();
  const { createBusinessUnitAndStore, createBusinessUnit } = useBusinessUnit();
  const { account: userAccount } = useAccount();

  const { formatMessage } = useFormat({ name: 'account' });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState({
    account: {
      company: '',
      email: '',
    },
    customer: {},
    isNewStore: false,
  });

  useEffect(() => {
    if (userAccount) {
      setData({
        ...data,
        customer: {
          accountId: userAccount.accountId,
        },
      });
    }
  }, [userAccount]);

  const handleCreateBusinessUnit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (data.isNewStore) {
        await createBusinessUnitAndStore(data.account, data.customer, parentBusinessUnit.key);
      } else {
        await createBusinessUnit(data.account, data.customer, parentBusinessUnit.key);
      }
      onCreate();
      onClose();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  //handle text input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, account: { ...data.account, [e.target.name]: e.target.value } });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog className={`${mode} default fixed inset-0 z-10 overflow-y-auto`} onClose={onClose}>
        <>
          <div className="flex items-end justify-center px-4 pt-4 text-left sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="absolute inset-0" onClick={onClose}>
                {/* eslint-disable */}
                <div
                  className="lg:py-18 absolute top-1/2 left-1/2 w-[90%] max-w-[800px] -translate-x-1/2 -translate-y-1/2 overflow-auto bg-white py-16 px-4 dark:bg-primary-200 sm:px-6 lg:px-8"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* eslint-enable */}
                  <div className="relative mx-auto max-w-xl">
                    <div className="text-center">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-light-100 sm:text-4xl">
                        Create a new business unit
                      </h2>
                      <p className="mt-4 text-lg leading-6 text-gray-400">
                        Add a new division to <strong>{parentBusinessUnit?.name}</strong>
                      </p>
                    </div>
                    <form className="space-y-6" onSubmit={handleCreateBusinessUnit}>
                      {error && <p className="text-sm text-accent-400">{error}</p>}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-light-100">
                          {formatMessage({ id: 'company', defaultMessage: 'Company' })}
                        </label>
                        <div className="mt-1">
                          <input
                            id="company"
                            name="company"
                            type="text"
                            autoComplete="company"
                            required
                            className="input input-primary"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-light-100">
                          {formatMessage({ id: 'emailAddress', defaultMessage: 'Email Address' })}
                        </label>
                        <div className="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="input input-primary"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <input
                          id="store"
                          name="store"
                          type="checkbox"
                          autoComplete="store"
                          className="input input-checkbox"
                          onChange={(e) => setData({ ...data, isNewStore: e.target.checked })}
                        />
                        <label
                          htmlFor="store"
                          className="ml-4 block text-sm font-medium text-gray-700 dark:text-light-100"
                        >
                          Do you want to create a specific store for this division?
                        </label>
                      </div>
                      <div className="mt-4 flex justify-between gap-4 sm:col-span-2 sm:gap-8">
                        <button type="button" className="button button-secondary" onClick={onClose}>
                          {formatMessage({ id: 'cancel', defaultMessage: 'Cancel' })}
                        </button>
                        <button type="submit" className="button button-primary">
                          {!isLoading && formatMessage({ id: 'save', defaultMessage: 'Save' })}
                          {isLoading && <LoadingIcon className="h-6 w-6 animate-spin" />}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </>
      </Dialog>
    </Transition.Root>
  );
};

export default DeleteBusinessUnit;
