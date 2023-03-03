import React, { useEffect, useState } from 'react';
import { Order } from '@Types/cart/Order';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import useFilters from 'helpers/hooks/useFilters';
import { useFormat } from 'helpers/hooks/useFormat';
import { useBusinessUnitStateContext } from 'frontastic/provider/BusinessUnitState';
import { useBusinessUnitDetailsStateContext } from '../../provider';
import OrderList from './order-list';

const OrdersPanel = () => {
  const { selectedBusinessUnit: businessUnit } = useBusinessUnitDetailsStateContext();
  const { getOrders, getAllOrders } = useBusinessUnitStateContext();
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });

  const [isLoading, setIsLoading] = useState(false);
  const [orderList, setOrderList] = useState<Order[]>([]);
  const [showAllChildOrders, setShowAllChildOrders] = useState(false);

  const { FiltersUI, filteredItems } = useFilters<Order>(
    [
      {
        label: 'Pre orders',
        key: 'pre-orders',
        value: false,
        predicate: (order: Order) => order.isPreBuyCart,
      },
      {
        label: 'Pending orders',
        key: 'pending-orders',
        value: false,
        predicate: (order: Order) => order.orderState === 'Open',
      },
      {
        label: 'Returned orders',
        key: 'returned-orders',
        value: false,
        predicate: (order: Order) => order.returnInfo?.length > 0,
      },
    ],
    orderList,
  );

  useEffect(() => {
    if (businessUnit) {
      (async () => {
        setIsLoading(true);
        const results = await getOrders(businessUnit);
        setOrderList(results);
        setIsLoading(false);
      })();
    }
  }, [businessUnit]);

  useEffect(() => {
    if (businessUnit) {
      if (showAllChildOrders) {
        (async () => {
          setIsLoading(true);
          const results = await getAllOrders(businessUnit);
          setOrderList(results);
          setIsLoading(false);
        })();
      } else {
        (async () => {
          setIsLoading(true);
          const results = await getOrders(businessUnit);
          setOrderList(results);
          setIsLoading(false);
        })();
      }
    }
  }, [showAllChildOrders]);

  if (!businessUnit) {
    return null;
  }

  return (
    <div className="mt-10">
      <div className="space-y-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-light-100">
          {formatAccountMessage({ id: 'orders.history', defaultMessage: 'Orders' })}
        </h3>
        <p className="max-w-2xl text-sm text-gray-500">
          {formatAccountMessage({
            id: 'orders.desc',
            defaultMessage: 'Check the status of orders.',
          })}
        </p>
      </div>
      <div className="divide-y divide-gray-200"></div>
      <div className="flex items-stretch justify-center py-10">
        {isLoading && <LoadingIcon className="h-8 w-8 text-gray-500" />}
        {!isLoading && !orderList?.length && <div>No orders yet!</div>}
        {!isLoading && !!orderList?.length && (
          <div>
            <div className="mb-4 border-y-2 py-2">
              <p className="mb-2">Filters</p>
              <div className="flex flex-row flex-wrap">
                <FiltersUI />
              </div>
            </div>
            <OrderList orders={filteredItems} />
          </div>
        )}
      </div>
      <div className="flex flex-row items-center">
        <input
          type="checkbox"
          id="all-quotes"
          checked={showAllChildOrders}
          onChange={(e) => setShowAllChildOrders(e.target.checked)}
          className="input input-checkbox mr-4"
        />
        <label htmlFor="all-quotes" className="block text-sm font-medium text-gray-700 dark:text-light-100">
          Show all orders from divisions?
        </label>
      </div>
    </div>
  );
};

export default OrdersPanel;
