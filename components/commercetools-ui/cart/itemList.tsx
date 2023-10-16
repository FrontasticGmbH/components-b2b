import React from 'react';
import { Cart } from '@Types/cart/Cart';
import { useFormat } from 'helpers/hooks/useFormat';
import AddToCartItem from './addToCartItem';
import Item from './item';

interface Props {
  readonly cart: Cart;
  readonly editItemQuantity: (lineItemId: string, newQuantity: number) => void;
  readonly goToProductPage: (_url: string) => void;
  readonly removeItem: (lineItemId: string) => void;
  isModificationForbidden?: boolean;
}

const ItemList: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  cart,
  editItemQuantity,
  goToProductPage,
  removeItem,
  className,
  isModificationForbidden,
}) => {
  const { formatMessage: formatCartMessage } = useFormat({ name: 'cart' });

  return (
    <section aria-labelledby="cart-heading" className={className}>
      <h2 id="cart-heading" className="sr-only">
        {formatCartMessage({ id: 'cart.shopping.items', defaultMessage: 'Items in your shopping cart' })}
      </h2>

      <table className="cart-table w-full table-auto">
        <thead className="cart-table__header">
          <tr>
            <th className="cart-table__header-sku">
              {formatCartMessage({ id: 'product-item', defaultMessage: 'Item' })}
            </th>
            <th className="cart-table__header-quantity">
              {formatCartMessage({ id: 'product-quantity', defaultMessage: 'Quantity' })}
            </th>
            <th className="cart-table__header-price">
              {formatCartMessage({ id: 'product-price', defaultMessage: 'Price' })}
            </th>
            <th className="cart-table__header-total-price">
              {formatCartMessage({ id: 'product-total-price', defaultMessage: 'Total' })}
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.lineItems.map((lineItem, i) => (
            <Item
              key={i}
              lineItem={lineItem}
              editItemQuantity={editItemQuantity}
              goToProductPage={goToProductPage}
              removeItem={removeItem}
              isModificationForbidden={isModificationForbidden}
            />
          ))}
          <AddToCartItem goToProductPage={goToProductPage} />
        </tbody>
      </table>
    </section>
  );
};

export default ItemList;
