import React, { ChangeEvent, useRef, useState } from 'react';
import { ShoppingCartIcon, TrashIcon } from '@heroicons/react/outline';
import { Product } from '@Types/product/Product';
import { Variant } from '@Types/product/Variant';
import debounce from 'lodash.debounce';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import { useCart, useProducts } from 'frontastic';
import { LoadingIcon } from '../icons/loading';

const getInitialLineItem = () => ({
  id: new Date().getTime().toString(),
  value: '',
  items: [],
  selectedVariant: null,
  selectedProduct: null,
  selectedQuantity: 1,
});

interface Props {
  goToProductPage: (_url: string) => void;
}

const AddToCartItem: React.FC<Props> = ({ goToProductPage }) => {
  const { query } = useProducts();
  const { addItems } = useCart();
  const { formatMessage } = useFormat({ name: 'cart' });

  const [isLoading, setIsLoading] = useState(false);
  const [lineItem, setLineItem] = useState(getInitialLineItem());

  const lineItemInputRef = useRef<HTMLInputElement>(null);
  const lineItemQuantityRef = useRef<HTMLInputElement>(null);

  const debouncedQuery = debounce(async (text) => {
    setIsLoading(true);

    const { items }: { items: Product[] } = await query(`query=${text}`);
    setLineItem({
      ...lineItem,
      items,
    });
    setIsLoading(false);
  }, 500);

  const updateItem = async (key: string, value: any) => {
    setLineItem({
      ...lineItem,
      [key]: value,
    });
  };

  const updateItemValue = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length >= 2) {
      debouncedQuery(event.target.value);
    } else {
      updateItem('items', []);
    }
  };

  const selectProductAsLineItem = async (product: Product) => {
    if (product.variants.length === 1) {
      await setLineItem({
        ...lineItem,
        selectedVariant: product.variants[0],
        selectedProduct: product,
        items: [],
      });
      lineItemQuantityRef.current?.focus();
    } else {
      updateItem('selectedProduct', product);
      lineItemInputRef.current?.focus();
    }
  };

  const selectVariantAsLineItem = async (variant: Variant) => {
    updateItem('selectedVariant', variant);
    await setLineItem({
      ...lineItem,
      selectedVariant: variant,
      items: [],
    });
    lineItemQuantityRef.current?.focus();
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

  const addItemToCart = async () => {
    setIsLoading(true);

    await addItems([{ variant: lineItem.selectedVariant, quantity: lineItem.selectedQuantity }]);
    setLineItem(getInitialLineItem());
    setIsLoading(false);
  };

  return (
    <tr className="dynamic-cart-item bg-gray-100">
      {!lineItem.selectedVariant && (
        <td colSpan={6} className="relative">
          <input
            id={`item_${lineItem.id}`}
            ref={lineItemInputRef}
            placeholder={formatMessage({ id: 'search-in-cart', defaultMessage: 'Search by SKU or product name...' })}
            type="text"
            className="dynamic-cart-item__input input input-primary w-full"
            onChange={(event) => updateItemValue(event)}
          />
          {isLoading && (
            <LoadingIcon className="dynamic-cart-item__input-loader mt-1/2 ml-2 h-4 w-4 animate-spin text-gray-400" />
          )}
          {!!lineItem.items.length && !lineItem.selectedProduct && (
            <ol className="dynamic-cart-item__search absolute hidden">
              {lineItem.items.map((product) => (
                <li className="dynamic-cart-item__search-item" key={product.productId}>
                  <button className="py-2" onClick={() => selectProductAsLineItem(product)}>
                    {product.slug}
                  </button>
                </li>
              ))}
            </ol>
          )}
          {!!lineItem.items.length && !!lineItem.selectedProduct && (
            <ol className="dynamic-cart-item__search absolute hidden">
              {lineItem.selectedProduct.variants.map((variant) => (
                <li className="dynamic-cart-item__search-item" key={variant.id}>
                  <button onClick={() => selectVariantAsLineItem(variant)}>{getVariantName(variant.attributes)}</button>
                </li>
              ))}
            </ol>
          )}
          {!lineItem.items?.length && !isLoading && lineItemInputRef.current?.value.length >= 2 && (
            <ol className={`dynamic-cart-item__search absolute hidden`}>
              <li className="dynamic-cart-item__search-item">Nothing found</li>
            </ol>
          )}
        </td>
      )}
      {!!lineItem.selectedVariant && (
        <>
          <td className="">
            <table className="inner-table">
              <tbody>
                <td className="td-line-item__details">
                  <p className="td__name">{lineItem.selectedProduct.name}</p>
                  <p className="td-other-details td-details__sku">
                    <label>Sku:</label> {lineItem.selectedVariant.sku}
                  </p>
                  <p className="td-other-details td-details__other-buttons">
                    <button className="button button-primary--small" type="button" onClick={addItemToCart}>
                      {!isLoading && <ShoppingCartIcon className="h-4 w-4 text-white"></ShoppingCartIcon>}
                      {isLoading && <LoadingIcon className="h-4 w-4 animate-spin text-gray-400" />}
                    </button>
                    <button
                      className="button button-primary--small ml-2"
                      type="button"
                      onClick={() => setLineItem(getInitialLineItem())}
                    >
                      <TrashIcon className="h-4 w-4 text-white"></TrashIcon>
                    </button>
                  </p>
                </td>
              </tbody>
            </table>
          </td>
          <td className="p-1">
            <input
              value={lineItem.selectedQuantity}
              className="input input-primary"
              onChange={(e) => setLineItem({ ...lineItem, selectedQuantity: +e.target.value })}
            />
            <p className="td-other-details td-details__availability">
              {lineItem.selectedVariant.availability?.availableQuantity > 0 && (
                <>
                  <label>In Stock:</label> {lineItem.selectedVariant.availability.availableQuantity}
                </>
              )}
              {lineItem.selectedVariant.availability?.availableQuantity <= 0 && <label>Out of stock</label>}
            </p>
          </td>
          <td className="p-1_text p-1">{CurrencyHelpers.formatForCurrency(lineItem.selectedVariant.price)}</td>
          <td className="p-1_text p-1">{CurrencyHelpers.formatForCurrency(lineItem.selectedVariant.totalPrice)}</td>
        </>
      )}
    </tr>
  );
};

export default AddToCartItem;
