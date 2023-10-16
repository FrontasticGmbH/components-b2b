import React from 'react';
import { LineItem } from '@Types/cart/LineItem';
import { useFormat } from 'helpers/hooks/useFormat';
import { bundleItems } from 'helpers/utils/bundleItemsHelpers';
import { OrderLineItem } from './order-line-item';

interface Props {
  lineItems: LineItem[];
}

export const OrderItems: React.FC<Props> = ({ lineItems }) => {
  const { formatMessage: formatProductMessage } = useFormat({ name: 'product' });

  const bundledLineItems = bundleItems(lineItems);

  return (
    <table className="mt-4 w-full text-gray-500 sm:mt-6">
      <caption className="sr-only">
        {formatProductMessage({
          id: 'products',
          defaultMessage: 'Products',
        })}
      </caption>
      <thead className="sr-only text-left text-sm text-gray-800 sm:not-sr-only">
        <tr>
          <th scope="col" className="py-1 pr-8 font-normal dark:text-light-100 sm:w-2/5 lg:w-1/3">
            {formatProductMessage({
              id: 'product',
              defaultMessage: 'Product',
            })}
          </th>
          <th scope="col" className="hidden w-1/5 py-1 pr-8 font-normal dark:text-light-100 sm:table-cell">
            {formatProductMessage({
              id: 'price',
              defaultMessage: 'Price',
            })}
          </th>
          <th scope="col" className="hidden py-1 pr-8 font-normal dark:text-light-100 sm:table-cell">
            {formatProductMessage({
              id: 'quantity',
              defaultMessage: 'Quantity',
            })}
          </th>
          <th scope="col" className="hidden w-1/5 py-1 pr-8 font-normal dark:text-light-100 sm:table-cell">
            {formatProductMessage({
              id: 'total-price',
              defaultMessage: 'Total price',
            })}
          </th>
          <th scope="col" className="w-0 py-1 text-right font-normal dark:text-light-100">
            {formatProductMessage({
              id: 'product.info',
              defaultMessage: 'Product information',
            })}
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t">
        {bundledLineItems.map((lineItem) => (
          <OrderLineItem key={lineItem.lineItemId} lineItem={lineItem}></OrderLineItem>
        ))}
      </tbody>
    </table>
  );
};
