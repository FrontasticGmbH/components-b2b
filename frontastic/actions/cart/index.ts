import { Address } from '@Types/account/Address';
import { Discount } from '@Types/cart/Discount';
import { Cart } from '@Types/cart/Cart';
import { Order } from '@Types/cart/Order';
import { LineItemReturnItemDraft } from '@Types/cart/LineItem';
import { Variant } from '@Types/product/Variant';
import { QuoteRequest } from '@Types/quotes/QuoteRequest';
import { bundleItems } from 'helpers/utils/bundleItemsHelpers';
import toast from 'react-hot-toast';
import useSWR, { mutate } from 'swr';
import { fetchApiHub, revalidateOptions } from 'frontastic';

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
    const res = await fetchApiHub('/action/cart/getAllSuperUserCarts', { method: 'GET' });
    mutate('/action/cart/getAllSuperUserCarts', []);
  } catch {
    mutate('/action/cart/getAllSuperUserCarts', undefined);
  }
};

export const allSuperUserCarts = (): Cart[] => {
  const allCarts = useSWR('/action/cart/getAllSuperUserCarts', fetchApiHub, revalidateOptions);
  return allCarts.data;
};

export const reassignCart = async (customerId: string, email: string) => {
  try {
    await fetchApiHub(`/action/cart/reassignCart?customerId=${customerId}&email=${email}`, { method: 'POST' });
  } catch {
    console.log('cannot reassign cart');
  }
  mutate('/action/cart/getCart', undefined);
};

export const addItem = async (
  variant: Variant,
  quantity: number,
  subscriptions?: Variant[],
  selectedConfigurableComponents?: Variant[],
) => {
  const payload = {
    variant: {
      sku: variant.sku,
      count: quantity,
    },
    subscriptions: subscriptions
      ?.filter((subscription) => subscription)
      ?.map((subscription) => ({ sku: subscription.sku, count: 1 })),
    configurableComponents: selectedConfigurableComponents
      ?.filter((component) => component)
      ?.map((component) => ({ sku: component.sku, count: 1 })),
  };
  try {
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
  } catch (e) {
    toast.error(e.message, { duration: 10000 });
  }
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
    { payload },
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

export const cancelOrder = async (orderNumber: string): Promise<Order> => {
  try {
    const res = fetchApiHub(
      '/action/cart/updateOrderState',
      { method: 'POST' },
      { orderNumber, orderState: 'Cancelled' },
    );
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
