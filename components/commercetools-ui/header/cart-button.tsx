import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { useFormat } from 'helpers/hooks/useFormat';
import { Reference, ReferenceLink } from 'helpers/reference';

interface CartButtonProps {
  cartItemCount?: number;
  cartLink?: Reference;
  isCartDisabled?: boolean;
}

const CartButton: React.FC<CartButtonProps> = ({ cartItemCount, cartLink, isCartDisabled }) => {
  //i18n messages
  const { formatMessage: formatCartMessage } = useFormat({ name: 'cart' });

  return (
    <ReferenceLink
      target={cartLink}
      className={`group relative flex items-center px-2 cart-button${isCartDisabled ? '--disabled' : ''}`}
    >
      <ShoppingCartIcon className={`h-8 w-8 shrink-0 text-black`} aria-hidden="true" />
      {cartItemCount > 0 && (
        <>
          <span className="absolute -top-0 -right-1 rounded-full bg-accent-400 px-1 hover:bg-accent-500">
            <span className="flex h-full w-full items-center justify-center text-xs text-white group-hover:text-white">
              {cartItemCount}
            </span>
          </span>
          <span className="sr-only">
            {formatCartMessage({
              id: 'cart.items.in.view',
              defaultMessage: 'items in cart, view cart',
            })}
          </span>
        </>
      )}
    </ReferenceLink>
  );
};

export default CartButton;
