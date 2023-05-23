import React, { Fragment, useEffect, useState } from 'react';
import { Account } from '@Types/account/Account';
import { Address as AddressType } from '@Types/account/Address';
import { Transition, Dialog } from '@headlessui/react';
import { Cart } from '@Types/cart/Cart';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { getSelectedBundleLabel } from 'helpers/utils/bundleItemsHelpers';
import Address from '../../address';
import { OrderItems } from '../../sections/order-items';

type Props = {
  open?: boolean;
  onClose?: () => void;
  subscription: Cart;
};

const SubscriptionDetailsModal: React.FC<Props> = ({ open, onClose, subscription }) => {
  const [selectedPostponeValue, setSelectedPostponeValue] = useState(null);
  const [selectedSubscription, setSelectedSubscription] = useState<string>();

  const handlePostponement = () => {
    // TODO:
    setSelectedPostponeValue(null);
  };

  const handleSubscriptionSelect = (sku: string) => {
    // TODO:
    setSelectedSubscription(sku);
  };

  const handlePause = () => {
    return null;
  };
  const handleDelete = () => {
    return null;
  };
  const handleRemoveAddress = (addressId: string): Promise<Account> => {
    return null;
  };
  const handleUpdateAddress = (address: AddressType): Promise<Account> => {
    return null;
  };

  useEffect(() => {
    console.log(subscription.subscription?.sku);

    setSelectedSubscription(subscription.subscription?.sku);
  }, [subscription.subscription?.sku]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog className={`default fixed inset-0 z-10 overflow-y-auto`} onClose={onClose}>
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
                className="absolute top-1/2 left-1/2 h-[90vh] w-[90%] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 overflow-auto bg-white py-16 px-4 dark:bg-primary-200 sm:px-6 lg:px-8 lg:pb-24"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative mx-auto mt-12 max-w-4xl">
                  <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-light-100 sm:text-4xl">
                      Shipment
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-gray-400">Update the shippment</p>
                  </div>
                  <div className="mt-12 flex flex-col">
                    <dl className="mb-4 flex-auto space-y-6 rounded-sm bg-gray-200 p-2 text-sm text-gray-600 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:space-y-0 sm:divide-y-0 lg:gap-x-8">
                      <div className="flex pt-6 sm:block sm:pt-0">
                        <dt className="font-medium text-gray-900">Total amount</dt>
                        <dd className="mb-4 sm:mt-1">
                          {CurrencyHelpers.formatForCurrency(subscription.sum.centAmount)}
                        </dd>
                      </div>
                      <div className="flex pt-6 sm:block sm:pt-0">
                        <dt className="font-medium text-gray-900">Shipping price</dt>
                        <dd className="text-ellipsis-150 mb-4 sm:mt-1">
                          {CurrencyHelpers.formatForCurrency(subscription.shippingInfo?.price)}
                        </dd>
                        <dt className="font-medium text-gray-900">Shipping method</dt>
                        <dd className="mb-4 sm:mt-1">{subscription.shippingInfo?.name || 'N/A'}</dd>
                      </div>
                    </dl>
                    <div className="flex flex-row">
                      <div className="mr-2 basis-1/2 rounded-sm border p-2">
                        <span className="text-md font-semibold">Shipping Address</span>
                        <Address
                          address={subscription.shippingAddress}
                          removeAddress={handleRemoveAddress}
                          updateAddress={handleUpdateAddress}
                        />
                      </div>
                      <div className="basis-1/2 rounded-sm border p-2">
                        <span className="text-md font-semibold">Billing Address</span>
                        <Address
                          address={subscription.billingAddress}
                          removeAddress={handleRemoveAddress}
                          updateAddress={handleUpdateAddress}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative mx-auto mt-12 max-w-4xl">
                  <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-light-100 sm:text-4xl">
                      Items
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-gray-400">Update the items</p>
                  </div>
                  <div className="mt-12">
                    <OrderItems lineItems={subscription.lineItems} />
                  </div>
                </div>

                <div className="relative mx-auto mt-12 max-w-4xl">
                  <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-light-100 sm:text-4xl">
                      Schedule
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-gray-400">Update the subscription</p>
                  </div>
                  <div className="mt-12 flex flex-col">
                    <div className="flex flex-row items-center">
                      <h3 className="text-md basis-1/2 font-semibold">Postpone your delivery:</h3>
                      <div className="flex basis-1/2 flex-row">
                        <select
                          className="input input-primary"
                          value={selectedPostponeValue}
                          onChange={(e) => setSelectedPostponeValue(e.target.value)}
                        >
                          <option value={null}></option>
                          <option value={1}>by 1 month</option>
                          <option value={2}>by 2 months</option>
                        </select>
                        {!!selectedPostponeValue && (
                          <button
                            onClick={handlePostponement}
                            className="button ml-2 rounded-md border border-transparent bg-accent-400 px-2 py-2 text-center text-sm font-medium text-white shadow-sm"
                          >
                            Apply
                          </button>
                        )}
                      </div>
                    </div>
                    {!!subscription.subscription?.sku && (
                      <div className="mt-8 flex flex-row items-center">
                        <h3 className="text-md basis-1/2 font-semibold">Change delivery intervals:</h3>
                        <div className="flex basis-1/2 flex-row">
                          <select
                            className="input input-primary"
                            value={selectedSubscription}
                            onChange={(e) => handleSubscriptionSelect(e.target.value)}
                          >
                            <option value={null}>No subscription</option>
                            {subscription.subscription?.product?.variants.map((variant) => (
                              <option key={variant.sku} value={variant.sku}>
                                {getSelectedBundleLabel(variant, subscription.subscription?.product.name)}
                              </option>
                            ))}
                          </select>
                          {selectedSubscription !== subscription.subscription?.sku && (
                            <button
                              onClick={handlePostponement}
                              className="button ml-2 rounded-md border border-transparent bg-accent-400 px-2 py-2 text-center text-sm font-medium text-white shadow-sm"
                            >
                              Apply
                            </button>
                          )}
                        </div>
                      </div>
                    )}

                    {subscription.subscription.isActive && (
                      <div className="mt-8 flex flex-row items-center">
                        <h3 className="text-md basis-1/2 font-semibold">Pause this subscription:</h3>

                        <button
                          onClick={handlePause}
                          className="button ml-2 rounded-md border border-transparent bg-accent-400 px-2 py-2 text-center text-sm font-medium text-white shadow-sm"
                        >
                          Pause
                        </button>
                      </div>
                    )}

                    {!subscription.subscription.isActive && (
                      <div className="mt-8 flex flex-row items-center">
                        <h3 className="text-md basis-1/2 font-semibold">Continue this subscription:</h3>

                        <button
                          onClick={handlePause}
                          className="button ml-2 rounded-md border border-transparent bg-accent-400 px-2 py-2 text-center text-sm font-medium text-white shadow-sm"
                        >
                          Pause
                        </button>
                      </div>
                    )}

                    <div className="mt-8 flex flex-row items-center">
                      <h3 className="text-md basis-1/2 font-semibold">Delete this subscription:</h3>

                      <button
                        onClick={handleDelete}
                        className="button ml-2 rounded-md border border-transparent bg-red-400 px-2 py-2 text-center text-sm font-medium text-white shadow-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SubscriptionDetailsModal;
