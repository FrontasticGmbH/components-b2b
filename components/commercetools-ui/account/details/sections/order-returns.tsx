import React from 'react';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';
import { LineItem } from '@Types/cart/LineItem';
import { ReturnInfo, ReturnInfoItem } from '@Types/cart/Order';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import Image from 'frontastic/lib/image';

type Props = {
  returnInfo: ReturnInfo[];
  lineItems: LineItem[];
};

interface ReturnLineItem extends ReturnInfoItem {
  variant: {
    images?: string[];
  };
  _url?: string;
  name?: string;
  price?: number;
}

const OrderReturns: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({ returnInfo, className, lineItems }) => {
  const price = (lineItem: LineItem) => {
    const discountValue = lineItem.discountedPrice?.centAmount || lineItem.discounts?.[0]?.discountedAmount?.centAmount;
    return !discountValue ? lineItem.price?.centAmount : lineItem.price?.centAmount - discountValue;
  };
  const getReturnLineitems = (returnLineItems: ReturnInfoItem[]): ReturnLineItem[] => {
    return lineItems
      .map((lineitem) => {
        const returnLineItemIdx = returnLineItems.findIndex(
          (returnLineitem) => returnLineitem.lineItemId === lineitem.lineItemId,
        );
        if (returnLineItemIdx === -1) {
          return null;
        }
        return {
          ...returnLineItems[returnLineItemIdx],
          variant: lineitem.variant,
          name: lineitem.name,
          price: price(lineitem),
        };
      })
      .filter((item) => item);
  };
  return (
    <div className={className}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="mt-4 flex w-full justify-between rounded-lg bg-accent-100 px-4 py-2 text-left text-sm font-medium text-white hover:bg-accent-200 focus:outline-none focus-visible:ring focus-visible:ring-accent-500 focus-visible:ring-opacity-75">
              <span>Return info</span>
              <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-white`} />
            </Disclosure.Button>
            <Disclosure.Panel className="rounded-b-md border-x-2 border-b-2 p-4 text-sm text-gray-500">
              {returnInfo.map((item, i) => (
                <div key={item.items?.[0]?.returnInfoId} className={i > 0 ? 'mt-4 border-t border-black pt-4' : ''}>
                  {(!!item.returnDate || !!item.returnTrackingId) && (
                    <div className="rounded-md bg-gray-100 p-2">
                      {!!item.returnDate && (
                        <p>
                          <span className="text-sm font-semibold">{`Return date: `}</span>
                          <span>{new Date(item.returnDate).toLocaleDateString()}</span>
                        </p>
                      )}
                      {!!item.returnTrackingId && (
                        <p>
                          <span className="text-sm font-semibold">{`Tracking number: `}</span>
                          <span>{item.returnTrackingId}</span>
                        </p>
                      )}
                    </div>
                  )}
                  <table className="mt-4 w-full text-gray-500 sm:mt-6">
                    <thead className="sr-only text-left text-sm text-gray-800 sm:not-sr-only">
                      <tr>
                        <th scope="col" className="py-1 pr-8 font-normal dark:text-light-100">
                          Product
                        </th>
                        <th
                          scope="col"
                          className="hidden w-1/5 py-1 pr-8 font-normal dark:text-light-100 sm:table-cell"
                        >
                          Price
                        </th>
                        <th scope="col" className="hidden py-1 pr-8 font-normal dark:text-light-100 sm:table-cell">
                          Return date
                        </th>
                        <th scope="col" className="hidden py-1 pr-8 font-normal dark:text-light-100 sm:table-cell">
                          Return quantity
                        </th>
                        <th scope="col" className="hidden py-1 pr-8 font-normal dark:text-light-100 sm:table-cell">
                          Shipment state
                        </th>
                        <th
                          scope="col"
                          className="text-ellipsis-150 hidden py-1 pr-8 font-normal dark:text-light-100 sm:table-cell"
                        >
                          Comment
                        </th>
                        <th scope="col" className="w-0 py-1 text-right font-normal dark:text-light-100">
                          Info
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t">
                      {getReturnLineitems(item.items).map((product) => (
                        <tr key={product.lineItemId}>
                          <td className="py-2 pr-8">
                            <Image
                              src={product.variant.images[0]}
                              alt={product.name}
                              className="mr-6 h-12 w-12 rounded object-cover object-center"
                            />
                          </td>
                          <td className="hidden py-2 pr-8 dark:text-light-100 sm:table-cell">
                            <span>{CurrencyHelpers.formatForCurrency(product.price)}</span>
                          </td>
                          <td className="hidden py-2 pr-8 dark:text-light-100 sm:table-cell">
                            {new Date(product.createdAt).toLocaleDateString()}
                          </td>
                          <td className="hidden py-2 pr-8 dark:text-light-100 sm:table-cell">{product.quantity}</td>
                          <td className="hidden py-2 pr-8 dark:text-light-100 sm:table-cell">
                            {product.shipmentState}
                          </td>
                          <td className="hidden py-2 pr-8 dark:text-light-100 sm:table-cell">{product.comment}</td>

                          <td className="whitespace-nowrap py-2 text-right font-medium dark:text-light-100">
                            <Link href={product._url || ''}>
                              <a className="text-accent-400">
                                View product
                                <span className="sr-only">, {product.name}</span>
                              </a>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default OrderReturns;
