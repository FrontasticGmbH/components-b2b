import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Order } from '@Types/cart/Order';
import OrderList from 'components/commercetools-ui/business-unit/admin/panels/orders/order-list';
import Spinner from 'components/commercetools-ui/spinner';
import useFilters from 'helpers/hooks/useFilters';
import { useFormat } from 'helpers/hooks/useFormat';
import { useCart } from 'frontastic';
export interface Props {
  orders?: Order[];
}

const OrdersHistory: FC<Props> = ({ orders }) => {
  const router = useRouter();

  const [accountOrders, setAccountOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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
    accountOrders,
  );

  const { orderHistory } = useCart();

  useEffect(() => {
    if (orderHistory) {
      orderHistory().then((data) => {
        const highlightId = router.query?.id;
        setAccountOrders(
          data.map((order) => {
            if (order.orderId !== highlightId) {
              return order;
            }
            return {
              ...order,
              highlight: true,
            };
          }),
        );
        setLoading(false);
      });
    } else {
      setAccountOrders(orders);
      setLoading(false);
    }
  }, [orders, orderHistory]);
  //18in messages
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });

  return (
    <div>
      <div className="mt-10">
        <div className="space-y-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-light-100">
            {formatAccountMessage({ id: 'orders.history', defaultMessage: 'My order history' })}
          </h3>
          <p className="max-w-2xl text-sm text-gray-500">
            {formatAccountMessage({
              id: 'orders.desc',
              defaultMessage: 'Check the status of recent orders, manage returns, and download invoices.',
            })}
          </p>
        </div>
        <div className="divide-y divide-gray-200"></div>
        {loading ? (
          <div className="flex items-stretch justify-center py-10 px-12">
            <Spinner />
          </div>
        ) : accountOrders && accountOrders.length ? (
          <section aria-labelledby="recent-heading" className="mt-16">
            <h2 id="recent-heading" className="sr-only">
              Recent orders
            </h2>
            <div className="mb-4 border-y-2 py-2">
              <p className="mb-2">Filters</p>
              <div className="flex flex-row flex-wrap">
                <FiltersUI className="flex flex-row flex-wrap gap-0.5" />
              </div>
            </div>
            <div className="space-y-20">
              <OrderList orders={filteredItems} />
            </div>
          </section>
        ) : (
          <p className="mt-10 max-w-2xl text-sm text-gray-500">
            {formatAccountMessage({
              id: 'orders.no.orders',
              defaultMessage: 'You have not placed any orders yet! ',
            })}
          </p>
        )}
      </div>
    </div>
  );
};

export default OrdersHistory;
