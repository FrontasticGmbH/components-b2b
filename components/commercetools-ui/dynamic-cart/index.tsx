import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Product } from '@Types/product/Product';
import { Variant } from '@Types/product/Variant';
import { useCart, useUIStateContext } from 'frontastic';
import { LoadingIcon } from '../icons/loading';
import DynamicLineitem from './dynamic-line-item';
export interface DynamicCartItem {
  id: string;
  value: string;
  isLoading: boolean;
  items: Product[];
  selectedVariant: Variant;
  selectedProduct: Product;
  selectedQuantity: number;
}

const getInitialLineItem = () => ({
  id: new Date().getTime().toString(),
  value: '',
  items: [],
  isLoading: false,
  selectedVariant: null,
  selectedProduct: null,
  selectedQuantity: 0,
});

export const DynamicCart: React.FC = () => {
  const { addItems } = useCart();
  const { toggleFlyingCart } = useUIStateContext();

  const [isOneItemSelected, setIsOneItemSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [lineItems, setLineItems] = useState<DynamicCartItem[]>([getInitialLineItem()]);

  useEffect(() => {
    setIsOneItemSelected(lineItems.some((lineItem) => !!lineItem.selectedVariant));
  }, [lineItems]);

  const addLineItem = async () => {
    const newItemId = new Date().getTime().toString();
    await setLineItems([
      ...lineItems,
      {
        id: newItemId,
        value: '',
        isLoading: false,
        items: [],
        selectedVariant: null,
        selectedProduct: null,
        selectedQuantity: 0,
      },
    ]);
  };

  const updateItem = async (id: string, keys: string[], values: any[]) => {
    return setLineItems(
      lineItems.map((item) => {
        if (item.id !== id) {
          return item;
        } else {
          return {
            ...item,
            ...keys.reduce((p, c, i) => ({ ...p, [c]: values[i] }), {}),
          };
        }
      }),
    );
  };

  const addAllToCart = async () => {
    setIsLoading(true);
    await addItems(
      lineItems
        .filter((lineItem) => !!lineItem.selectedVariant)
        .map((lineItem) => ({ variant: lineItem.selectedVariant, quantity: lineItem.selectedQuantity })),
    );
    setIsLoading(false);
    setTimeout(() => {
      setLineItems([getInitialLineItem()]);
      toggleFlyingCart(false);
    }, 300);
  };

  return (
    <div className="dynamic-cart flex w-full flex-col">
      {lineItems.map((lineItem, i) => (
        <DynamicLineitem
          lineItem={lineItem}
          key={lineItem.id}
          updateLineitem={updateItem}
          addLineItem={addLineItem}
          isLastItem={lineItems.length - 1 === i}
        />
      ))}

      <button disabled={!isOneItemSelected} className="button button-primary ml-2" onClick={() => addAllToCart()}>
        {!isLoading && 'Add all to cart'}
        {isLoading && <LoadingIcon className="h-6 w-6 animate-spin" />}
      </button>
    </div>
  );
};
