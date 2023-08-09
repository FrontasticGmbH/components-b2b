import { Wishlist } from '@Types/wishlist/Wishlist';
import { fetchApiHub, revalidateOptions } from 'frontastic';
import useSWR, { mutate } from 'swr';

export const getWishlists = async () => {
  return fetchApiHub(`/action/wishlist/getWishlists`, { method: 'GET' });
};

export const storeWishlists = (): Wishlist[] => {
  const result = useSWR('/action/wishlist/getWishlists', fetchApiHub, revalidateOptions);

  return result.data;
};

export const fetchStoreWishlists = async () => {
  const lists = await fetchApiHub(`/action/wishlist/getWishlists`);
  mutate('/action/wishlist/getWishlists', lists);
};

export const addToNewWishlist = async (wishlist: Wishlist, sku: string, count = 1) => {
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
