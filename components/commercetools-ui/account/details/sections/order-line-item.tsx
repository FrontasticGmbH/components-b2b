import React from 'react';
import NextLink from 'next/link';
import { LineItem } from '@Types/cart/LineItem';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import { BUNDLE_ATTRIBUTE_NAME, getBundledPrice, getSelectedBundleLabel } from 'helpers/utils/bundleItemsHelpers';
import Image from 'frontastic/lib/image';

export function OrderLineItem({ lineItem }) {
  const { formatMessage: formatProductMessage } = useFormat({ name: 'product' });
  const discount = (() => {
    const discountValue = lineItem.discountedPrice?.centAmount || lineItem.discounts?.[0]?.discountedAmount?.centAmount;
    return !discountValue ? 0 : lineItem.price?.centAmount - discountValue;
  })();

  const bundles = lineItem.variant?.attributes?.[BUNDLE_ATTRIBUTE_NAME];

  return (
    <tr>
      <td className="py-2 pr-8">
        <div className="flex items-center">
          <Image
            src={lineItem.variant.images[0]}
            alt={lineItem.name}
            className="mr-6 h-16 w-16 rounded object-cover object-center"
          />
          <div>
            <div className="text-ellipsis-150 font-medium text-gray-900 dark:text-light-100">{lineItem.name}</div>
            {!!bundles?.length && (
              <div className="mt-2 flex flex-col text-xs">
                {bundles.map((bundle: LineItem) => (
                  <div className="td-other-details td-details__sku" key={bundle.lineItemId}>
                    <label className="">{`${bundle.name}: `}</label>
                    <span className="text-xs">{getSelectedBundleLabel(bundle.variant, bundle.name)}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-1 dark:text-light-100 sm:hidden">
              {CurrencyHelpers.formatForCurrency(
                CurrencyHelpers.addCurrency(
                  lineItem.price,
                  CurrencyHelpers.formatToMoney(getBundledPrice(lineItem) / 100),
                ),
              )}
            </div>
          </div>
        </div>
      </td>
      <td className="hidden py-2 pr-8 dark:text-light-100 sm:table-cell">
        <span className={!!discount ? 'line-through' : ''}>
          {' '}
          {CurrencyHelpers.formatForCurrency(
            CurrencyHelpers.addCurrency(lineItem.price, CurrencyHelpers.formatToMoney(getBundledPrice(lineItem) / 100)),
          )}
        </span>
        {!!discount && <span className="ml-2">{CurrencyHelpers.formatForCurrency(discount)}</span>}
      </td>
      <td className="hidden py-2 pr-8 dark:text-light-100 sm:table-cell">{lineItem.count}</td>
      <td className="hidden py-2 pr-8 dark:text-light-100 sm:table-cell">
        {CurrencyHelpers.formatForCurrency(
          CurrencyHelpers.addCurrency(
            lineItem.totalPrice,
            CurrencyHelpers.formatToMoney(getBundledPrice(lineItem) / 100),
          ),
        )}
      </td>
      <td className="whitespace-nowrap py-2 text-right font-medium dark:text-light-100">
        <NextLink href={lineItem._url || ''}>
          <a className="text-accent-400">
            {formatProductMessage({
              id: 'lineItem.view',
              defaultMessage: 'View product',
            })}
            <span className="sr-only">, {lineItem.name}</span>
          </a>
        </NextLink>
      </td>
    </tr>
  );
}
