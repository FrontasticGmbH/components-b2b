import { Wishlist, WishlistDraft } from '@Types/wishlist/Wishlist';
import { fetchApiHub } from 'frontastic';

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

export const getStoreWishlists = async () => {
  try {
    const lists = await fetchApiHub(`/action/wishlist/getStoreWishlists`);
    return lists;
  } catch (error) {
    console.log(error.message);
  }
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
