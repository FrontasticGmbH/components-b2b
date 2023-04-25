import { useState } from 'react';
import { Product } from '@Types/product/Product';
import { Variant } from '@Types/product/Variant';

export const useBundlesHook = (bundledProducts?: Product[]) => {
  const [selectedBundles, setSelectedBundles] = useState<Variant[]>(Array(bundledProducts?.length).fill(null));

  const handleBundleSelect = (index: number, sku: string) => {
    const selectedVariant = !sku ? null : bundledProducts?.[index].variants.find((v) => v.sku === sku);
    setSelectedBundles(
      selectedBundles.map((_, i) => {
        if (i === index) {
          return selectedVariant;
        }
        return _;
      }) as Variant[],
    );
  };

  return {
    selectedBundles,
    setSelectedBundles,
    handleBundleSelect,
  };
};
