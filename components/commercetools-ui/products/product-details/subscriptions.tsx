import React from 'react';
import { Product } from 'cofe-ct-b2b-ecommerce/types/product/Product';
import { Variant } from 'cofe-ct-b2b-ecommerce/types/product/Variant';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { getSelectedBundleLabel } from 'helpers/utils/bundleItemsHelpers';

type Props = {
  subscriptions: Product[];
  selectedSubscriptions: Variant[];
  onSubscriptionSelect: (i: number, sku: string) => void;
};

const Subscriptions: React.FC<Props> = ({ subscriptions, selectedSubscriptions, onSubscriptionSelect }) => {
  const handleSubscriptionSelect = (index: number, e: React.ChangeEvent<HTMLSelectElement>) => {
    onSubscriptionSelect(index, e.target.value);
  };
  return (
    <div className="flex w-full flex-col">
      {subscriptions.map((subscription, i) => (
        <div key={subscription.productId} className="mt-8 flex flex-col">
          <div>
            <span className="font-semibold">{subscription.name}</span>
            {!!selectedSubscriptions[i] && (
              <span className="ml-4 text-xs text-gray-400">{`(${CurrencyHelpers.formatForCurrency(
                subscription.variants?.[0]?.price ?? 0,
              )})`}</span>
            )}
          </div>
          <div className="mt-4">
            <select className="input input-primary" defaultValue="" onChange={(e) => handleSubscriptionSelect(i, e)}>
              <option value={null}>No subscription</option>
              {subscription.variants.map((variant) => (
                <option key={variant.sku} value={variant.sku}>
                  {getSelectedBundleLabel(variant, subscription.name)}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Subscriptions;
