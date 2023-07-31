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
  const { getOrders } = useBusinessUnitStateContext();
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });

  const [isLoading, setIsLoading] = useState(false);
  const [orderList, setOrderList] = useState<Order[]>([]);

  const { FiltersUI, filteredItems } = useFilters<Order>(
    [
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
      {
        label: 'Initiated/Created by Super User',
        key: 'superuser-orders',
        value: false,
        predicate: (order: Order) => order.origin === 'Merchant',
      },
      {
        label: 'Under Review',
        key: 'review-orders',
        value: false,
        predicate: (order: Order) => order.state?.key === 'review',
      },
      {
        label: 'Rejected',
        key: 'rejected-orders',
        value: false,
        predicate: (order: Order) => order.state?.key === 'rejected',
      },
      {
        label: 'Created before',
        key: 'order-date-before',
        extraType: 'date',
        value: false,
        predicate: (order: Order, date: string) => new Date(order.createdAt) <= new Date(date),
      },
      {
        label: 'Created after',
        key: 'order-date-after',
        extraType: 'date',
        value: false,
        predicate: (order: Order, date: string) => new Date(order.createdAt) >= new Date(date),
      },
      {
        label: 'Product',
        key: 'includes-product',
        extraType: 'product',
        value: false,
        predicate: (order: Order, product: string) =>
          order.lineItems.some(
            (lineitem) =>
              lineitem.variant?.sku === product || lineitem.name?.toLowerCase().includes(product?.toLowerCase()),
          ),
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
              <FiltersUI className="flex flex-row flex-wrap gap-0.5" />
            </div>
            <OrderList orders={filteredItems} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPanel;
