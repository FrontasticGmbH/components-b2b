import React, { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/outline';
import { ChartPieIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { Order } from '@Types/cart/Order';
import { PieChart, Pie, Cell } from 'recharts';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { useBusinessUnitStateContext } from 'frontastic/provider/BusinessUnitState';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const OrderStatusWidget = () => {
  const { getOrders, businessUnit } = useBusinessUnitStateContext();
  const [orders, setOrders] = useState<Order[]>([]);
  const [duration, setDuration] = useState({ label: 'Week', value: 7 });
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

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

      const mapping = {};
      list.forEach((order) => {
        if (!mapping[order.orderState]) {
          mapping[order.orderState] = 1;
        } else {
          mapping[order.orderState] = mapping[order.orderState] + 1;
        }
      });
      setData(Object.keys(mapping).map((key) => ({ name: key, value: mapping[key] })));
    }
  }, [duration, orders]);

  return (
    <div className="h-full w-full bg-white px-4 drop-shadow-md">
      <div className="mb-2 flex flex-row items-center justify-between border-b-2 py-2">
        <p className="flex items-center text-sm font-bold">
          <ChartPieIcon className="mr-2 h-4 w-4"></ChartPieIcon>
          Order Status
        </p>
        <div className="z-40 text-sm">
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
      {!isLoading && !data.length && <p className="pt-2 text-center text-base font-bold">No orders yet!</p>}
      {!isLoading && !!data.length && (
        <div className="flex w-full flex-row items-center">
          <PieChart
            width={250}
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 30,
              bottom: 5,
            }}
          >
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
          <div className="mt-2 flex h-fit flex-row">
            <div className="flex-1 border-r-2 pr-2 text-sm font-bold">
              {data.map((item, i) => (
                <div key={item.name} className="flex flex-row items-center justify-between py-1">
                  {item.name}
                  <div
                    className="ml-2 h-2 w-2 rounded-full"
                    style={{ backgroundColor: COLORS[i % COLORS.length] }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex-1 pl-2 text-sm">
              {data.map((item) => (
                <div key={item.name} className="py-1">
                  {item.value}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderStatusWidget;
