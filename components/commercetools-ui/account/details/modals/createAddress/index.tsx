import { useState, Fragment } from 'react';
import { Address } from '@Types/account/Address';
import { Dialog, Transition } from '@headlessui/react';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { useFormat } from 'helpers/hooks/useFormat';
import useI18n from 'helpers/hooks/useI18n';
import { STATES } from 'helpers/stateOptions';
import { useDarkMode } from 'frontastic';

export interface CreateAddressProps {
  open?: boolean;
  onClose?: () => void;
  addAddress: (address: Address) => void;
  addressId?: string;
}

const CreateAddress: React.FC<CreateAddressProps> = ({ open, onClose, addAddress }) => {
  //Darkmode
  const { mode } = useDarkMode();

  //i18n messages
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });
  const { formatMessage } = useFormat({ name: 'common' });

  //I18n info
  const { country } = useI18n();

  //new address data
  const [data, setData] = useState({ country } as Address);
  const [isLoading, setIsLoading] = useState(false);

  //input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //checkbox change handler
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.checked });
  };

  //submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      await addAddress(data);
    } catch (err) {
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog className={`${mode} default fixed inset-0 z-10 overflow-y-auto`} onClose={onClose}>
        <>
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-left sm:block sm:p-0">
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
                  className="absolute top-1/2 left-1/2 h-[90vh] w-[90%] max-w-[800px] -translate-x-1/2 -translate-y-1/2 overflow-auto bg-white py-16 px-4 dark:bg-primary-200 sm:px-6 lg:py-24 lg:px-8"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* eslint-enable */}
                  <div className="relative mx-auto max-w-xl">
                    <div className="text-center">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-light-100 sm:text-4xl">
                        {formatAccountMessage({ id: 'address.create.headline', defaultMessage: 'New Address' })}
                      </h2>
                      <p className="mt-4 text-lg leading-6 text-gray-400">
                        {formatAccountMessage({
                          id: 'address.create.dec',
                          defaultMessage: 'Add a new address here to associate it with your account',
                        })}
                      </p>
                    </div>
                    <div className="mt-12">
                      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700 dark:text-light-100"
                          >
                            {formatMessage({ id: 'firstName', defaultMessage: 'First Name' })}
                          </label>
                          <div className="mt-1">
                            <input
                              required
                              type="text"
                              name="firstName"
                              id="first-name"
                              autoComplete="given-name"
                              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-accent-400 focus:ring-accent-400"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700 dark:text-light-100"
                          >
                            {formatMessage({ id: 'lastName', defaultMessage: 'Last Name' })}
                          </label>
                          <div className="mt-1">
                            <input
                              required
                              type="text"
                              name="lastName"
                              id="last-name"
                              autoComplete="family-name"
                              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-accent-400 focus:ring-accent-400"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="">
                          <label
                            htmlFor="street-number"
                            className="block text-sm font-medium text-gray-700 dark:text-light-100"
                          >
                            {formatMessage({ id: 'street.number', defaultMessage: 'Street Number' })}
                          </label>
                          <div className="mt-1">
                            <input
                              required
                              type="text"
                              name="streetNumber"
                              id="street-number"
                              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-accent-400 focus:ring-accent-400"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="">
                          <label
                            htmlFor="street-name"
                            className="block text-sm font-medium text-gray-700 dark:text-light-100"
                          >
                            {formatMessage({ id: 'street.name', defaultMessage: 'Street Name' })}
                          </label>
                          <div className="mt-1">
                            <input
                              required
                              id="street-name"
                              name="streetName"
                              type="text"
                              autoComplete="address-line1"
                              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-accent-400 focus:ring-accent-400"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="postal-code"
                            className="block text-sm font-medium text-gray-700 dark:text-light-100"
                          >
                            {formatMessage({ id: 'zipCode', defaultMessage: 'Postal Code' })}
                          </label>
                          <div className="mt-1">
                            <input
                              required
                              type="text"
                              name="postalCode"
                              id="postal-code"
                              autoComplete="postal-code"
                              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-accent-400 focus:ring-accent-400"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-light-100">
                            {formatMessage({ id: 'city', defaultMessage: 'City' })}
                          </label>
                          <div className="mt-1">
                            <input
                              required
                              type="text"
                              name="city"
                              id="city"
                              autoComplete="country"
                              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-accent-400 focus:ring-accent-400"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-light-100">
                            {formatMessage({ id: 'state', defaultMessage: 'State' })}
                          </label>
                          <div className="mt-1">
                            <select
                              id="state"
                              name="state"
                              required
                              placeholder={`${formatMessage({ id: 'state', defaultMessage: 'State' })}`}
                              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-accent-400 focus:ring-accent-400"
                              onChange={handleChange}
                            >
                              <option value={undefined}></option>
                              {STATES?.map((item) => (
                                <option key={item.value} value={item.value}>
                                  {item.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 dark:text-light-100"
                          >
                            {formatMessage({ id: 'phone', defaultMessage: 'Phone' })}
                          </label>
                          <div className="mt-1">
                            <input
                              required
                              type="text"
                              name="phone"
                              id="phone"
                              autoComplete="tel"
                              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-accent-400 focus:ring-accent-400"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div>
                          <legend className="sr-only">
                            {formatAccountMessage({
                              id: 'address.setDefault.delivery',
                              defaultMessage: 'Set as default delivery address',
                            })}
                          </legend>
                          <div className="relative flex items-start">
                            <div className="flex h-5 items-center">
                              <input
                                id="is-default-shipping-address"
                                aria-describedby="Set as default shipping address"
                                name="isDefaultShippingAddress"
                                type="checkbox"
                                className="h-6 w-6 rounded border-gray-300 focus:ring-accent-400"
                                onChange={handleCheckboxChange}
                              />
                            </div>
                            <div className="ml-3 text-base">
                              <label htmlFor="is-default-shipping-address" className="text-gray-400">
                                {formatAccountMessage({
                                  id: 'address.setDefault.delivery',
                                  defaultMessage: 'Set as default delivery address',
                                })}
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <legend className="sr-only">
                            {formatAccountMessage({
                              id: 'address.setDefault.billing',
                              defaultMessage: 'Set as default billing address',
                            })}
                          </legend>
                          <div className="relative flex items-start">
                            <div className="flex h-5 items-center">
                              <input
                                id="is-default-billing-address"
                                aria-describedby="Set as default billing addaress"
                                name="isDefaultBillingAddress"
                                type="checkbox"
                                className="h-6 w-6 rounded border-gray-300 focus:ring-accent-400"
                                onChange={handleCheckboxChange}
                              />
                            </div>
                            <div className="ml-3 text-base">
                              <label htmlFor="is-default-billing-address" className="text-gray-400">
                                {formatAccountMessage({
                                  id: 'address.setDefault.billing',
                                  defaultMessage: 'Set as default billing address',
                                })}
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text-center sm:col-span-2">
                          <p className="mt-4 text-sm leading-6 text-gray-400">
                            {formatAccountMessage({
                              id: 'address.create.safety',
                              defaultMessage:
                                'All the personal associated to your account is safely stored in our database, and we will not share it with third parties.',
                            })}
                          </p>
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
              </div>
            </Transition.Child>
          </div>
        </>
      </Dialog>
    </Transition.Root>
  );
};

export default CreateAddress;
