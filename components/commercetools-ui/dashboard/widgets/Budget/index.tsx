import React, { useEffect, useState } from 'react';
import { CurrencyDollarIcon } from '@heroicons/react/solid';
import { Bar, CartesianGrid, Legend, Tooltip, XAxis, YAxis, ComposedChart } from 'recharts';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useCart } from 'frontastic';
import { useBusinessUnitStateContext } from 'frontastic/provider/BusinessUnitState';

const BudgetWidget = () => {
  const { businessUnit } = useBusinessUnitStateContext();
  const { data: cart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (businessUnit && businessUnit.custom?.fields?.budget) {
      (async () => {
        setIsLoading(true);
        setData([
          {
            name: 'Budget',
            budget: businessUnit.custom?.fields?.budget.centAmount,
            cart: cart?.sum?.centAmount,
          },
        ]);
        setIsLoading(false);
      })();
    }
  }, [businessUnit]);

  return (
    <div className="h-full w-full bg-white px-4 drop-shadow-md">
      <div className="mb-2 flex flex-row items-center justify-between border-b-2 py-2">
        <p className="flex items-center text-sm font-bold">
          <CurrencyDollarIcon className="mr-2 h-4 w-4"></CurrencyDollarIcon>
          Budget
        </p>
      </div>
      {isLoading && <LoadingIcon className="my-0 mx-auto h-6 w-6 animate-spin" />}
      {!isLoading && !data.length && <p className="text-base font-bold">No budget defined yet!</p>}
      {!isLoading && data.length && (
        <div className="flex w-full flex-row items-center">
          <ComposedChart
            layout="vertical"
            width={400}
            height={100}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis type="number" tickFormatter={(value) => CurrencyHelpers.formatForCurrency(value)} />
            <YAxis dataKey="name" type="category" scale="band" />
            <Tooltip formatter={(value: string) => CurrencyHelpers.formatForCurrency(value)} />
            <Legend />
            <Bar dataKey="budget" fill="#82ca9d" />
            <Bar dataKey="cart" fill={data[0].budget < data[0].cart ? 'red' : '#ffc658'} />
          </ComposedChart>
        </div>
      )}
    </div>
  );
};

export default BudgetWidget;
