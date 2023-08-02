import { Address } from '@Types/account/Address';
import { Cart } from '@Types/cart/Cart';
import { Discount } from '@Types/cart/Discount';
import { Order, ReturnLineItem } from '@Types/cart/Order';
import { QuoteRequest } from '@Types/quote/QuoteRequest';
import useSWR, { mutate } from 'swr';
import { bundleItems } from 'helpers/utils/bundleItemsHelpers';
import { fetchApiHub, revalidateOptions } from 'frontastic';
import { QuoteDraft } from '@Types/quote/QuoteDraft';

export type CartDetails = {
  account?: { email: string };
  shipping?: Address;
  billing?: Address;
};

export const cartItems = () => {
  try {
    const result = useSWR('/action/cart/getCart', fetchApiHub, revalidateOptions);
    if (!result.data) {
      throw new Error('No cart');
    }
    const bundledLineItems = bundleItems(result.data?.lineItems);
    return {
      data: {
        ...result.data,
        lineItems: bundledLineItems,
      },
    };
  } catch {
    return {
      data: undefined,
    };
  }
};

export const getCart = async () => {
  try {
    const res = await fetchApiHub('/action/cart/getCart', { method: 'GET' });
    if (!res.data) {
      throw new Error('No cart');
    }
    mutate('/action/cart/getCart', res);
  } catch {
    mutate('/action/cart/getCart', undefined);
  }
};

export const getAllSuperUserCarts = async () => {
  try {
    mutate('/action/cart/getAllSuperUserCarts', []);
  } catch {
    mutate('/action/cart/getAllSuperUserCarts', undefined);
  }
};

export const allSuperUserCarts = (): Cart[] => {
  return [] as Cart[];
};

export const reassignCart = async (accountId: string, email: string) => {
  try {
    await fetchApiHub(`/action/cart/reassignCart`, { method: 'POST' }, { accountId: accountId, email: email });
  } catch {
    console.log('cannot reassign cart');
  }
  mutate('/action/cart/getCart', undefined);
};

export const addItems = async (lineItems: any[]) => {
  const payload = {
    variants: lineItems.map((lineItem) => ({
      sku: lineItem.variant.sku,
      count: lineItem.quantity,
    })),
  };
  const res = await fetchApiHub(
    '/action/cart/addToCart',
    {
      method: 'POST',
    },
    payload,
  );
  if (!res.cartId) {
    throw new Error('Failed adding to cart');
  }
  mutate('/action/cart/getCart', res);
  return res;
};

export const orderCart = async (payload?: any) => {
  const res = await fetchApiHub(
    '/action/cart/checkout',
    {
      method: 'POST',
    },
    { purchaseOrderNumber: payload?.poNumber },
  );
  mutate('/action/cart/getCart', res);
  return res;
};

export const orderHistory = async () => {
  return await fetchApiHub('/action/cart/getOrders');
};

export const getProjectSettings = async () => {
  return await fetchApiHub('/action/project/getProjectSettings');
};

export const splitLineItem = async (lineItemId: string, shippingAddresses: { address: Address; count: number }[]) => {
  const res = await fetchApiHub('/action/cart/splitLineItem', { method: 'POST' }, { lineItemId, shippingAddresses });
  mutate('/action/cart/getCart', res);
};

export const removeItem = async (lineItemId: string) => {
  const payload = {
    lineItem: { id: lineItemId },
  };

  const res = await fetchApiHub(
    '/action/cart/removeLineItem',
    {
      method: 'POST',
    },
    payload,
  );
  mutate('/action/cart/getCart', res);
};

export const getShippingMethods = async () => {
  try {
    const res = await fetchApiHub('/action/cart/getShippingMethods');
    mutate('/action/cart/getShippingMethods', res);
    return res;
  } catch {
    mutate('/action/cart/getShippingMethods', undefined);
  }
};

export const shippingMethods = () => {
  return useSWR('/action/cart/getShippingMethods', fetchApiHub, revalidateOptions);
};

export const replicateCart = async (orderId: string) => {
  const res = await fetchApiHub(
    `/action/cart/replicateCart`,
    {
      method: 'POST',
    },
    { orderId },
  );
  mutate('/action/cart/getCart', res);
};

export const updateItem = async (lineItemId: string, newQuantity: number) => {
  const payload = {
    lineItem: {
      id: lineItemId,
      count: newQuantity,
    },
  };
  const res = await fetchApiHub(
    '/action/cart/updateLineItem',
    {
      method: 'POST',
    },
    payload,
  );
  mutate('/action/cart/getCart', res);
};

export const updateCart = async (payload: CartDetails): Promise<Cart> => {
  const res = await fetchApiHub(
    '/action/cart/updateCart',
    {
      headers: {
        accept: 'application/json',
      },
      credentials: 'include',
      method: 'POST',
    },
    payload,
  );
  mutate('/action/cart/getCart', res);
  return res;
};

export const setShippingMethod = async (shippingMethodId: string) => {
  const payload = {
    shippingMethod: {
      id: shippingMethodId,
    },
  };

  const res = await fetchApiHub(
    `/action/cart/setShippingMethod`,
    {
      headers: {
        accept: 'application/json',
      },
      credentials: 'include',
      method: 'POST',
    },
    payload,
  );
  mutate('/action/cart/getCart', res);
};

export const redeemDiscountCode = async (code: string) => {
  const payload = {
    code: code,
  };
  const res = await fetchApiHub(
    `/action/cart/redeemDiscount`,
    {
      headers: {
        accept: 'application/json',
      },
      credentials: 'include',
      method: 'POST',
    },
    payload,
  );
  mutate('/action/cart/getCart', res);
};

export const removeDiscountCode = async (discount: Discount) => {
  const payload = {
    discountId: discount.discountId,
  };
  const res = await fetchApiHub(
    '/action/cart/removeDiscount',
    {
      headers: {
        accept: 'application/json',
      },
      credentials: 'include',
      method: 'POST',
    },
    payload,
  );
  mutate('/action/cart/getCart', res);
};

export const createQuoteRequestFromCurrentCart = async (comment: string): Promise<QuoteDraft> => {
  return fetchApiHub('/action/quote/createQuote', { method: 'POST' }, { comment });
};

export const returnItems = async (orderId: string, returnLineItems: ReturnLineItem[]): Promise<Order> => {
  try {
    const res = fetchApiHub('/action/cart/returnItems', { method: 'POST' }, { orderId, returnLineItems });
    return res;
  } catch (e) {
    throw e;
  }
};

export const cancelOrder = async (orderId: string): Promise<Order> => {
  try {
    const res = fetchApiHub('/action/cart/cancelOrder', { method: 'POST' }, { orderId });
    return res;
  } catch (e) {
    throw e;
  }
};
