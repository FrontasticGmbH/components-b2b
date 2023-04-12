import React, { useEffect, useState } from 'react';
import { CheckIcon } from '@heroicons/react/solid';
import { Wishlist } from 'cofe-ct-b2b-ecommerce/types/wishlist/Wishlist';
import { useWishlist } from 'frontastic';
import { LoadingIcon } from '../icons/loading';
type Props = {
  wishlist: Wishlist;
  sku: string;
  onAddToWishlist: () => void;
};

const WishlistButtonItem: React.FC<Props> = ({ wishlist, sku, onAddToWishlist }) => {
  const { addToWishlist } = useWishlist();

  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const count = wishlist.lineItems.find((lineitem) => lineitem.variant?.sku === sku)?.count;

  const handleAddToWishlist = async () => {
    setIsLoading(true);
    await addToWishlist(wishlist.wishlistId, sku, 1);
    setIsLoading(false);
    setIsAdded(true);
    onAddToWishlist();
  };

  useEffect(() => {
    if (isAdded) {
      setTimeout(() => setIsAdded(false), 1000);
    }
  }, [isAdded]);

  return (
    <div className="w-full p-1">
      <div>
        <button
          type="button"
          onClick={handleAddToWishlist}
          className="text-medium group flex w-full items-center rounded-md p-2"
        >
          <p className="text-ellipsis-150" title={wishlist.name}>
            {wishlist.name}
            {!!wishlist.description && <span className="text-sm text-gray-600">({wishlist.description})</span>}
            {isLoading && <LoadingIcon className="ml-2 inline h-4 w-4 animate-spin" />}
          </p>
          {!isLoading && (isAdded || !!count) && (
            <>
              <CheckIcon className="ml-2 inline h-4 w-4" />
              <span className="text-xs text-gray-400">{`(${count})`}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default WishlistButtonItem;
