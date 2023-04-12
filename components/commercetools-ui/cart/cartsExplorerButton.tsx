/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { Fragment, HTMLAttributes } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { calculateCartCount } from 'helpers/utils/calculateCartCount';
import { useCart } from 'frontastic';

const CartsExplorerButton: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const { allSuperUserCarts, data: currentCart, getCartById, createCart } = useCart();

  const handleCartSelection = async (cartId: string) => {
    await getCartById(cartId);
  };

  const handleCreateNewCart = async () => {
    await createCart();
  };

  return (
    <Popover className={`relative ${className}`}>
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                      ${open ? '' : 'text-opacity-90'}
                      flex flex-row text-sm font-medium text-accent-400`}
          >
            {!open && <ChevronDownIcon className="mt-1 h-4 w-4" />}
            {open && <ChevronUpIcon className="mt-1 h-4 w-4" />}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className={`absolute left-1/2 z-10 mt-3 max-h-[350px] w-60 max-w-sm -translate-x-1/2 transform overflow-y-scroll rounded-md bg-gray-100`}
            >
              {allSuperUserCarts?.map((cart) => (
                <button
                  type="button"
                  className={`inline w-full p-2 text-left text-xs hover:bg-gray-200 disabled:bg-gray-300 `}
                  disabled={cart.cartId === currentCart?.cartId}
                  key={cart.cartId}
                  onClick={() => handleCartSelection(cart.cartId)}
                >
                  <span>Cart</span>
                  {cart.origin === 'Quote' && <span>{` created from a quote`}</span>}
                  {cart.origin === 'Merchant' && <span>{` created by a SU`}</span>}
                  <span>{` with`}</span>
                  <span className="font-semibold">{` ${calculateCartCount(cart.lineItems) || 0} `}</span>
                  <span>{` lineitems`}</span>
                  {cart.email && (
                    <>
                      <span>, Email:</span>
                      <span className="font-semibold">{` ${cart.email}`}</span>
                    </>
                  )}
                  {(cart.shippingAddress?.firstName || cart.shippingAddress?.lastName) && (
                    <>
                      <span>, Name:</span>
                      <span className="font-semibold">{` ${cart.shippingAddress?.firstName || ''} ${
                        cart.shippingAddress?.lastName || ''
                      }`}</span>
                    </>
                  )}
                </button>
              ))}
              <button
                type="button"
                className={`inline w-full p-2 text-left text-xs hover:bg-gray-200 disabled:bg-gray-300 `}
                onClick={handleCreateNewCart}
              >
                + Create a new cart
              </button>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default CartsExplorerButton;
