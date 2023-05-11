import React, { useState } from 'react';
import { Product } from '@Types/product/Product';
import { Variant } from '@Types/product/Variant';
import WishlistButton from 'components/commercetools-ui/wishlist-button';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useBundlesHook } from 'helpers/hooks/useSubscription';
import { UIProduct } from '..';
import AddToCartButton from '../add-to-cart-button';
import ColorSelector from '../attribute-selectors/color-selector';
import GenericSelector from '../attribute-selectors/generic-selector';
import ConfigurableComponents from '../configurable-components';
import Subscriptions from '../subscriptions';

type Props = {
  product: UIProduct;
  subscriptions?: Product[];
  configurableComponents?: Product[];
  onChangeVariantIdx: (idx: number) => void;
  variant: Variant;
  variantSelector: string;
  hideAddTocartButton?: boolean;
  hidePrice?: boolean;
  hideWishlistButton?: boolean;
  hideAvailability?: boolean;
};

const SingleVariantSelector: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  product,
  subscriptions,
  configurableComponents,
  variant,
  onChangeVariantIdx,
  variantSelector,
  className,
  hideAvailability,
  hideAddTocartButton = false,
  hidePrice = false,
  hideWishlistButton = false,
}) => {
  const { handleBundleSelect: handleBundleSelect, selectedBundles: selectedBundles } = useBundlesHook(subscriptions);

  const { setSelectedBundles: setConfigurableComponents, selectedBundles: selectedConfiguirableComponent } =
    useBundlesHook(configurableComponents);

  const [isAddToCartDisabled, setIsAddToCartDisabled] = useState(false);
  const attributeSelector = () => {
    switch (variantSelector) {
      case 'color':
        return (
          <ColorSelector onChangeVariant={onChangeVariant} variants={product?.variants} selectedVariant={variant} />
        );
      default:
        return (
          <GenericSelector
            attributeKey={variantSelector}
            onChangeVariant={onChangeVariant}
            variants={product?.variants}
            selectedVariant={variant}
          />
        );
    }
  };

  const onChangeVariant = (selectedVariant: Variant) => {
    const index = product.variants.findIndex((variant) => variant.sku === selectedVariant.sku);

    if (index !== -1) {
      onChangeVariantIdx(index);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {!hidePrice && (
        <p className="text-3xl font-bold">
          {CurrencyHelpers.formatForCurrency(product?.price)}
          <span className="ml-8 text-base font-normal">Each</span>
        </p>
      )}
      <div className="mt-4">{attributeSelector()}</div>
      {!!subscriptions?.length && (
        <Subscriptions
          subscriptions={subscriptions}
          onSubscriptionSelect={handleBundleSelect}
          selectedSubscriptions={selectedBundles}
        />
      )}
      {!!configurableComponents?.length && (
        <ConfigurableComponents
          className="py-4"
          product={product}
          configurableComponents={configurableComponents}
          onConfigurationUpdate={setConfigurableComponents}
          updateAddToCartButtonState={setIsAddToCartDisabled}
        />
      )}
      {!hideAddTocartButton && (
        <AddToCartButton
          disabled={isAddToCartDisabled}
          selectedSubscriptions={selectedBundles}
          variant={variant}
          selectedConfigurableComponents={selectedConfiguirableComponent}
        />
      )}
      {!hideWishlistButton && (
        <div className="mt-2">
          <WishlistButton variant={variant} isCompact />
        </div>
      )}
    </div>
  );
};

export default SingleVariantSelector;
