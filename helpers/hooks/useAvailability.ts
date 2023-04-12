import { useEffect, useState } from 'react';
import { Variant } from 'cofe-ct-b2b-ecommerce/types/product/Variant';
import { useCart } from 'frontastic';

export const useAvailability = (variant: Variant) => {
  const { data: cart } = useCart();
  const [availableQuantity, setAvailableQuantity] = useState(variant.availability?.availableQuantity);
  useEffect(() => {
    if (!cart?.isPreBuyCart) {
      const currentLineItem = cart?.lineItems?.find((lineItem) => lineItem.variant?.sku === variant.sku);
      if (currentLineItem) {
        setAvailableQuantity(variant.availability?.availableQuantity - currentLineItem.count);
      }
    }
  }, [cart?.lineItems]);

  return {
    availableQuantity,
  };
};
