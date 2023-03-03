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
  onChangeVariantIdx: (idx: number) => void;
  variant: Variant;
};

const VariantSelector: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  product,
  subscriptions,
  variant,
  onChangeVariantIdx,
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
