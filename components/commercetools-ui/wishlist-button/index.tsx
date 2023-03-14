import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Popover, Transition } from '@headlessui/react';
import { HeartIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { Variant } from 'cofe-ct-b2b-ecommerce/types/product/Variant';
import { Wishlist } from 'cofe-ct-b2b-ecommerce/types/wishlist/Wishlist';
import { useWishlist } from 'frontastic';
import WishlistButtonItem from './wishlist-button-item';
import styles from './wishlist-button.module.scss';
import WishlistNewButton from './wishlist-new-button';
export interface WishlistButtonProps {
  variant: Variant;
  isCompact?: boolean;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ variant, isCompact }) => {
  const { getStoreWishlists } = useWishlist();
  const router = useRouter();
  const [wishlists, setWishlists] = useState<Wishlist[]>([]);
  const fecthWishlists = async () => {
    const list = await getStoreWishlists();
    setWishlists(list);
  };
  useEffect(() => {
    fecthWishlists();
    // check if distribution channel is changed then fetch wishlists again
  }, [router.query]);

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          {!isCompact && (
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md border-2 bg-white px-3 py-3 text-base font-medium text-primary-400 text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <HeartIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
            </Popover.Button>
          )}
          {isCompact && (
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                flex flex-row text-sm font-medium text-accent-400`}
            >
              Add to purchase list
              {!open && <ChevronDownIcon className="mt-1 h-4 w-4" />}
              {open && <ChevronUpIcon className="mt-1 h-4 w-4" />}
            </Popover.Button>
          )}
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
              className={`absolute left-1/2 z-10 mt-3 w-60 max-w-sm -translate-x-1/2 transform rounded-md bg-gray-300 px-2 pb-4 ${styles.popover}`}
            >
              {wishlists?.map((wishlist) => (
                <WishlistButtonItem
                  wishlist={wishlist}
                  key={wishlist.wishlistId}
                  sku={variant.sku}
                  onAddToWishlist={fecthWishlists}
                />
              ))}
              <div className={`w-full ${wishlists?.length ? 'border-t-2' : ''}`}>
                <WishlistNewButton sku={variant.sku} onCreatedNewList={fecthWishlists} />
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default WishlistButton;
