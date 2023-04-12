import React, { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ViewListIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Order } from '@Types/cart/Order';
import OrderList from 'components/commercetools-ui/business-unit/admin/panels/orders/order-list';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { useBusinessUnitStateContext } from 'frontastic/provider/BusinessUnitState';

const OrdersUnderReviewWidget = () => {
  const { businessUnit, getOrders } = useBusinessUnitStateContext();
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderList, setOrderList] = useState<Order[]>([]);
  const [duration, setDuration] = useState({ label: 'Week', value: 7 });
  const [isLoading, setIsLoading] = useState(false);

  const options = [
    { label: 'Week', value: 7 },
    { label: 'Month', value: 30 },
    { label: 'Total', value: 10000 },
  ];

  useEffect(() => {
    if (businessUnit) {
      (async () => {
        setIsLoading(true);
        const orders = await getOrders(businessUnit);
        if (orders?.length) {
          setOrders(orders.filter((order) => order.state?.key === 'review'));
        }
        setIsLoading(false);
      })();
    }
  }, [businessUnit]);

  useEffect(() => {
    if (orders.length) {
      const from = new Date();
      from.setDate(from.getDate() - duration.value);
      const list = orders.filter((order) => new Date(order.createdAt) > from);
      setOrderList(list);
    }
  }, [duration, orders]);

  return (
    <div className="h-full overflow-y-scroll border-l-4 border-teal-400 bg-white drop-shadow-md">
      <div className="flex flex-col px-4">
        <div className="flex flex-row justify-between border-b-2 py-2">
          <p className="flex items-center text-sm font-bold">
            <ViewListIcon className="h-4 w-4" />
            Orders waiting for review
          </p>
          <div className="text-sm">
            <Listbox value={duration} onChange={setDuration}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-1 pr-8 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{duration.label}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {options.map((option, i) => (
                      <Listbox.Option
                        key={option.value}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-2 pr-4 ${
                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                          }`
                        }
                        value={option}
                      >
                        {({ selected }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                              {option.label}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
        {isLoading && <LoadingIcon className="my-0 mx-auto h-6 w-6 animate-spin" />}
        {!isLoading && !orders.length && <p className="pt-2 text-center text-base font-bold">No orders yet!</p>}
        {!isLoading && !!orders.length && (
          <div className="mt-4 flex flex-row">
            <OrderList orders={orderList} />{' '}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersUnderReviewWidget;
