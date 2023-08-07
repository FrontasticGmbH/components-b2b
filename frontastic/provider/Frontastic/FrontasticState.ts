import { adyenCheckout, createSession } from '../../actions/adyen';
import {
  addItems,
  allSuperUserCarts,
  cancelOrder,
  cartItems,
  createQuoteRequestFromCurrentCart,
  getAllSuperUserCarts,
  getCart,
  getProjectSettings,
  getShippingMethods,
  orderCart,
  orderHistory,
  reassignCart,
  redeemDiscountCode,
  removeDiscountCode,
  removeItem,
  replicateCart,
  returnItems,
  setShippingMethod,
  shippingMethods,
  splitLineItem,
  updateCart,
  updateItem,
} from '../../actions/cart';
import { getAttributeGroup, getCategories, query } from '../../actions/product';
import { acceptQuote, cancelQuoteRequest, declineQuote, getQuotes } from '../../actions/quotes';
import { getStoresByKey } from '../../actions/stores';
import {
  addToNewWishlist,
  addToWishlist,
  deleteWishlist,
  fetchStoreWishlists,
  getSharedWishlists,
  getWishlist,
  getWishlists,
  removeLineItem,
  renameWishlist,
  share,
  storeWishlists,
  updateLineItem,
} from '../../actions/wishlist';
import { UseAdyen } from './UseAdyen';
import { UseCart } from './UseCart';
import { UseProducts } from './UseProducts';
import { UseQuotes } from './UseQuotes';
import { UseStores } from './UseStores';
import { UseWishlist } from './UseWishlist';

export interface FrontasticState {
  useCart: UseCart;
  useWishlist: UseWishlist;
  useAdyen: UseAdyen;
  useProducts: UseProducts;
  useQuotes: UseQuotes;
  useStores: UseStores;
}

export const getFrontasticState = (): FrontasticState => {
  return {
    useProducts: {
      query,
      getAttributeGroup,
      categories: getCategories(),
    },
    useCart: {
      ...cartItems(),
      getCart,
      addItems,
      updateCart,
      setShippingMethod,
      getShippingMethods,
      removeItem,
      updateItem,
      shippingMethods: shippingMethods(),
      orderCart,
      orderHistory,
      getProjectSettings,
      redeemDiscountCode,
      removeDiscountCode,
      createQuoteRequestFromCurrentCart,
      replicateCart,
      splitLineItem,
      returnItems,
      cancelOrder,
      reassignCart,
      allSuperUserCarts: allSuperUserCarts(),
      getAllSuperUserCarts,
    },
    useWishlist: {
      getWishlist,
      getWishlists,
      getSharedWishlists,
      storeWishlists: storeWishlists(),
      fetchStoreWishlists,
      addToNewWishlist,
      addToWishlist,
      share,
      removeLineItem,
      updateLineItem,
      deleteWishlist,
      renameWishlist,
    },
    useAdyen: {
      createSession,
      adyenCheckout,
    },
    useQuotes: {
      getQuotes: getQuotes,
      acceptQuote,
      declineQuote,
      cancelQuoteRequest,
    },
    useStores: {
      getStoresByKey,
    },
  };
};
