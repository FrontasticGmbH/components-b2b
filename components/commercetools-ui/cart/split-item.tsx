import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { LineItem } from '@Types/cart/LineItem';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { mapAddressToString } from 'helpers/utils/addressUtil';
import { useCart, useDarkMode } from 'frontastic';
import { useBusinessUnitStateContext } from 'frontastic/provider/BusinessUnitState';

type Props = {
  open: boolean;
  lineItem: LineItem;
  onClose: () => void;
};

const SplitItemModal: React.FC<Props> = ({ open, lineItem, onClose }) => {
  const { mode } = useDarkMode();
  const { splitLineItem } = useCart();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('valid-zero');
  const { businessUnit } = useBusinessUnitStateContext();
  const [error, setError] = useState('');

  const updateCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    setData(
      data.map((item) => {
        if (item.address.id === id) {
          return {
            ...item,
            quantity: parseInt(e.target.value, 10),
          };
        }
        return item;
      }),
    );
  };

  const handleSplitLineItem = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (status === 'invalid') {
      setError('The sum of items is not equal to the available quantity.');
      setIsLoading(false);
      return;
    }

    await splitLineItem(lineItem.lineItemId, data);

    setIsLoading(false);
    onClose();
  };

  useEffect(() => {
    if (data) {
      const sumAll = data?.reduce((p, c) => p + c.quantity, 0);
      setStatus(sumAll === 0 ? 'valid-zero' : lineItem?.count === sumAll ? 'valid' : 'invalid');
    }
  }, [data]);

  useEffect(() => {
    if (businessUnit?.addresses?.length) {
      const targets = lineItem.shippingDetails?.targets?.length ? [...lineItem.shippingDetails.targets] : [];

      setData(
        businessUnit.addresses.map((address) => {
          const targetIndex = targets.findIndex((target) => target.addressKey === address.id);
          if (targetIndex === -1) {
            return {
              quantity: 0,
              address,
            };
          }
          return {
            quantity: targets[targetIndex].quantity,
            address,
          };
        }),
      );
    }
  }, [businessUnit]);
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
                        Split item to different shipping addresses
                      </h2>
                      <p className="text-gray-400">{`Maximum available items: ${lineItem.count}`}</p>
                    </div>
                    <form onSubmit={handleSplitLineItem}>
                      <div className="flexl flex-col">
                        {data?.map((item, i) => (
                          <div className="mb-4 flex flex-row" key={item.address.id}>
                            <label htmlFor={`address_${item.address.id}`} className="w-full">
                              {`Address ${i + 1}`}
                              <input
                                className="input input-primary"
                                type="text"
                                id={`address_${item.address.id}`}
                                defaultValue={mapAddressToString(item.address)}
                                readOnly
                              />
                            </label>
                            <label htmlFor={item.address.id} className="ml-4">
                              {`Quantity`}
                              <input
                                className="input input-primary"
                                type="number"
                                id={item.address.id}
                                defaultValue={0}
                                value={item.quantity}
                                onChange={updateCount}
                              />
                            </label>
                          </div>
                        ))}
                      </div>
                      {!!error && (
                        <div>
                          <p className="py-2 text-sm text-red-400">{error}</p>
                        </div>
                      )}
                      <div className="flex flex-row justify-between">
                        <button type="button" className="button button-secondary" onClick={onClose}>
                          Cancel
                        </button>
                        <button className="button button-primary" type="submit" disabled={status === 'invalid'}>
                          {!isLoading && <span>{status === 'valid-zero' ? 'Reset' : 'Split'}</span>}
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

export default SplitItemModal;
