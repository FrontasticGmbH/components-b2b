import { createSession, adyenCheckout } from '../../actions/adyen';
import {
  cartItems,
  getCart,
  addItem,
  addItems,
  orderCart,
  orderHistory,
  removeItem,
  shippingMethods,
  setShippingMethod,
  getShippingMethods,
  updateCart,
  updateItem,
  redeemDiscountCode,
  removeDiscountCode,
  getProjectSettings,
  createQuoteRequestFromCurrentCart,
  splitLineItem,
  replicateCart,
  returnItems,
  cancelOrder,
  reassignCart,
  transitionOrderState,
  allSuperUserCarts,
  getAllSuperUserCarts,
} from '../../actions/cart';
import { query, getAttributeGroup, getCategories } from '../../actions/product';
import {
  getMyQuoteRequests,
  getBusinessUserQuoteRequests,
  updateQuoteState,
  updateQuoteRequestState,
} from '../../actions/quotes';
import { getStoresByKey } from '../../actions/stores';
import {
  addToWishlist,
  removeLineItem,
  updateLineItem,
  getWishlist,
  getAllWishlists,
  getSharedWishlists,
  fetchStoreWishlists,
  storeWishlists,
  share,
  addToNewWishlist,
  deleteWishlist,
  renameWishlist,
} from '../../actions/wishlist';
import { UseAdyen } from './UseAdyen';
import { UseCart } from './UseCart';
import { UseProducts } from './UseProducts';
import { UseQuotes } from './UseQuotes';
import { UseStores } from './UseStores';
import { UseSubscriptions } from './UseSubscriptions';
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
      addItem,
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
      transitionOrderState,
      allSuperUserCarts: allSuperUserCarts(),
      getAllSuperUserCarts,
    },
    useWishlist: {
      getWishlist,
      getAllWishlists,
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
      getMyQuoteRequests,
      getBusinessUserQuoteRequests,
      updateQuoteState,
      updateQuoteRequestState,
    },
    useStores: {
      getStoresByKey,
    },
  };
};
