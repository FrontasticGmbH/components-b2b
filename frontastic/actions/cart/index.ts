import { QuoteRequest } from 'cofe-ct-b2b-ecommerce/types/quotes/QuoteRequest';
import { Address } from '@commercetools/frontend-domain-types/account/Address';
import { Cart } from '@Types/cart/Cart';
import { Discount } from '@commercetools/frontend-domain-types/cart/Discount';
import { Variant } from 'cofe-ct-b2b-ecommerce/types/product/Variant';
import useSWR, { mutate } from 'swr';
import { fetchApiHub, revalidateOptions } from 'frontastic';
import { LineItemReturnItemDraft } from 'cofe-ct-b2b-ecommerce/types/cart/LineItem';
import { Order } from '@Types/cart/Order';
import { bundleItems } from 'helpers/utils/subscribedItems';

export type CartDetails = {
  account?: { email: string };
  shipping?: Address;
  billing?: Address;
};

export const cartItems = () => {
  const result = useSWR('/action/cart/getCart', fetchApiHub, revalidateOptions);
  const bundledLineItems = bundleItems(result.data?.lineItems);

  return {
    data: {
      ...result.data,
      lineItems: bundledLineItems,
    },
  };
};

export const getCart = async () => {
  try {
    const res = await fetchApiHub('/action/cart/getCart', { method: 'GET' });
    mutate('/action/cart/getCart', res);
  } catch {
    mutate('/action/cart/getCart', undefined);
  }
};

export const reassignCart = async (customerId: string) => {
  try {
    await fetchApiHub(`/action/cart/reassignCart?customerId=${customerId}`, { method: 'POST' });
  } catch {
    console.log('cannot reassign cart');
  }
  mutate('/action/cart/getCart', undefined);
};

export const addItem = async (variant: Variant, quantity: number, subscriptions?: Variant[]) => {
  const payload = {
    variant: {
      sku: variant.sku,
      count: quantity,
    },
    subscriptions: subscriptions
      ?.filter((subscription) => subscription)
      ?.map((subscription) => ({ sku: subscription.sku, count: 1 })),
  };
  const res = await fetchApiHub(
    '/action/cart/addToCart',
    {
      method: 'POST',
    },
    payload,
  );
  mutate('/action/cart/getCart', res);
};

export const addItems = async (lineItems: any[], subscriptions?: { sku?: string; count?: number }[]) => {
  const payload = {
    list: lineItems.map((lineItem) => ({
      sku: lineItem.variant.sku,
      count: lineItem.quantity,
    })),
    subscriptions: subscriptions
      ?.filter((subscription) => subscription)
      ?.map((subscription) => ({ sku: subscription.sku, count: 1 })),
  };
  const res = await fetchApiHub(
    '/action/cart/addItemsToCart',
    {
      method: 'POST',
    },
    payload,
  );
  mutate('/action/cart/getCart', res);
  return res;
};

export const orderCart = async (payload?: any) => {
  const res = await fetchApiHub(
    '/action/cart/checkout',
    {
      method: 'POST',
    },
    { payload },
  );
  mutate('/action/cart/getCart', res);
};

export const orderHistory = async () => {
  return await fetchApiHub('/action/cart/getOrders');
};

export const getProjectSettings = async () => {
  return await fetchApiHub('/action/project/getProjectSettings');
};

export const splitLineItem = async (lineItemId: string, data: { address: Address; quantity: number }[]) => {
  const res = await fetchApiHub('/action/cart/splitLineItem', { method: 'POST' }, { lineItemId, data });
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
  const res = await fetchApiHub(`/action/cart/replicateCart?orderId=${orderId}`, {
    method: 'POST',
  });
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

export const createQuoteRequestFromCurrentCart = async (comment: string): Promise<QuoteRequest> => {
  return fetchApiHub('/action/quote/createQuoteRequest', { method: 'POST' }, { comment });
};

export const returnItems = async (orderNumber: string, returnLineItems: LineItemReturnItemDraft[]): Promise<Order> => {
  try {
    const res = fetchApiHub('/action/cart/returnItems', { method: 'POST' }, { orderNumber, returnLineItems });
    return res;
  } catch (e) {
    throw e;
  }
};

export const transitionOrderState = async (orderNumber: string, stateKey: string): Promise<Order> => {
  try {
    const res = fetchApiHub('/action/cart/transitionOrderState', { method: 'POST' }, { orderNumber, stateKey });
    return res;
  } catch (e) {
    throw e;
  }
};
