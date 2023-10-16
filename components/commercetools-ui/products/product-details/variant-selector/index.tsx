import React from 'react';
import { Product } from '@Types/product/Product';
import { Variant } from '@Types/product/Variant';
import { UIProduct } from '..';
import DropdownVariantSelector from './dropdown-variant-selector';
import GridVariantSelector from './grid-variant-selector';
import SingleVariantSelector from './single-variant-selector';

type Props = {
  product: UIProduct;
  subscriptions?: Product[];
  configurableComponents?: Product[];
  hideAddTocartButton?: boolean;
  hideWishlistButton?: boolean;
  hideAvailability?: boolean;
  onChangeVariantIdx: (idx: number) => void;
  variant: Variant;
};

const VariantSelector: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  product,
  subscriptions,
  configurableComponents,
  variant,
  onChangeVariantIdx,
  hideAddTocartButton,
  hideWishlistButton,
  hideAvailability,
  className,
}) => {
  const variantSelectors: string[] = product?.variants?.[0]?.attributes?.['variant-selector-attributes'];

  const isFirstAttributeAvailable = variantSelectors?.length
    ? product.variants?.some((item) => typeof item.attributes[variantSelectors[0]] !== 'undefined')
    : false;

  const isSecondAttributeAvailable =
    variantSelectors?.length > 1
      ? product.variants?.some((item) => typeof item.attributes[variantSelectors[1]] !== 'undefined')
      : false;

  if (!variantSelectors?.length || !isFirstAttributeAvailable) {
    return (
      <DropdownVariantSelector
        product={product}
        subscriptions={subscriptions}
        configurableComponents={configurableComponents}
        hideAddTocartButton={hideAddTocartButton}
        hideWishlistButton={hideWishlistButton}
        hideAvailability={hideAvailability}
        onChangeVariantIdx={onChangeVariantIdx}
        variant={variant}
        className={className}
      />
    );
  }
  if (variantSelectors?.length === 1 && isFirstAttributeAvailable) {
    return (
      <SingleVariantSelector
        variantSelector={variantSelectors[0]}
        subscriptions={subscriptions}
        configurableComponents={configurableComponents}
        hideAddTocartButton={hideAddTocartButton}
        hideWishlistButton={hideWishlistButton}
        hideAvailability={hideAvailability}
        product={product}
        onChangeVariantIdx={onChangeVariantIdx}
        variant={variant}
        className={className}
      />
    );
  }
  if (variantSelectors?.length > 1 && isSecondAttributeAvailable) {
    return (
      <GridVariantSelector
        hideAddTocartButton={hideAddTocartButton}
        variantSelectors={variantSelectors}
        product={product}
        className={className}
        subscriptions={subscriptions}
      />
    );
  }
  return null;
};

export default VariantSelector;
