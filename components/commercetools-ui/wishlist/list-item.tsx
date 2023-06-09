import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { LineItem } from '@Types/wishlist/LineItem';
import { Variant } from '@Types/product/Variant';
import debounce from 'lodash.debounce';
import { DateHelpers } from 'helpers/dateHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import useMediaQuery from 'helpers/hooks/useMediaQuery';
import { mobile } from 'helpers/utils/screensizes';
import { useCart, useWishlist } from 'frontastic';
import Image from 'frontastic/lib/image';
import { LoadingIcon } from '../icons/loading';

export const WishlistItem = ({ wishlistId, onUpdateList, item }) => {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [isRemoving, setIsRemoving] = useState<boolean>(false);
  const [count, setCount] = useState(item.count);
  const isMountedRef = useRef(false);
  const [isLargerThanMobile] = useMediaQuery(mobile);

  const { removeLineItem, updateLineItem } = useWishlist();
  const { addItem } = useCart();
  const router = useRouter();
  const { formatMessage } = useFormat({ name: 'common' });

  const goToProductPage = (itemUrl: string) => router.push(itemUrl);

  const handleRemoveLineItem = async (lineItem: LineItem) => {
    setIsRemoving(true);
    await removeLineItem(wishlistId, lineItem.lineItemId);
    setIsRemoving(false);
    onUpdateList();
  };

  const handleAddToCart = async (item: LineItem) => {
    setIsAdding(true);
    await addItem(item.variant as Variant, 1);
    setIsAdding(false);
  };

  const handleChange = (value: string) => {
    setCount(value);
  };

  const debounced = useCallback(
    debounce(async (value) => {
      setIsAdding(true);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      await updateLineItem(wishlistId, item.lineItemId, value);
      setIsAdding(false);
    }, 500),
    [],
  );

  useEffect(() => {
    if (item && isMountedRef.current) {
      setCount(item.count);
    }
  }, [item]);

  useEffect(() => {
    if (isMountedRef.current) {
      debounced(count);
    }
    isMountedRef.current = true;
  }, [count]);

  return (
    <li className="flex py-6">
      <div className="shrink-0  cursor-pointer">
        <Image
          alt="Front side of charcoal cotton t-shirt."
          width={60}
          height={60}
          className="h-18 w-18 rounded-md object-scale-down object-center sm:h-20 sm:w-20"
          src={item.variant.images[0]}
          onClick={() => goToProductPage(item._url)}
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col sm:ml-6">
        <div>
          <div className="flex justify-between">
            <h4 className="text-sm">
              <p
                onClick={() => goToProductPage(item._url)}
                className="cursor-pointer font-medium text-gray-700 hover:text-gray-800 dark:text-light-100"
              >
                {item.name}
              </p>
            </h4>
            <input
              value={count}
              type="text"
              disabled={isAdding}
              onChange={(e) => handleChange(e.target.value)}
              className="h-8 w-24 rounded border border-gray-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </div>
          {isLargerThanMobile ? (
            <p className="text-xs font-light text-gray-900 dark:text-light-100">{item.variant.sku}</p>
          ) : null}
        </div>

        <div className="mt-4 flex flex-1 items-end justify-between">
          <p className="flex items-center space-x-2 text-sm text-gray-700 dark:text-light-100">
            {isLargerThanMobile ? (
              <svg
                className="h-5 w-5 shrink-0 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            ) : null}
            <span className="text-xs md:text-sm">
              {formatMessage({
                id: 'item.added.on',
                defaultMessage: 'Item Added on',
              })}{' '}
              {DateHelpers.formatDate(item.addedAt)}
            </span>
          </p>
          <div className="ml-4 flex flex-row items-center">
            <button
              onClick={() => handleAddToCart(item)}
              disabled={isAdding}
              className="mr-4 flex flex-row items-center rounded-md bg-accent-400 px-4 py-2 text-sm text-white disabled:bg-gray-300"
            >
              Add to cart
              {isAdding && <LoadingIcon className="ml-4 h-4 w-4 animate-spin" />}
            </button>
            <button
              type="button"
              onClick={() => handleRemoveLineItem(item)}
              className="text-sm font-medium text-accent-400 hover:text-accent-500"
            >
              {!isRemoving && (
                <span>
                  {formatMessage({
                    id: 'remove',
                    defaultMessage: 'Remove',
                  })}
                </span>
              )}
              {isRemoving && <LoadingIcon className="h-4 w-4 animate-spin" />}
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
