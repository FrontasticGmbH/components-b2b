import React from 'react';
import NextLink from 'next/link';
import { LineItem } from '@Types/cart/LineItem';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import Image from 'frontastic/lib/image';

interface Props {
  lineItems: LineItem[];
}

export const OrderItems: React.FC<Props> = ({ lineItems }) => {
  const { formatMessage: formatProductMessage } = useFormat({ name: 'product' });

  const discount = (lineItem: LineItem) => {
    const discountValue = lineItem.discountedPrice?.centAmount || lineItem.discounts?.[0]?.discountedAmount?.centAmount;
    return !discountValue ? 0 : lineItem.price?.centAmount - discountValue;
  };

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
        {lineItems.map((product) => (
          <tr key={product.lineItemId}>
            <td className="py-2 pr-8">
              <div className="flex items-center">
                <Image
                  src={product.variant.images[0]}
                  alt={product.name}
                  className="mr-6 h-16 w-16 rounded object-cover object-center"
                />
                <div>
                  <div className="text-ellipsis-150 font-medium text-gray-900 dark:text-light-100">{product.name}</div>
                  <div className="mt-1 dark:text-light-100 sm:hidden">
                    {CurrencyHelpers.formatForCurrency(product.price)}
                  </div>
                </div>
              </div>
            </td>
            <td className="hidden py-2 pr-8 dark:text-light-100 sm:table-cell">
              <span className={!!discount(product) ? 'line-through' : ''}>
                {CurrencyHelpers.formatForCurrency(product.price)}
              </span>
              {!!discount(product) && (
                <span className="ml-2">{CurrencyHelpers.formatForCurrency(discount(product))}</span>
              )}
            </td>
            <td className="hidden py-2 pr-8 dark:text-light-100 sm:table-cell">{product.count}</td>
            <td className="hidden py-2 pr-8 dark:text-light-100 sm:table-cell">
              {CurrencyHelpers.formatForCurrency(product.totalPrice)}
            </td>
            <td className="whitespace-nowrap py-2 text-right font-medium dark:text-light-100">
              <NextLink href={product._url || ''}>
                <a className="text-accent-400">
                  {formatProductMessage({
                    id: 'product.view',
                    defaultMessage: 'View product',
                  })}
                  <span className="sr-only">, {product.name}</span>
                </a>
              </NextLink>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
