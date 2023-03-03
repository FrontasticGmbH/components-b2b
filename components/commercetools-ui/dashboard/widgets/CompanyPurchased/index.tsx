import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ViewListIcon } from '@heroicons/react/outline';
import { LineItem } from '@Types/cart/LineItem';
import { Order } from '@Types/cart/Order';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import Image from 'frontastic/lib/image';
import { useBusinessUnitStateContext } from 'frontastic/provider/BusinessUnitState';

const CompanyPurchasedWidget = () => {
  const { businessUnit, getAllOrders } = useBusinessUnitStateContext();
  const [lineItems, setLineItems] = useState<LineItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const pickFourTopItems = (orderList: Order[]): LineItem[] => {
    if (orderList?.length) {
      const skuToCountMap: Record<string, LineItem> = orderList
        .reduce((p, c) => {
          return p.concat(c.lineItems.map((item) => ({ sku: item?.variant?.sku, ...item })) || []);
        }, [])
        .reduce((p, c) => {
          p[c.sku] ? (p[c.sku].count = p[c.sku].count + c.count) : (p[c.sku] = c);
          return p;
        }, {});

      return Object.values(skuToCountMap)
        .sort((a, b) => b.count - a.count)
        .slice(0, 4);
    }
    return [];
  };

  useEffect(() => {
    if (businessUnit) {
      (async () => {
        setIsLoading(true);
        const orders = await getAllOrders(businessUnit);
        if (orders?.length) {
          setLineItems(pickFourTopItems(orders));
        }
        setIsLoading(false);
      })();
    }
  }, [businessUnit]);

  return (
    <div className="h-full overflow-y-scroll border-l-4 border-teal-400 bg-white drop-shadow-md">
      <div className="flex flex-col px-4">
        <div className="flex flex-row justify-between border-b-2 py-4">
          <p className="flex items-center text-sm font-bold">
            <ViewListIcon className="h-4 w-4" />
            Purchased by your company
          </p>
        </div>
        {isLoading && <LoadingIcon className="my-0 mx-auto h-6 w-6 animate-spin" />}
        {!isLoading && !lineItems.length && <p className="pt-2 text-center text-base font-bold">No orders yet!</p>}
        {!isLoading && !!lineItems.length && (
          <div className="mt-4 flex flex-row flex-wrap">
            {lineItems.map((lineItem) => (
              <div className="w-1/2 p-2" key={lineItem.lineItemId}>
                <Link href={lineItem._url}>
                  <a className="group">
                    <div className="bg-white-200 m-auto h-24 w-24 rounded-lg transition-shadow hover:shadow-xl">
                      <Image
                        src={lineItem.variant.images[0]}
                        alt={lineItem.name}
                        className="rounded-lg object-scale-down object-center"
                      />
                    </div>
                    <h2 className="mt-8 overflow-hidden truncate text-sm font-bold text-gray-700 dark:text-light-100">
                      {lineItem.name}
                    </h2>
                    <p className="text-xs text-gray-900 dark:text-light-100">
                      {CurrencyHelpers.formatForCurrency(lineItem.price)} Each
                    </p>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyPurchasedWidget;
