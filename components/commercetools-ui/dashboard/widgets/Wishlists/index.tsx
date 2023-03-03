import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Listbox, Transition } from '@headlessui/react';
import { ViewListIcon } from '@heroicons/react/outline';
import { ChevronDownIcon, CheckIcon, ShoppingCartIcon, TrashIcon } from '@heroicons/react/solid';
import { Variant } from '@Types/product/Variant';
import { LineItem } from '@Types/wishlist/LineItem';
import { Wishlist } from '@Types/wishlist/Wishlist';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { useCart, useWishlist } from 'frontastic';
import Image from 'frontastic/lib/image';

const WishlistsWidget = () => {
  const { getAllWishlists, getWishlist, removeLineItem } = useWishlist();
  const { addItem } = useCart();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingCurrentWishList, setLoadingCurrentWishList] = useState(false);
  const [isLoadingLineitems, setIsLoadingLineitems] = useState([]);
  const [wishLists, setWishLists] = useState<Wishlist[]>([]);
  const [selectedWishlist, setSelectedWishlist] = useState<Wishlist>();
  const [selectedLineitems, setSelectedLineitems] = useState<LineItem[]>([]);

  const goToProductPage = (itemUrl: string) => router.push(itemUrl);

  const handleAddToCart = async (lineitem: LineItem, index: number) => {
    setIsLoadingLineitems(isLoadingLineitems.map((_, i) => index === i));
    await addItem(lineitem.variant as Variant, lineitem.count);
    setIsLoadingLineitems(isLoadingLineitems.map(() => false));
  };

  const handleRemoveFromWishlist = async (lineitem: LineItem, index: number) => {
    setIsLoadingLineitems(isLoadingLineitems.map((_, i) => index === i));
    await removeLineItem(selectedWishlist.wishlistId, lineitem.lineItemId);
    setIsLoadingLineitems(isLoadingLineitems.map(() => false));
    fetchWishlist(selectedWishlist.wishlistId);
  };

  const fetchWishlist = async (wishlistId) => {
    setLoadingCurrentWishList(true);
    const wishlist = await getWishlist(wishlistId);
    setSelectedLineitems(wishlist.lineItems);
    setIsLoadingLineitems(Array.from(wishlist.lineItems, () => false));
    setLoadingCurrentWishList(false);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const allWishlists = await getAllWishlists();
      if (allWishlists?.length) {
        setWishLists(allWishlists);
        setSelectedWishlist(allWishlists[0]);
      }
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (selectedWishlist) {
      fetchWishlist(selectedWishlist.wishlistId);
    }
  }, [selectedWishlist]);

  return (
    <div className="h-full w-full overflow-y-scroll border-l-4 border-indigo-600 bg-white px-4 drop-shadow-md">
      <div className="mb-2 flex flex-row items-center justify-between border-b-2 py-2">
        <p className="flex items-center text-sm font-bold">
          <ViewListIcon className="mr-2 h-4 w-4"></ViewListIcon>
          Purchase lists
        </p>
        <div className="z-40 text-sm">
          {isLoading && <LoadingIcon className="h-4 w-4 animate-spin" />}
          {!isLoading && !!wishLists.length && (
            <Listbox value={selectedWishlist} onChange={setSelectedWishlist}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-1 pr-8 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selectedWishlist.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {wishLists.map((option, i) => (
                      <Listbox.Option
                        key={option.wishlistId}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-2 pr-4 ${
                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                          }`
                        }
                        value={option}
                      >
                        {({ selected }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                              {option.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          )}
        </div>
      </div>
      {loadingCurrentWishList && <LoadingIcon className="my-0 mx-auto h-6 w-6 animate-spin" />}
      {!loadingCurrentWishList && !wishLists.length && (
        <>
          <p className="pt-2 text-center text-base font-bold">No purchase list!</p>
          <p className="text-center text-sm font-light">
            Create a purchase list by adding an item in Product details page
          </p>
        </>
      )}
      {!loadingCurrentWishList && !!selectedWishlist && !selectedLineitems.length && (
        <p className="pt-2 text-center text-base font-bold">No items in this purchase list</p>
      )}
      {!loadingCurrentWishList && !!selectedLineitems.length && (
        <div className="flex w-full flex-col">
          {selectedLineitems.map((lineitem, i) => (
            <div className="mb-1 flex flex-row justify-between border-b-2 pt-1" key={lineitem.lineItemId}>
              <Image
                alt={lineitem.name?.substring(0, 10)}
                width={20}
                height={20}
                className="h-10 w-10 rounded-md object-scale-down object-center"
                src={lineitem.variant?.images?.[0]}
                onClick={() => goToProductPage(lineitem._url)}
              />
              <div>
                <div className="text-ellipsis-150">{lineitem.name}</div>
                <span className="text-sm font-light">{lineitem.variant?.sku}</span>
              </div>
              <div>
                <span>{lineitem.count}</span>
              </div>
              <div className="mb-1 flex flex-col">
                <button
                  onClick={() => handleAddToCart(lineitem, i)}
                  disabled={isLoadingLineitems[i]}
                  className=" mb-1 rounded-md bg-accent-400 p-1 text-sm text-white"
                >
                  {!isLoadingLineitems[i] && <ShoppingCartIcon className="h-4 w-4" />}
                  {isLoadingLineitems[i] && <LoadingIcon className="h-4 w-4 animate-spin" />}
                </button>
                {!isLoadingLineitems[i] && (
                  <button
                    onClick={() => handleRemoveFromWishlist(lineitem, i)}
                    //   disabled={isDisabled}
                    disabled={isLoadingLineitems[i]}
                    className=" rounded-md bg-accent-400 p-1 text-sm text-red-300"
                  >
                    <TrashIcon className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistsWidget;
