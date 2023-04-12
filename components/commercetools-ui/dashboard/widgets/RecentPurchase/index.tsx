import React, { useEffect, useState } from 'react';
import { CurrencyDollarIcon } from '@heroicons/react/solid';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useBusinessUnitStateContext } from 'frontastic/provider/BusinessUnitState';

const RecentPurchaseWidget = () => {
  const { getOrders, businessUnit } = useBusinessUnitStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      if (businessUnit) {
        setIsLoading(true);
        const orders = await getOrders(businessUnit);
        if (orders.length) {
          setData(
            orders.map((order) => ({
              date: new Date(order.createdAt).toLocaleDateString(),
              price: order.sum?.centAmount,
            })),
          );
        }
        setIsLoading(false);
      }
    })();
  }, [businessUnit]);

  return (
    <div className="h-full w-full bg-white px-4 drop-shadow-md">
      <div className="mb-2 flex flex-row items-center border-b-2 py-2 text-sm font-bold">
        <CurrencyDollarIcon className="mr-2 h-4 w-4"></CurrencyDollarIcon>
        <p>Recent Purchase</p>
      </div>
      {isLoading && <LoadingIcon className="my-0 mx-auto h-6 w-6 animate-spin" />}
      {!isLoading && !data.length && <p className="pt-2 text-center text-base font-bold">No orders yet!</p>}
      {!isLoading && !!data.length && (
        <ResponsiveContainer width="100%" height="85%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 30,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis tickFormatter={(value) => CurrencyHelpers.formatForCurrency(value)} />
            <Tooltip formatter={(value: string) => CurrencyHelpers.formatForCurrency(value)} />
            <Bar dataKey="price" fill="#5975cd" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default RecentPurchaseWidget;
