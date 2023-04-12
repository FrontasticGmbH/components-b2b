import { Wishlist, WishlistDraft } from 'cofe-ct-b2b-ecommerce/types/wishlist/Wishlist';
import { fetchApiHub, revalidateOptions } from 'frontastic';
import useSWR, { mutate } from 'swr';

export const getAllWishlists = async () => {
  return fetchApiHub(`/action/wishlist/getAllWishlists`, { method: 'GET' });
};

export const getSharedWishlists = async () => {
  try {
    const wishlists = await fetchApiHub(`/action/wishlist/getSharedWishlists`, { method: 'GET' });
    return wishlists;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const storeWishlists = (): Wishlist[] => {
  const result = useSWR('/action/wishlist/getStoreWishlists', fetchApiHub, revalidateOptions);

  return result.data;
};

export const fetchStoreWishlists = async () => {
  const lists = await fetchApiHub(`/action/wishlist/getStoreWishlists`);
  mutate('/action/wishlist/getStoreWishlists', lists);
};

export const addToNewWishlist = async (wishlist: WishlistDraft, sku: string, count = 1) => {
  const res: Wishlist = await fetchApiHub(`/action/wishlist/createWishlist`, { method: 'POST' }, { wishlist });
  return addToWishlist(res.wishlistId, sku, count);
};

export const getWishlist = async (wishlistId: string) => {
  try {
    const wishlist = await fetchApiHub(`/action/wishlist/getWishlist?id=${wishlistId}`, { method: 'GET' });
    return wishlist;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const addToWishlist = async (wishlistId: string, sku: string, count = 1) => {
  return fetchApiHub(
    `/action/wishlist/addToWishlist?id=${wishlistId}`,
    { method: 'POST' },
    { variant: { sku }, count },
  );
};

export const share = async (wishlistId: string, businessUnitKey: string): Promise<Wishlist> => {
  try {
    const wishlist = await fetchApiHub(`/action/wishlist/share?id=${wishlistId}&business-unit-key=${businessUnitKey}`, {
      method: 'POST',
    });
    return wishlist;
  } catch (error) {
    console.log(error);
  }
};

export const removeLineItem = async (wishlistId: string, lineItemId: string) => {
  return fetchApiHub(
    `/action/wishlist/removeLineItem?id=${wishlistId}`,
    { method: 'POST' },
    { lineItem: { id: lineItemId } },
  );
};

export const updateLineItem = async (wishlistId: string, lineItemId: string, count = 1) => {
  return fetchApiHub(
    `/action/wishlist/updateLineItemCount?id=${wishlistId}`,
    { method: 'POST' },
    { lineItem: { id: lineItemId }, count },
  );
};

export const deleteWishlist = async (wishlistId: string) => {
  return fetchApiHub(`/action/wishlist/deleteWishlist?id=${wishlistId}`, { method: 'POST' });
};

export const renameWishlist = async (wishlistId: string, name: string) => {
  return fetchApiHub(`/action/wishlist/renameWishlist?id=${wishlistId}`, { method: 'POST' }, { name });
};
