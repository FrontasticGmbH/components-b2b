import React, { useEffect, useState } from 'react';
import { CheckIcon } from '@heroicons/react/solid';
import { Product } from '@Types/product/Product';
import { Variant } from '@Types/product/Variant';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useBundlesHook } from 'helpers/hooks/useSubscription';
import { StringHelpers } from 'helpers/stringHelpers';
import { useCart } from 'frontastic';
import { UIProduct } from '..';
import Subscriptions from '../subscriptions';
import SingleVariantSelector from './single-variant-selector';

type Props = {
  product: UIProduct;
  subscriptions?: Product[];
  hideAddTocartButton?: boolean;
  variantSelectors: string[];
};

interface UIVariant {
  variant: Variant;
  quantity: number;
}
const getAttributeValue = (attributes, attributeKey) => {
  if (typeof attributes?.[attributeKey] === 'object') {
    return attributes?.[attributeKey]?.key;
  }
  return attributes?.[attributeKey];
};
const groupedVariants = (items, variantSelectors) => {
  const variants = [...items];
  const grouped: UIVariant[][] = [];
  while (variants.length) {
    const [current] = variants.splice(0, 1);
    const currentAttributeValue = getAttributeValue(current.attributes, variantSelectors[0]);
    const index = grouped.findIndex(
      (group) =>
        getAttributeValue(group?.[0].variant.attributes, variantSelectors[0]) === currentAttributeValue &&
        typeof currentAttributeValue !== 'undefined',
    );
    if (index > -1) {
      grouped[index].push({ variant: current, quantity: 0 });
    } else if (typeof currentAttributeValue !== 'undefined') {
      grouped.push([{ variant: current, quantity: 0 }]);
    }
  }
  return grouped.map((group) =>
    group.sort(
      (a, b) =>
        getAttributeValue(a.variant.attributes, variantSelectors[1]) -
        getAttributeValue(b.variant.attributes, variantSelectors[1]),
    ),
  );
};

