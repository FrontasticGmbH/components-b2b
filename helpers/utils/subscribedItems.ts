/* eslint-disable @typescript-eslint/ban-ts-comment */
import { LineItem } from '@Types/cart/LineItem';
import { Variant } from '@Types/product/Variant';

export const SUBSCRIPTION_ATTRIBUTE_NAME = 'subscriptions';

export const subscriptionSlugToAttributes: Record<string, Record<string, string>> = {
  'Subscribe & Relax': { subscription_interval_days: 'Every' },
};

const getLable = (value: Record<string, string> | string | boolean) => {
  if (value === true) {
    return 'Y';
  }
  if (value === false) {
    return 'N';
  }
  if (typeof value === 'object') {
    return value.label;
  }
  return value;
};

export const getBundledPrice = (lineItem: LineItem): number => {
  return (lineItem.variant?.attributes?.[SUBSCRIPTION_ATTRIBUTE_NAME] as LineItem[]).reduce(
    (prev, curr) => prev + (curr.price?.centAmount || 0),
    0,
  );
};

export const getSelectedSubscriptionLabel = (variant?: Variant, name?: string) => {
  const bundleItemAttributes = subscriptionSlugToAttributes[name || ''];
  if (bundleItemAttributes) {
    return Object.keys(bundleItemAttributes)
      .map((attribute) => `${bundleItemAttributes[attribute]} ${getLable(variant?.attributes?.[attribute])}`)
      .join(', ');
  }
  return '';
};

export const bundleItems = (lineItems?: LineItem[]): LineItem[] => {
  if (lineItems?.length) {
    const bundles = lineItems?.filter((item) => !!item.parentId);
    const items = lineItems?.filter((item) => !item.parentId);

    return items?.map((item) => {
      const itemBundles = bundles?.filter((bundle) => bundle.parentId === item.lineItemId);
      // @ts-ignore
      item.variant?.attributes[SUBSCRIPTION_ATTRIBUTE_NAME] = [];
      itemBundles?.forEach((bundle) => {
        item.variant?.attributes[SUBSCRIPTION_ATTRIBUTE_NAME].push(bundle);
      });
      return item;
    });
  }
  return lineItems;
};
