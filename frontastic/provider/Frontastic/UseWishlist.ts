import { Wishlist, WishlistDraft } from 'cofe-ct-b2b-ecommerce/types/wishlist/Wishlist';

export interface UseWishlist {
  getStoreWishlists: () => Promise<Wishlist[]>;
  getAllWishlists: () => Promise<Wishlist[]>;
  getSharedWishlists: () => Promise<Wishlist[]>;
  getWishlist: (wishlistId: string) => Promise<Wishlist>;
  addToNewWishlist: (wishlist: WishlistDraft, sku: string, count?: number) => Promise<void>;
  addToWishlist: (wishlistId: string, sku: string, count?: number) => Promise<void>;
  share: (wishlistId: string, businessUnitKey: string) => Promise<Wishlist>;
  removeLineItem: (wishlistId: string, lineItemId: string) => Promise<void>;
  updateLineItem: (wishlistId: string, lineItemId: string, count?: number) => Promise<void>;
}
