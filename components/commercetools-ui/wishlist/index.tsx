import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { BusinessUnit } from 'cofe-ct-b2b-ecommerce/types/business-unit/BusinessUnit';
import { Variant } from 'cofe-ct-b2b-ecommerce/types/product/Variant';
import { Wishlist } from 'cofe-ct-b2b-ecommerce/types/wishlist/Wishlist';
import { useFormat } from 'helpers/hooks/useFormat';
import { Reference } from 'helpers/reference';
import { useCart, useWishlist } from 'frontastic';
import { LoadingIcon } from '../icons/loading';
import ShareButton from '../wishlists/shareButton';
import EmptyWishlist from './empty_wishlist';
import List from './list';

export interface Props {
  pageTitle?: string;
  emptyStateImage?: { media: any } | any;
  emptyStateTitle?: string;
  emptyStateSubtitle?: string;
  emptyStateCTALabel?: string;
  emptyStateCTALink?: Reference;
  wishlistId: string;
  associations: BusinessUnit[];
}

const WishList: React.FC<Props> = ({
  pageTitle,
  emptyStateImage,
  emptyStateTitle,
  emptyStateSubtitle,
  emptyStateCTALabel,
  emptyStateCTALink,
  wishlistId,
  associations,
}) => {
  const { getWishlist, deleteWishlist, renameWishlist, fetchStoreWishlists } = useWishlist();
  const { formatMessage: formatWishlistMessage } = useFormat({ name: 'wishlist' });
  const { addItems } = useCart();
  const router = useRouter();

  const [error, setError] = useState('');
  const [wishlist, setWishlist] = useState<Wishlist>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddingAll, setIsAddingAll] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false);
  const [name, setName] = useState(wishlist?.name);

  const addItemsToCart = async () => {
    setIsAddingAll(true);
    await addItems(wishlist.lineItems?.map((item) => ({ variant: item.variant as Variant, quantity: item.count })));
    setIsAddingAll(false);
    router.push('/checkout');
  };

  const handleRemoveList = async () => {
    setIsRemoving(true);
    await deleteWishlist(wishlistId);
    fetchStoreWishlists();
    setIsRemoving(false);
    router.push('/wishlist');
  };

  const fecthWishlist = async () => {
    const list = await getWishlist(wishlistId);
    setWishlist(list);
  };

  const handleRename = async () => {
    setIsRenaming(true);
    await renameWishlist(wishlistId, name);
    fetchStoreWishlists();
    setIsRenaming(false);
  };

  useEffect(() => {
    if (wishlist) {
      setName(wishlist.name);
    }
  }, [wishlist]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        await fecthWishlist();
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    })();
    fecthWishlist();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center">
        <div className="mt-4 inline-block">
          <LoadingIcon className="h-4 w-4 animate-spin" />
        </div>
      </div>
    );
  }

  if (!!error) {
    return (
      <div className="text-center">
        <div className="mt-4 inline-block">
          <p className="text-center font-medium text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  if (!wishlist?.lineItems?.length)
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
        {formatWishlistMessage({ id: 'wishlist.items', defaultMessage: 'Wishlist Items' })}
      </h1>
      <div className="mx-auto max-w-2xl bg-gray-100 p-5 lg:max-w-3xl">
        <div>
          <p className="my-1">
            <span className="text-sm font-bold">Purchase list name: </span>
            <div className="inline">
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-8 w-72 rounded border border-gray-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              />
              {wishlist.name !== name && (
                <button
                  disabled={isRenaming}
                  className="ml-2 inline-flex h-8 w-16 justify-center rounded-md border border-transparent bg-accent-400 py-1 text-center text-sm font-medium text-white shadow-sm transition-colors duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 disabled:bg-gray-300"
                  onClick={handleRename}
                >
                  {!isRenaming && 'Apply'}
                  {isRenaming && <LoadingIcon className="mx-0 mt-0.5 h-4 w-4 animate-spin" />}
                </button>
              )}
            </div>
          </p>
          <p className="my-1">
            <span className="text-sm font-bold">Description: </span>
            <span>{wishlist.description}</span>
          </p>
          <p className="my-1">
            <span className="text-sm font-bold">Store: </span>
            {!!wishlist.store && <span>{wishlist.store.name || wishlist.store.key}</span>}
            {!wishlist.store?.key && <span>N/A</span>}
          </p>
          <p className="my-1">
            <span className="text-sm font-bold">Items: </span>
            <span>{wishlist.lineItems.length}</span>
          </p>
        </div>
        <div className="flex h-10 flex-row justify-between">
          <button
            onClick={addItemsToCart}
            type="button"
            disabled={isAddingAll}
            className="button button-primary--small flex flex-row items-center"
          >
            Order purchase list
            {isAddingAll && <LoadingIcon className="ml-4 h-4 w-4 animate-spin" />}
          </button>
          <button
            onClick={handleRemoveList}
            type="button"
            disabled={isRemoving}
            className="button button-primary--small flex flex-row items-center"
          >
            Delete purchase list
            {isRemoving && <LoadingIcon className="ml-4 h-4 w-4 animate-spin" />}
          </button>
          <ShareButton associations={associations} wishlist={wishlist} reload={fecthWishlist} />
        </div>
      </div>

      {wishlist?.lineItems && <List items={wishlist.lineItems} wishlistId={wishlistId} onUpdateList={fecthWishlist} />}
    </main>
  );
};

export default WishList;
