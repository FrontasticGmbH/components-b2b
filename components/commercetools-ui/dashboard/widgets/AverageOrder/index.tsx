import React, { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, TruckIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Order } from '@Types/cart/Order';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useBusinessUnitStateContext } from 'frontastic/provider/BusinessUnitState';

const AverageOrderWidget = () => {
  const { businessUnit, getOrders } = useBusinessUnitStateContext();
  const [orders, setOrders] = useState<Order[]>([]);
  const [duration, setDuration] = useState({ label: 'Week', value: 7 });
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({ itemsCount: 0, itemsPrice: 0, total: 0 });

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
          setOrders(orders);
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
      if (!list.length) {
        setData({
          itemsCount: 0,
          total: 0,
          itemsPrice: 0,
        });
        return;
      }

      const itemsCount = list.reduce(
        (prev, order) => prev + order.lineItems.reduce((p, lineItem) => p + lineItem.count, 0),
        0,
      );
      const total = list.reduce((prev, order) => prev + order.sum.centAmount, 0);
      setData({
        itemsCount: +(itemsCount / list.length).toFixed(2),
        total,
        itemsPrice: total / itemsCount,
      });
    }
  }, [duration, orders]);

  return (
    <div className="h-full border-l-4 border-teal-400 bg-white drop-shadow-md">
      {isLoading && (
        <div>
          <LoadingIcon className="my-0 mx-auto h-4 w-4 animate-spin" />
        </div>
      )}
      {!isLoading && !orders.length && (
        <div>
          <p>No orders yet!</p>
        </div>
      )}
      {!isLoading && !!orders.length && (
        <div className="flex flex-col px-4">
          <div className="flex flex-row justify-between border-b-2 py-2">
            <p className="flex items-center text-sm font-bold">
              <TruckIcon className="h-4 w-4" />
              Average Order
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
          <div className="mt-4 flex flex-row">
            <div className="flex-1 border-r-2 text-sm">
              <div className=" font-bold">Items</div>
              <div className="">{data.itemsCount}</div>
            </div>
            <div className="ml-2 flex-1 border-r-2 text-sm">
              <div className=" font-bold">Price</div>
              <div className="">{CurrencyHelpers.formatForCurrency(data.itemsPrice)}</div>
            </div>
            <div className="ml-2 flex-1 text-sm">
              <div className=" font-bold">Total</div>
              <div className="">{CurrencyHelpers.formatForCurrency(data.total)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AverageOrderWidget;
