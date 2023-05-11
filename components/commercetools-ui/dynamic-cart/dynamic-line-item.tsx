import React, { useRef } from 'react';
import { Combobox } from '@headlessui/react';
import { Product } from '@Types/product/Product';
import { Variant } from '@Types/product/Variant';
import debounce from 'lodash.debounce';
import { useProducts } from 'frontastic';
import { DynamicCartItem } from '.';
import { LoadingIcon } from '../icons/loading';
import styles from './index.module.css';

type Props = {
  lineItem: DynamicCartItem;
  updateLineitem: (id: string, keys: string[], values: any[]) => Promise<void>;
  isLastItem: boolean;
  addLineItem: () => void;
};

const DynamicLineitem: React.FC<Props> = ({ lineItem, updateLineitem, isLastItem, addLineItem }) => {
  const { query } = useProducts();

  const inputRef = useRef<HTMLInputElement>();
  const quantityRef = useRef<HTMLInputElement>();

  const updateItemQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateLineitem(lineItem.id, ['selectedQuantity'], [event.target.value]);
  };
  const debouncedQuery = debounce(async (text) => {
    updateLineitem(lineItem.id, ['isLoading'], [true]);

    const { items }: { items: Product[] } = await query(`query=${text}`);
    updateLineitem(lineItem.id, ['items', 'isLoadin'], [items, false]);
  }, 500);

  const updateItemValue = async (value) => {
    if (value.length >= 2) {
      debouncedQuery(value);
    } else {
      updateLineitem(lineItem.id, ['items'], [[]]);
    }
  };
  const selectVariantAsLineItem = async (variant: Variant) => {
    await updateLineitem(lineItem.id, ['selectedVariant', 'items'], [variant, []]);
    quantityRef.current.focus();
  };

  const selectProductAsLineItem = async (product: Product) => {
    if (product.variants.length === 1) {
      await updateLineitem(
        lineItem.id,
        ['selectedProduct', 'selectedVariant', 'items'],
        [product, product.variants[0], []],
      );

      quantityRef.current.focus();
    } else {
      updateLineitem(lineItem.id, ['selectedProduct'], [product]);
      inputRef.current.focus();
    }
  };

  const getVariantName = (attributes: Record<string, any>) => {
    return Object.keys(attributes)
      .map((key) => {
        if (typeof attributes[key] === 'object') {
          return typeof attributes[key].label === 'undefined' ? null : `${key}: ${attributes[key].label}`;
        }
        return typeof attributes[key] === 'undefined' ? null : `${key}: ${attributes[key]}`;
      })
      .filter((item) => item)
      .join(', ');
  };
  return (
    <div className="dynamic-cart-item mb-4 flex">
      <div className="dynamic-cart-item__input-wrapper flex flex-row px-2">
        {!lineItem.selectedVariant && (
          <>
            <input
              id={`item_${lineItem.id}`}
              ref={inputRef}
              type="text"
              placeholder="Search by SKU or product name..."
              className="dynamic-cart-item__input input input-primary"
              onChange={(event) => updateItemValue(event.target.value)}
            />
            {lineItem.isLoading && (
              <LoadingIcon className="dynamic-cart-item__input-loader ml-2 h-4 w-4 animate-spin text-gray-400" />
            )}
            {!lineItem.items?.length && !lineItem.isLoading && inputRef.current?.value.length >= 2 && (
              <ol className={`dynamic-cart-item__search absolute hidden ${styles.search}`}>
                <li className="dynamic-cart-item__search-item">Nothing found</li>
              </ol>
            )}
          </>
        )}
        {!!lineItem.selectedVariant && (
          <>
            <input
              id={`item_${lineItem.id}`}
              className="dynamic-cart-item__selected-item input input-primary"
              type="text"
              readOnly={true}
              value={lineItem.selectedProduct.name}
            />
            <input
              id={`item-quantity_${lineItem.id}`}
              type="number"
              ref={quantityRef}
              defaultValue={1}
              className="dynamic-cart-item__quantity input input-primary ml-2"
              onChange={(event) => updateItemQuantity(event)}
            />
            {isLastItem && (
              <button className="dynamic-cart__add-item" onClick={addLineItem}>
                +
              </button>
            )}
          </>
        )}
        {!!lineItem.items?.length && !!lineItem.selectedProduct && !lineItem.selectedVariant && (
          <ol className={`dynamic-cart-item__search absolute hidden ${styles.search}`}>
            {lineItem.selectedProduct.variants.map((variant) => (
              <li className="dynamic-cart-item__search-item cursor-pointer border-b-2" key={variant.id}>
                <button onClick={() => selectVariantAsLineItem(variant)}>{getVariantName(variant.attributes)}</button>
              </li>
            ))}
          </ol>
        )}
        {!!lineItem.items?.length && !lineItem.selectedProduct && !lineItem.selectedVariant && (
          <ol className={`dynamic-cart-item__search absolute hidden ${styles.search}`}>
            {lineItem.items.map((product) => (
              <li className="dynamic-cart-item__search-item" key={product.productId}>
                <button onClick={() => selectProductAsLineItem(product)}>{product.slug}</button>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default DynamicLineitem;
