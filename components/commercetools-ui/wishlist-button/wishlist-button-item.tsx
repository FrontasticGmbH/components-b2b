import React, { useEffect, useState } from 'react';
import { CheckIcon } from '@heroicons/react/solid';
import { Wishlist } from '@Types/wishlist/Wishlist';
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
  const isAlreadyAdded = wishlist.lineItems.some((lineitem) => lineitem.variant?.sku === sku);

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
          <p>
            {wishlist.name}
            {!!wishlist.description && <span className="text-sm text-gray-600">({wishlist.description})</span>}
            {isLoading && <LoadingIcon className="ml-2 inline h-4 w-4 animate-spin" />}
            {!isLoading && (isAdded || isAlreadyAdded) && <CheckIcon className="ml-2 inline h-4 w-4" />}
          </p>
        </button>
      </div>
    </div>
  );
};

export default WishlistButtonItem;