const GridVariantSelector: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  product,
  subscriptions,
  variantSelectors,
  className,
  hideAddTocartButton,
}) => {
  const { addItems, data: cart } = useCart();
  const { handleBundleSelect, selectedBundles } = useBundlesHook(subscriptions);

  const [grouped, setGrouped] = useState(groupedVariants(product.variants, variantSelectors));
  const [selectedFirstVariantIdx, setSelectedFirstVariantIdx] = useState(0);
  const [firstSelectedVariant, setFirstSelectedVariant] = useState(grouped?.[0]?.[grouped?.[0]?.length - 1].variant);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [added, setAdded] = useState<boolean>(false);

  const handleChangeFirstSelector = (index: number) => {
    const variant = product.variants[index];
    if (variant) {
      const currentAttributeValue = getAttributeValue(variant.attributes, variantSelectors[0]);

      const i = grouped.findIndex(
        (group) =>
          getAttributeValue(group?.[0].variant.attributes, variantSelectors[0]) === currentAttributeValue &&
          typeof currentAttributeValue !== 'undefined',
      );
      if (i > -1) {
        setSelectedFirstVariantIdx(i);
        // select last Item in each group as the selected variant to comply with Map in Other variant selectors
        setFirstSelectedVariant(variant);
      }
    }
  };

  const lowestPrice = grouped
    ?.flat()
    .reduce((curr, prev) => Math.min(curr, prev.variant.price?.centAmount || curr), Number.MAX_SAFE_INTEGER);

  const updateQuantity = (value: string, group: number, item: number) => {
    const items = [...grouped];
    items[group][item].quantity = parseInt(value, 10);
    setGrouped(items);
  };

  const handleAddToCart = async () => {
    setIsLoading(true);
    const lineitems = grouped.flat().filter((lineitem) => lineitem.quantity > 0);
    await addItems(lineitems, selectedBundles);
    setGrouped(groupedVariants(product.variants, variantSelectors));
    setAdded(true);
    setIsLoading(false);
  };

  useEffect(() => {
    if (grouped.length) {
      setTotalPrice(
        grouped.reduce(
          (curr, group) =>
            curr +
            group.reduce((c, item) => (!item.quantity ? c : item.quantity * item.variant.price?.centAmount || 0), 0),
          0,
        ),
      );
      setTotalCount(grouped.reduce((curr, group) => curr + group.reduce((c, item) => c + item.quantity || 0, 0), 0));
    }
  }, [grouped]);

  useEffect(() => {
    if (added) {
      setTimeout(() => {
        setAdded(false);
      }, 1000);
    }
  }, [added]);

  // Hack - we have different attr names in different product types, so removing the 'text' prefix.
  // TODO:  The proper fix is to use the attr's display name from the product type
  const attrDisplayName = (name) => {
    if (name.startsWith('text')) {
      name = name.substring(4);
    }
    return StringHelpers.capitaliseFirstLetter(name);
  };

  return (
    <div className={`rounded-md border-2 px-4 py-1 ${className}`}>
      <div className="mb-4 flex flex-row justify-between border-b-2 pb-4">
        <div className=" basis-2/3">
          <span className="text-lg font-semibold text-black">{`${attrDisplayName(variantSelectors[0])}: `}</span>
          <SingleVariantSelector
            variantSelector={variantSelectors[0]}
            product={product}
            onChangeVariantIdx={handleChangeFirstSelector}
            variant={firstSelectedVariant}
            hideAddTocartButton
            hidePrice
            hideWishlistButton
          />
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-400">Starting at:</p>
          <p>{CurrencyHelpers.formatForCurrency(lowestPrice)}</p>
        </div>
      </div>

      <div className="">
        {grouped.map((group, i) => (
          <div
            key={`group-${i}`}
            className={`grid grid-cols-2 gap-y-6 gap-x-8 ${i === selectedFirstVariantIdx ? 'block' : 'hidden'}`}
          >
            {group.map((item, j) => (
              <div key={item.variant.sku} className="flex flex-row">
                <div className="flex basis-1/2 flex-col">
                  <p className="text-lg font-semibold text-black">
                    {`${attrDisplayName(variantSelectors[1])}: ${getAttributeValue(
                      item.variant.attributes,
                      variantSelectors[1],
                    )}`}
                  </p>
                  <div className="mt-1 text-gray-500">
                    {CurrencyHelpers.formatForCurrency(item.variant.price)}
                    <span className="ml-2 text-xs font-light">Each</span>
                  </div>
                  {!cart?.isPreBuyCart && (
                    <p className="text-sm text-gray-400">{`Available Qty: ${
                      item.variant.availability?.availableQuantity || 0
                    }`}</p>
                  )}
                </div>

                <div className="basis-1/2">
                  <input
                    className="input input-primary"
                    type="number"
                    min="0"
                    disabled={!item.variant.isOnStock && !cart?.isPreBuyCart}
                    value={item.quantity}
                    onChange={(e) => updateQuantity(e.target.value, i, j)}
                  ></input>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-col border-t-2 py-4">
        {!!subscriptions?.length && (
          <Subscriptions
            subscriptions={subscriptions}
            onSubscriptionSelect={handleBundleSelect}
            selectedSubscriptions={selectedBundles}
          />
        )}
        <div className="mt-8 flex flex-row items-center">
          <div className="text-center">
            <p className="text-gray-400">Total price:</p>
            <p>{CurrencyHelpers.formatForCurrency(totalPrice)}</p>
          </div>
          {!hideAddTocartButton && (
            <div className="ml-8 basis-2/3">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex w-full flex-1 items-center justify-center rounded-md border border-transparent bg-accent-400 py-3 px-8 text-base font-medium text-white hover:bg-accent-500 focus:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-gray-50 disabled:bg-gray-400"
                disabled={isLoading || totalCount === 0}
              >
                {!isLoading && !added && `Add all to cart`}

                {isLoading && <LoadingIcon className="h-6 w-6 animate-spin" />}
                {!isLoading && added && <CheckIcon className="h-6 w-6" />}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GridVariantSelector;
