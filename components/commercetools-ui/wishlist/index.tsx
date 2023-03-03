import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { BusinessUnit } from '@Types/business-unit/BusinessUnit';
import { Variant } from '@Types/product/Variant';
import { Wishlist } from '@Types/wishlist/Wishlist';
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
  const { getWishlist } = useWishlist();
  const { formatMessage: formatWishlistMessage } = useFormat({ name: 'wishlist' });
  const { addItems } = useCart();
  const router = useRouter();

  const [error, setError] = useState('');
  const [wishlist, setWishlist] = useState<Wishlist>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddingAll, setIsAddingAll] = useState(false);

  const addItemsToCart = async () => {
    setIsAddingAll(true);
    await addItems(wishlist.lineItems?.map((item) => ({ variant: item.variant as Variant, quantity: item.count })));
    setIsAddingAll(false);
    router.push('/checkout');
  };

  const fecthWishlist = async () => {
    const list = await getWishlist(wishlistId);
    setWishlist(list);
  };

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
            {!!wishlist.store && <span>{wishlist.store.name || wishlist.store.key}</span>}
            {!wishlist.store?.key && <span>N/A</span>}
          </p>
          <p>
            <span className="text-sm font-bold">Items: </span>
            <span>{wishlist.lineItems.length}</span>
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <button
            onClick={addItemsToCart}
            type="button"
            disabled={isAddingAll}
            className="button button-primary flex flex-row items-center"
          >
            Order purchase list
            {isAddingAll && <LoadingIcon className="ml-4 h-4 w-4 animate-spin" />}
          </button>
          <ShareButton associations={associations} wishlist={wishlist} reload={fecthWishlist} />
        </div>
      </div>

      {wishlist?.lineItems && <List items={wishlist.lineItems} wishlistId={wishlistId} onUpdateList={fecthWishlist} />}
    </main>
  );
};

export default WishList;
