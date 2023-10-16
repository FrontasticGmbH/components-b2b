'use client';

import React, { useMemo } from 'react';
import useTranslation from '@/providers/I18n/hooks/useTranslation';
import useCloseFlyouts from '@/hooks/useCloseFlyouts';
import OrderSummary from '../order-summary';
import CartContent from './components/cart-content';
import { CartProps } from './types';
import CheckoutCTA from '../order-summary/components/checkout-cta';
import { CheckoutCTAProps } from '../order-summary/types';

const Cart = ({ paymentMethods, transaction, onRequestQuote, ...props }: CartProps) => {
  const { translate } = useTranslation();

  const closeFlyouts = useCloseFlyouts();

  const defaultCheckoutCTAProps: CheckoutCTAProps = useMemo(() => {
    return {
      text: translate('cart.checkout.go'),
      link: '/checkout',
      onCheckout: closeFlyouts,
      onRequestQuote: () => {
        closeFlyouts();
        onRequestQuote();
      },
      disabled: false,
    };
  }, [closeFlyouts, translate, onRequestQuote]);

  return (
    <div className="relative bg-neutral-200">
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6 lg:px-5 lg:py-12 xl:px-12">
        <CartContent
          className="bg-white px-4 py-3 md:px-6 md:py-3 lg:w-[70%] lg:rounded-md lg:px-5 lg:py-9 xl:px-12"
          {...props}
        />

        <OrderSummary
          className="bg-white px-4 pb-3 pt-6 md:px-6 md:py-3 lg:mt-0 lg:w-[30%] lg:rounded-md lg:p-9 lg:pb-11 xl:px-12"
          title="Order Summary"
          paymentMethods={paymentMethods}
          button={<CheckoutCTA className="hidden w-full md:grid" {...defaultCheckoutCTAProps} />}
          transaction={transaction}
        />
      </div>

      <CheckoutCTA
        className="sticky bottom-0 grid w-full border-t border-neutral-400 bg-white p-4 md:hidden"
        {...defaultCheckoutCTAProps}
      />
    </div>
  );
};

export default Cart;