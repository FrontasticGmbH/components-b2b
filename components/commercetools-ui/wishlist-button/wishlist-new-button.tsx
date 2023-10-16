import React, { useEffect, useState } from 'react';
import { PlusIcon } from '@heroicons/react/outline';
import { CheckIcon } from '@heroicons/react/solid';
import { Wishlist } from '@Types/wishlist/Wishlist';
import { useWishlist } from 'frontastic';
import { LoadingIcon } from '../icons/loading';

type Props = {
  sku: string;
  onCreatedNewList: () => void;
};

const WishlistNewButton: React.FC<Props> = ({ sku, onCreatedNewList }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [data, setData] = useState<Wishlist>({
    name: '',
    description: '',
  });

  const { addToNewWishlist } = useWishlist();

  const handleAddToNewWishlist = async () => {
    setIsLoading(true);
    await addToNewWishlist(data, sku, 1);
    setIsLoading(false);
    setIsAdded(true);
    onCreatedNewList();
  };

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isAdded) {
      setTimeout(() => {
        setIsAdded(false);
        setIsExpanded(false);
      }, 1500);
    }
  }, [isAdded]);

  return (
    <div>
      <div className="w-full pt-2">
        {!isExpanded && (
          <button
            className="mt-4 flex w-full flex-row items-center rounded-md border border-transparent bg-accent-400 p-2 text-center text-sm font-medium text-white shadow-sm transition-colors duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:bg-gray-300 sm:w-fit"
            type="button"
            onClick={() => setIsExpanded(true)}
          >
            <PlusIcon className="mr-2 h-4 w-4" />
            Create a new purchase list
          </button>
        )}
        {isExpanded && (
          <div className="flex w-full flex-col items-center">
            <input
              className="input input-primary mb-1"
              name="name"
              placeholder="name*"
              required
              value={data.name}
              onChange={handleUpdate}
            />
            <input
              className="input input-primary"
              placeholder="description"
              name="description"
              value={data.description}
              onChange={handleUpdate}
            />
            <button
              type="button"
              disabled={isLoading || !data.name}
              onClick={handleAddToNewWishlist}
              className="mt-4 flex w-full flex-row items-center rounded-md border border-transparent bg-accent-400 p-2 text-center text-sm font-medium text-white shadow-sm transition-colors duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:bg-gray-300 sm:w-fit"
            >
              Create new purchase list
              {isLoading && <LoadingIcon className="ml-2 h-4 w-4 animate-spin" />}
              {isAdded && <CheckIcon className="ml-2 h-4 w-4" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistNewButton;
