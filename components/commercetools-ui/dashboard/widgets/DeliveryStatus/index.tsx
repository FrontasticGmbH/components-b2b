import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { TruckIcon } from '@heroicons/react/outline';
import { Order } from '@Types/cart/Order';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { useBusinessUnitStateContext } from 'frontastic/provider/BusinessUnitState';
import { useFormat } from 'helpers/hooks/useFormat';

const DeliveryStatusWidget = () => {
  const { formatMessage } = useFormat();

  const { businessUnit, getAllOrders } = useBusinessUnitStateContext();
  const [lastOrder, setLastOrder] = useState<Order>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (businessUnit) {
      (async () => {
        setIsLoading(true);
        const orders = await getAllOrders(businessUnit);
        if (orders?.length) {
          setLastOrder(orders[0]);
        }
        setIsLoading(false);
      })();
    }
  }, [businessUnit]);

  return (
    <div className="h-full border-l-4 border-red-400 bg-white drop-shadow-md">
      {isLoading && !lastOrder && (
        <div>
          <LoadingIcon className="my-0 mx-auto h-4 w-4 animate-spin" />
        </div>
      )}
      {!isLoading && !lastOrder && (
        <div>
          <p>{formatMessage({ id: 'orders.empty', defaultMessage: 'You have no orders yet' })}</p>
        </div>
      )}
      {!isLoading && !!lastOrder && (
        <div className="flex flex-col px-4">
          <div className="flex flex-row justify-between border-b-2 py-4">
            <p className="flex items-center text-sm font-bold">
              <TruckIcon className="h-4 w-4" />
              Last Order
            </p>
            <p className="text-sm">
              <Link href={`/account#orders`}>{formatMessage({ id: 'order.view', defaultMessage: 'View order' })}</Link>
            </p>
          </div>
          <div className="mt-2 flex flex-row">
            <div className="flex-1 border-r-2 text-sm font-bold">
              <div className="py-1">{formatMessage({ id: 'order.status', defaultMessage: 'Status' })}</div>
              <div className="py-1">{formatMessage({ id: 'order.at', defaultMessage: 'Ordered at' })}</div>
              <div className="py-1">{formatMessage({ id: 'order.items.count', defaultMessage: 'Items count' })}</div>
            </div>
            <div className="flex-1 pl-2 text-sm">
              <div className="py-1">{lastOrder.orderState}</div>
              <div className="py-1">{new Date(lastOrder.createdAt).toLocaleDateString()}</div>
              <div className="py-1">{lastOrder.lineItems.reduce((prev, curr) => prev + curr.count, 0)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryStatusWidget;
