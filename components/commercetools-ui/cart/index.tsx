import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { Cart as CartType } from '@Types/cart/Cart';
import { Organization } from 'types/Organization';
import { ShippingMethod } from '@Types/cart/ShippingMethod';
import { useFormat } from 'helpers/hooks/useFormat';
import { Reference } from 'helpers/reference';
import { useAccount } from 'frontastic';
import { NextFrontasticImage } from 'frontastic/lib/image';
import Spinner from '../spinner';
import EmptyCart from './emptyCart';
import ItemList from './itemList';
import OrderSummary from './orderSummary';

export interface Props {
  pageTitle?: string;
  emptyStateImage?: NextFrontasticImage;
  emptyStateTitle?: string;
  emptyStateSubtitle?: string;
  emptyStateCTALabel?: string;
  emptyStateCTALink?: Reference;
  cart: CartType;
  editItemQuantity: (lineItemId: string, newQuantity: number) => Promise<void>;
  removeItem: (lineItemId: string) => void;
  shippingMethods: ShippingMethod[];
  organization?: Organization;
}

const Cart = ({
  cart,
  editItemQuantity,
  removeItem,
  pageTitle,
  emptyStateImage,
  emptyStateTitle,
  emptyStateSubtitle,
  emptyStateCTALabel,
  emptyStateCTALink,
  organization,
}: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isQuoteRequestDisabled, setIsQuoteRequestDisabled] = useState(false);
  const [isOverStock, setIsOverStock] = useState(false);
  const { account } = useAccount();

  //i18n messages
  const { formatMessage: formatCartMessage } = useFormat({ name: 'cart' });

  const router = useRouter();

  const onCheckout = (e: FormEvent) => {
    e.preventDefault();
    router.push('/checkout');
  };

  const goToProductPage = (_url: string) => router.push(_url);

  useEffect(() => {
    if (cart?.lineItems) {
      setLoading(false);
    }
    setIsQuoteRequestDisabled(cart?.origin === 'Quote');
    setIsOverStock(
      cart?.lineItems?.some((lineItem) => lineItem.count > lineItem.variant?.availability?.availableQuantity),
    );
  }, [cart]);

  if (loading) {
    return (
      <div className="flex items-stretch justify-center py-20 px-12">
        <Spinner />
      </div>
    );
  }

  if ((!loading && !cart?.lineItems) || cart.lineItems.length < 1) {
    return (
      <EmptyCart
        pageTitle={pageTitle}
        image={emptyStateImage}
        title={emptyStateTitle}
        subtitle={emptyStateSubtitle}
        ctaLabel={emptyStateCTALabel}
        ctaLink={emptyStateCTALink}
      />
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-2 pt-20 pb-24 sm:px-4 lg:max-w-7xl lg:px-8">
      <h1 className="pb-12 text-left text-3xl font-extrabold tracking-tight text-gray-900 dark:text-light-100 sm:text-4xl">
        {formatCartMessage({ id: 'cart.shopping', defaultMessage: 'Your Shopping Cart' })}
      </h1>
      {loading ? (
        <div className="flex items-stretch justify-center py-10 px-12">
          <Spinner />
        </div>
      ) : (
        <form className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <ItemList
            cart={cart}
            editItemQuantity={editItemQuantity}
            goToProductPage={goToProductPage}
            removeItem={(lineItemId: string) => removeItem(lineItemId)}
            isModificationForbidden={isQuoteRequestDisabled}
            className="mb-8 lg:col-span-8"
          />
          <OrderSummary
            organization={organization}
            cart={cart}
            submitButtonLabel={cart.isPreBuyCart && 'Pre order'}
            disableSubmitButton={isOverStock || !cart.customerId || cart.customerId === account?.accountId}
            onSubmit={onCheckout}
            showDiscountsForm={false}
            currentStep="cart"
            isQuoteRequestDisabled={isQuoteRequestDisabled}
          />
        </form>
      )}
    </main>
  );
};

export default Cart;
