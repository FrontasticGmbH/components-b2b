import React, { useCallback, useEffect, useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { Organization } from 'types/organization';
import debounce from 'lodash.debounce';
import { useFormat } from 'helpers/hooks/useFormat';
import { Reference, ReferenceLink } from 'helpers/reference';
import { calculateCartCount } from 'helpers/utils/calculateCartCount';
import { useCart } from 'frontastic';
import CartsExplorerButton from '../cart/cartsExplorerButton';

interface CartButtonProps {
  cartLink?: Reference;
  organization?: Organization;
}

const CartButton: React.FC<CartButtonProps> = ({ cartLink, organization }) => {
  const { data: cart } = useCart();
  //i18n messages
  const { formatMessage: formatCartMessage } = useFormat({ name: 'cart' });
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isCartDisabled, setIsCartDisabled] = useState(true);

  const debouncedSetCartDisabled = useCallback(
    debounce((value) => {
      setCartItemCount(calculateCartCount(value?.lineItems || []));
      setIsCartDisabled(typeof value === 'undefined');
    }, 2000),
    [],
  );

  useEffect(() => {
    debouncedSetCartDisabled(cart);
  }, [cart]);

  return (
    <>
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
      {!!organization.superUserBusinessUnitKey && <CartsExplorerButton className="ml-2 h-4 w-4" />}
    </>
  );
};

export default CartButton;
