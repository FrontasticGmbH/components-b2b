import React, { HTMLAttributes, useEffect, useState } from 'react';
import { Product } from 'cofe-ct-b2b-ecommerce/types/product/Product';
import { Variant } from 'cofe-ct-b2b-ecommerce/types/product/Variant';
import { UIProduct } from '..';
import VariantSelector from '../variant-selector';

type Props = {
  product: Product;
  onChangeVariantIdx: (idx: number) => void;
  variant: Variant;
};

const getVariantWithZeroPriceIdx = (product: Product): number => {
  const zeroPriceVariant = product.variants.findIndex((variant) => !variant.price?.centAmount);
  return zeroPriceVariant === -1 ? 0 : zeroPriceVariant;
};

const ConfigurableComponent: React.FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  product,
  variant,
  onChangeVariantIdx,
  className,
}) => {
  const [selectedVariant, setSelectedVariant] = useState<Variant>();
  const [uiProduct, setUiProduct] = useState<UIProduct>();

  useEffect(() => {
    if (product && selectedVariant) {
      setUiProduct({
        name: product.name,
        variants: product.variants,
        categories: product.categories,
        price: selectedVariant.price,
        images: selectedVariant.images?.map((img: string, id: number) => ({
          id: `${selectedVariant.sku}-${id}`,
          src: img,
          alt: selectedVariant.sku,
        })),
        description: `
                        <p>${product.description || ''}</p>
                      `,
      });
    }
  }, [product, selectedVariant]);

  useEffect(() => {
    if (variant) {
      setSelectedVariant(variant);
    } else {
      const idx = getVariantWithZeroPriceIdx(product);
      setSelectedVariant(product.variants[idx]);
      onChangeVariantIdx(idx);
    }
  }, [variant]);

  if (!selectedVariant || !uiProduct) {
    return null;
  }
  return (
    <VariantSelector
      className={className}
      product={uiProduct}
      onChangeVariantIdx={onChangeVariantIdx}
      variant={selectedVariant}
      hideAddTocartButton={true}
      hideWishlistButton={true}
      hideAvailability={true}
    />
  );
};

export default ConfigurableComponent;
