import React, { useEffect, useState } from 'react';
import { CheckIcon } from '@heroicons/react/solid';
import { Variant } from '@Types/product/Variant';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { useFormat } from 'helpers/hooks/useFormat';
import { useCart } from 'frontastic';

type Props = {
  selectedSubscriptions?: Variant[];
  selectedConfigurableComponents?: Variant[];
  quantity?: number;
  variant: Variant;
  disabled?: boolean;
  onAddedToCart?: () => void;
};

const AddToCartButton: React.FC<Props> = ({ quantity = 1, variant, disabled, onAddedToCart }) => {
  const { addItems, data: cart } = useCart();
  const { formatMessage: formatProductMessage } = useFormat({ name: 'product' });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [added, setAdded] = useState<boolean>(false);

  const handleAddToCart = async (variant: Variant) => {
    setIsLoading(true);
    await addItems([{ variant, quantity }]);
    setIsLoading(false);
    setAdded(true);
    if (onAddedToCart) {
      onAddedToCart();
    }
  };
  useEffect(() => {
    if (added) {
      setTimeout(() => {
        setAdded(false);
      }, 1000);
    }
  }, [added]);

  if (!cart) {
    return (
      <button
        type="button"
        className="mt-8 flex w-full flex-1 items-center justify-center rounded-md border border-transparent bg-accent-400 py-3 px-8 text-base font-medium text-white hover:bg-accent-500 focus:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-gray-50 disabled:bg-gray-400"
        disabled
      >
        {formatProductMessage({ id: 'no.cart', defaultMessage: 'No cart available' })}
      </button>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => handleAddToCart(variant)}
        className="mt-8 flex w-full flex-1 items-center justify-center rounded-md border border-transparent bg-accent-400 py-3 px-8 text-base font-medium text-white hover:bg-accent-500 focus:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-gray-50 disabled:bg-gray-400"
        disabled={!variant.isOnStock || isLoading || disabled}
      >
        {!isLoading && !added && (
          <>
            {variant.isOnStock
              ? formatProductMessage({ id: 'cart.add', defaultMessage: 'Add to Cart' })
              : formatProductMessage({ id: 'outOfStock', defaultMessage: 'Out of stock' })}
          </>
        )}

        {isLoading && <LoadingIcon className="h-6 w-6 animate-spin" />}
        {!isLoading && added && <CheckIcon className="h-6 w-6" />}
      </button>
    </>
  );
};

export default AddToCartButton;
