import React from 'react';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';
import { Reference } from 'helpers/reference';
import { useWishlist } from 'frontastic';
import { LoadingIcon } from '../icons/loading';
import EmptyWishlist from '../wishlist/empty_wishlist';
import { useLists } from './useLists';

interface Props {
  pageTitle?: string;
  emptyStateImage?: { media: any } | any;
  emptyStateTitle?: string;
  emptyStateSubtitle?: string;
  emptyStateCTALabel?: string;
  emptyStateCTALink?: Reference;
}

const SharedLists: React.FC<Props> = ({
  pageTitle,
  emptyStateImage,
  emptyStateTitle,
  emptyStateSubtitle,
  emptyStateCTALabel,
  emptyStateCTALink,
}) => {
  const { getSharedWishlists } = useWishlist();
  const { isLoading, isAdding, isDisabled, addItemsToCart, wishlists } = useLists(getSharedWishlists);

  if (isLoading) {
    return (
      <div className="text-center">
        <div className="mt-4 inline-block">
          <LoadingIcon className="h-4 w-4 animate-spin" />
        </div>
      </div>
    );
  }
  if (!wishlists?.length)
    return (
      <EmptyWishlist
        pageTitle={pageTitle}
        title={emptyStateTitle}
        subtitle={emptyStateSubtitle}
        ctaLabel={emptyStateCTALabel}
        ctaLink={emptyStateCTALink}
        image={emptyStateImage}
      />
    );
  return (
    <main className="mx-auto max-w-2xl px-2 pt-20 pb-24 sm:px-4 lg:max-w-7xl lg:px-8">
      <h1 className="pb-12 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-light-100 sm:text-4xl">
        Shred Purchase Lists with me
      </h1>
      <div>
        {wishlists.map((wishlist, i) => (
          <Disclosure key={wishlist.wishlistId}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`flex w-full justify-between rounded-lg bg-accent-100 px-4 py-2 text-left text-sm font-medium text-white hover:bg-accent-200 focus:outline-none focus-visible:ring focus-visible:ring-accent-500 focus-visible:ring-opacity-75 ${
                    !open && 'mb-4'
                  }`}
                >
                  <span>{wishlist.name}</span>
                  <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-accent-500`} />
                </Disclosure.Button>
                <Disclosure.Panel className="mb-4 rounded-md border px-4 pt-4 pb-2 text-sm text-gray-500">
                  <div className="grid grid-cols-2">
                    <p>
                      <span className="text-sm font-bold">Purchase list name: </span>
                      <span>{wishlist.name}</span>
                    </p>
                    <p>
                      <span className="text-sm font-bold">Description: </span>
                      <span>{wishlist.description}</span>
                    </p>
                    <p>
                      <span className="text-sm font-bold">Store: </span>
                      {!!wishlist.store && <span>{wishlist.store.key}</span>}
                      {!wishlist.store?.key && <span>N/A</span>}
                    </p>
                    <p>
                      <span className="text-sm font-bold">Items: </span>
                      <span>{wishlist.lineItems.length}</span>
                    </p>
                  </div>
                  <div className="grid grid-cols-3">
                    <Link href={`/wishlist/${wishlist.wishlistId}`}>
                      <button className="button button-primary">View</button>
                    </Link>
                    <button
                      onClick={() => addItemsToCart(wishlist.lineItems, i)}
                      disabled={isDisabled || wishlist.lineItems?.length === 0}
                      className="button button-primary flex flex-row items-center"
                    >
                      Order
                      {isAdding[i] && <LoadingIcon className="ml-4 h-4 w-4 animate-spin" />}
                    </button>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </main>
  );
};

export default SharedLists;
