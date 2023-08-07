import React, { useState } from 'react';
import NextLink from 'next/link';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/solid';
import { Product } from '@Types/product/Product';
import WishlistButton from 'components/commercetools-ui/wishlist-button';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import { useCart } from 'frontastic';
import Image from 'frontastic/lib/image';
import AddToCartButton from '../product-details/add-to-cart-button';

interface Props {
  product: Product;
  isPreview?: boolean;
  previewURL?: string;
}

const ListItem: React.FC<Props> = ({ product, isPreview, previewURL }) => {
  const { formatMessage: formatProductMessage } = useFormat({ name: 'product' });
  const { data: cart } = useCart();

  const [count, setCount] = useState(1);

  const addedToCart = () => {
    setCount(1);
  };

  return (
    <div className="mb-16">
      <NextLink href={isPreview ? `${previewURL}${product._url}` : product._url}>
        <a className="group">
          <div className="bg-white-200 aspect-w-1 aspect-h-1 m-auto w-2/3 rounded-lg transition-shadow hover:shadow-xl xl:aspect-w-7 xl:aspect-h-4">
            <Image src={product.variants[0].images[0]} alt={product.name} className="object-scale-down object-center" />
          </div>
          <h2 className="mt-10 mb-4 overflow-hidden truncate text-xl font-bold text-gray-700 dark:text-light-100">
            {product.name}
          </h2>
          <p className="mb-5 text-lg text-gray-900 dark:text-light-100">
            {CurrencyHelpers.formatForCurrency(product.variants[0].price)} Each
          </p>
        </a>
      </NextLink>
      <div className="flex flex-row justify-between">
        {!product.variants?.[0]?.isOnStock && (
          <div className="text-sm text-gray-400">
            {formatProductMessage({ id: 'outOfStock', defaultMessage: 'Out of stock' })}
          </div>
        )}
        <div className="flex flex-row">
          <button
            className="mr-2 items-center rounded-md border border-transparent bg-transparent text-center text-sm font-medium text-white transition-colors duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
            type="button"
            onClick={() => setCount(count - 1)}
            disabled={count <= 1 || !product.variants?.[0].isOnStock}
          >
            <MinusCircleIcon
              className={`h-4 w-4 ${
                count <= 1 || !product.variants?.[0].isOnStock ? 'text-gray-300' : 'text-accent-400'
              }`}
            />
          </button>
          <input
            className="w-10 appearance-none rounded border border-gray-300 px-1 leading-tight text-gray-700 shadow focus:outline-none disabled:bg-gray-400"
            onChange={(e) => setCount(parseInt(e.target.value || '1', 10))}
            value={count}
            disabled={!product.variants?.[0].isOnStock}
          ></input>
          <button
            type="button"
            className="ml-2 items-center rounded-md border border-transparent bg-transparent text-center text-sm font-medium text-white transition-colors duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
            onClick={() => setCount(count + 1)}
            disabled={!product.variants?.[0].isOnStock}
          >
            <PlusCircleIcon
              className={`h-4 w-4 ${!product.variants?.[0].isOnStock ? 'text-gray-300' : 'text-accent-400'}`}
            />
          </button>
        </div>
      </div>
      <AddToCartButton
        disabled={!product.variants?.[0].isOnStock}
        quantity={count}
        variant={product.variants[0]}
        onAddedToCart={addedToCart}
      />
      <WishlistButton isCompact variant={product?.variants?.[0]} />
    </div>
  );
};

export default ListItem;
