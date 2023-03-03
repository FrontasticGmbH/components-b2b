import React from 'react';
import NextLink from 'next/link';
import { ArrowSmRightIcon } from '@heroicons/react/solid';
import { LineItem } from '@Types/cart/LineItem';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import Image from 'frontastic/lib/image';
import styles from './quote-items.module.css';

interface Props {
  quoteRequestLineItems: LineItem[];
  quoteLineItems?: LineItem[];
}

export const QuoteItems: React.FC<Props> = ({ quoteRequestLineItems, quoteLineItems }) => {
  const { formatMessage: formatProductMessage } = useFormat({ name: 'product' });

  const remainingFromQuoteLineItems = quoteLineItems?.length ? [...quoteLineItems] : [];

  const lineItems = quoteRequestLineItems.map((quoteRequestLineItem) => {
    const index = remainingFromQuoteLineItems.findIndex(
      (quoteLineItem) => quoteLineItem.variant?.sku === quoteRequestLineItem.variant?.sku,
    );
    if (index > -1) {
      const [quoteLineItem] = remainingFromQuoteLineItems.splice(index, 1);
      return {
        quoteRequestLineItem,
        quoteLineItem,
      };
    }
    return {
      quoteRequestLineItem,
      isRemoved: quoteLineItems?.length ? true : false,
    };
  });

  const hasDiscountedPrice = (
    lineItem:
      | { quoteRequestLineItem: LineItem; quoteLineItem: LineItem }
      | { quoteRequestLineItem: LineItem; quoteLineItem?: undefined },
  ) => {
    return !!lineItem.quoteLineItem && !!lineItem.quoteLineItem.discounts?.length;
  };

  const hasLineItemNewPrice = (
    lineItem:
      | { quoteRequestLineItem: LineItem; quoteLineItem: LineItem }
      | { quoteRequestLineItem: LineItem; quoteLineItem?: undefined },
  ) => {
    return (
      !!lineItem.quoteLineItem &&
      lineItem.quoteLineItem.price?.centAmount !== lineItem.quoteRequestLineItem.price?.centAmount
    );
  };

  const hasLineItemNewCount = (
    lineItem:
      | { quoteRequestLineItem: LineItem; quoteLineItem: LineItem }
      | { quoteRequestLineItem: LineItem; quoteLineItem?: undefined },
  ) => {
    return !!lineItem.quoteLineItem && lineItem.quoteLineItem.count !== lineItem.quoteRequestLineItem.count;
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
          <th scope="col" className="py-3 pr-8 font-normal dark:text-light-100 sm:w-2/5 lg:w-1/3">
            {formatProductMessage({
              id: 'product',
              defaultMessage: 'Product',
            })}
          </th>
          <th scope="col" className="hidden w-1/5 py-3 pr-8 font-normal dark:text-light-100 sm:table-cell">
            {formatProductMessage({
              id: 'price',
              defaultMessage: 'Price',
            })}
          </th>
          <th scope="col" className="hidden w-1/5 py-3 pr-8 font-normal dark:text-light-100 sm:table-cell">
            {formatProductMessage({
              id: 'quantity',
              defaultMessage: 'Quantity',
            })}
          </th>
          <th scope="col" className="hidden w-1/5 py-3 pr-8 font-normal dark:text-light-100 sm:table-cell">
            {formatProductMessage({
              id: 'total',
              defaultMessage: 'Total',
            })}
          </th>
          <th scope="col" className="w-0 py-3 text-right font-normal dark:text-light-100">
            {formatProductMessage({
              id: 'product.info',
              defaultMessage: 'Product information',
            })}
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t">
        {lineItems.map((lineItem) => (
          <tr key={lineItem.quoteRequestLineItem.lineItemId} className={`${lineItem.isRemoved ? styles.removed : ''}`}>
            <td className="py-2 pr-2">
              <div className="flex items-center">
                <Image
                  src={lineItem.quoteRequestLineItem.variant.images[0]}
                  alt={lineItem.quoteRequestLineItem.name}
                  className="mr-6 h-8 w-8 rounded object-cover object-center"
                />
                <div className={`font-medium text-gray-900 dark:text-light-100 ${styles.ellipsis}`}>
                  {lineItem.quoteRequestLineItem.name}
                </div>
              </div>
            </td>
            <td className="flex py-6 pr-8 dark:text-light-100">
              <span>{CurrencyHelpers.formatForCurrency(lineItem.quoteRequestLineItem.price)}</span>
              {hasDiscountedPrice(lineItem) && (
                <>
                  <ArrowSmRightIcon className="mx-1 mt-0.5 h-4 w-4 text-green-400" />
                  <span>
                    {CurrencyHelpers.formatForCurrency(
                      lineItem.quoteRequestLineItem.price.centAmount -
                        lineItem.quoteLineItem.discounts[0]?.discountedAmount.centAmount,
                    )}
                  </span>
                </>
              )}
              {hasLineItemNewPrice(lineItem) && (
                <>
                  <ArrowSmRightIcon className="mx-1 mt-0.5 h-4 w-4 text-green-400" />
                  <span>{CurrencyHelpers.formatForCurrency(lineItem.quoteLineItem.price)}</span>
                </>
              )}
            </td>
            <td className="py-6 pr-8 dark:text-light-100">
              <span>{lineItem.quoteRequestLineItem.count}</span>
              {hasLineItemNewCount(lineItem) && (
                <>
                  <ArrowSmRightIcon className="mx-1 mt-0.5 h-4 w-4 text-green-400" />
                  <span>{lineItem.quoteLineItem.count}</span>
                </>
              )}
            </td>
            <td className="flex py-6 pr-8 dark:text-light-100">
              <span>{CurrencyHelpers.formatForCurrency(lineItem.quoteRequestLineItem.totalPrice)}</span>
              {lineItem.quoteLineItem &&
                lineItem.quoteLineItem?.totalPrice?.centAmount !==
                  lineItem.quoteRequestLineItem?.totalPrice?.centAmount && (
                  <>
                    <ArrowSmRightIcon className="mx-1 mt-0.5 h-4 w-4 text-green-400" />
                    <span>{CurrencyHelpers.formatForCurrency(lineItem.quoteLineItem?.totalPrice)}</span>
                  </>
                )}
            </td>
            <td className="whitespace-nowrap py-6 text-right font-medium dark:text-light-100">
              <NextLink href={lineItem.quoteRequestLineItem._url || ''}>
                <a className="text-accent-400">
                  {formatProductMessage({
                    id: 'product.view',
                    defaultMessage: 'View product',
                  })}
                  <span className="sr-only">, {lineItem.quoteRequestLineItem.name}</span>
                </a>
              </NextLink>
            </td>
          </tr>
        ))}
        {/* New added items */}
        {remainingFromQuoteLineItems.map((lineItem) => (
          <tr key={lineItem.lineItemId} className={styles.added}>
            <td className="py-2 pr-2">
              <div className="flex items-center">
                <Image
                  src={lineItem.variant.images[0]}
                  alt={lineItem.name}
                  className="mr-6 h-8 w-8 rounded object-cover object-center"
                />
                <div className={`font-medium text-gray-900 dark:text-light-100 ${styles.ellipsis}`}>
                  {lineItem.name}
                </div>
              </div>
            </td>
            <td className="flex py-6 pr-8 dark:text-light-100">{CurrencyHelpers.formatForCurrency(lineItem.price)}</td>
            <td className="py-6 pr-8 dark:text-light-100">{lineItem.count}</td>
            <td className="flex py-6 pr-8 dark:text-light-100">
              <span>{CurrencyHelpers.formatForCurrency(lineItem.totalPrice)}</span>
            </td>
            <td className="whitespace-nowrap py-6 text-right font-medium dark:text-light-100">
              <NextLink href={lineItem._url || ''}>
                <a className="text-accent-400">
                  {formatProductMessage({
                    id: 'product.view',
                    defaultMessage: 'View product',
                  })}
                  <span className="sr-only">, {lineItem.name}</span>
                </a>
              </NextLink>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
