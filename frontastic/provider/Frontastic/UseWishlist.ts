import { Wishlist } from '@Types/wishlist/Wishlist';

export interface UseWishlist {
  storeWishlists: Wishlist[];
  fetchStoreWishlists: () => Promise<void>;
  getWishlists: () => Promise<Wishlist[]>;
  getWishlist: (wishlistId: string) => Promise<Wishlist>;
  addToNewWishlist: (wishlist: Wishlist, sku: string, count?: number) => Promise<void>;
  addToWishlist: (wishlistId: string, sku: string, count?: number) => Promise<void>;
  removeLineItem: (wishlistId: string, lineItemId: string) => Promise<void>;
  updateLineItem: (wishlistId: string, lineItemId: string, count?: number) => Promise<void>;
  deleteWishlist: (wishlistId: string) => Promise<void>;
  renameWishlist: (wishlistId: string, name: string) => Promise<void>;
}
