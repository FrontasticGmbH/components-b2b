import { ComposableCommerceEventsB2B } from '../../types/events/ComposableCommerceEventsB2B';
import { SDK, ServerOptions } from '@commercetools/frontend-sdk';
import {
  ClearCartAction,
  GetCartAction,
  UpdateCartAction,
  ReassignCartAction,
  ReplicateOrderAction,
  AddCartItemAction,
  UpdateCartItemAction,
  SplitCartItemAction,
  RemoveCartItemAction,
  GetCartShippingMethodsAction,
  GetAvailableCartShippingMethodsAction,
  SetCartShippingMethodAction,
  RedeemDiscountCodeAction,
  RemoveDiscountCodeAction,
  UpdatePaymentAction,
  AddPaymentByInvoiceAction,
  CheckoutCartAction,
  ReturnOrderItemsAction,
  CancelOrderAction,
  QueryOrdersAction,
  GetCheckoutSessionTokenAction,
} from '../../types/actions/CartActions';
import { Cart, Order, Payment, ShippingMethod } from '@shared/types/cart';
import {
  AddCartItemPayload,
  AddPaymentByInvoicePayload,
  CancelOrderPayload,
  CheckoutCartPayload,
  ReassignCartPayload,
  RedeemDiscountCodePayload,
  RemoveCartItemPayload,
  RemoveDiscountCodePayload,
  ReplicateOrderPayload,
  ReturnOrderItemsPayload,
  SetCartShippingMethodPayload,
  SplitCartItemPayload,
  UpdateCartItemPayload,
  UpdateCartPayload,
  UpdatePaymentPayload,
} from '../../types/payloads/CartPayloads';
import {
  GetCartQuery,
  UpdateCartQuery,
  ReassignCartQuery,
  ReplicateOrderQuery,
  AddCartItemQuery,
  UpdateCartItemQuery,
  SplitCartItemQuery,
  RemoveCartItemQuery,
  GetCartShippingMethodsQuery,
  GetAvailableCartShippingMethodsQuery,
  SetCartShippingMethodQuery,
  RedeemDiscountCodeQuery,
  RemoveDiscountCodeQuery,
  UpdatePaymentQuery,
  AddPaymentByInvoiceQuery,
  CheckoutCartQuery,
  ReturnOrderItemsQuery,
  CancelOrderQuery,
  QueryOrdersQuery,
} from '../../types/queries/CartQueries';
import { PaginatedResult } from '@shared/types/result';
import { Token } from '@shared/types/Token';

export type CartActions = {
  clearCart: ClearCartAction;
  getCart: GetCartAction;
  updateCart: UpdateCartAction;
  reassignCart: ReassignCartAction;
  replicateOrder: ReplicateOrderAction;
  addItem: AddCartItemAction;
  updateItem: UpdateCartItemAction;
  splitItem: SplitCartItemAction;
  removeItem: RemoveCartItemAction;
  getShippingMethods: GetCartShippingMethodsAction;
  getAvailableShippingMethods: GetAvailableCartShippingMethodsAction;
  setShippingMethod: SetCartShippingMethodAction;
  redeemDiscountCode: RedeemDiscountCodeAction;
  removeDiscountCode: RemoveDiscountCodeAction;
  updatePayment: UpdatePaymentAction;
  addPaymentByInvoice: AddPaymentByInvoiceAction;
  checkout: CheckoutCartAction;
  returnOrderItems: ReturnOrderItemsAction;
  cancelOrder: CancelOrderAction;
  queryOrders: QueryOrdersAction;
  getCheckoutSessionToken: GetCheckoutSessionTokenAction;
};

export const getCartActions = (sdk: SDK<ComposableCommerceEventsB2B>): CartActions => {
  return {
    clearCart: async (
      options: {
        parallel?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<void>({
        actionName: 'cart/clearCart',
        parallel: options.parallel,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    getCart: async (
      query?: GetCartQuery,
      options: {
        parallel?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<Cart>({
        actionName: 'cart/getCart',
        query,
        parallel: options.parallel,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    updateCart: async (
      payload: UpdateCartPayload,
      query?: UpdateCartQuery,
      options: {
        parallel?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<Cart>({
        actionName: 'cart/updateCart',
        payload,
        query,
        parallel: options.parallel,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    reassignCart: async (
      payload: ReassignCartPayload,
      query?: ReassignCartQuery,
      options: {
        parallel?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<Cart>({
        actionName: 'cart/reassignCart',
        payload,
        query,
        parallel: options.parallel,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    replicateOrder: async (
      payload: ReplicateOrderPayload,
      query?: ReplicateOrderQuery,
      options: {
        parallel?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<Cart>({
        actionName: 'cart/replicateOrder',
        payload,
        query,
        parallel: options.parallel,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    addItem: async (
      payload: AddCartItemPayload,
      query?: AddCartItemQuery,
      options: {
        parallel?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<Cart>({
        actionName: 'cart/addToCart',
        payload,
        query,
        parallel: options.parallel,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    updateItem: async (
      payload: UpdateCartItemPayload,
      query?: UpdateCartItemQuery,
      options: {
        parallel?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<Cart>({
        actionName: 'cart/updateLineItem',
        payload,
        query,
        parallel: options.parallel,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    splitItem: async (
      payload: SplitCartItemPayload,
      query?: SplitCartItemQuery,
      options: {
        parallel?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<Cart>({
        actionName: 'cart/splitLineItem',
        payload,
        query,
        parallel: options.parallel,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    removeItem: async (
      payload: RemoveCartItemPayload,
      query?: RemoveCartItemQuery,
      options: {
        parallel?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<Cart>({
        actionName: 'cart/removeLineItem',
        payload,
        query,
        parallel: options.parallel,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    getShippingMethods: async (
      query?: GetCartShippingMethodsQuery,
      options: {
        parallel?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<ShippingMethod[]>({
        actionName: 'cart/getShippingMethods',
        query,
        parallel: options.parallel,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    getAvailableShippingMethods: async (
      query?: GetAvailableCartShippingMethodsQuery,
      options: {
        parallel?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<ShippingMethod[]>({
        actionName: 'cart/getAvailableShippingMethods',
        query,
        parallel: options.parallel,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    setShippingMethod: async (
      payload: SetCartShippingMethodPayload,
      query?: SetCartShippingMethodQuery,
      options: {
        parallel?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<Cart>({
        actionName: 'cart/setShippingMethod',
        payload,
        query,
        parallel: options.parallel,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    redeemDiscountCode: async (
      payload: RedeemDiscountCodePayload,
      query?: RedeemDiscountCodeQuery,
      options: {
        parallel?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<Cart>({
        actionName: 'cart/redeemDiscount',
        payload,
        query,
        parallel: options.parallel,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    removeDiscountCode: async (
      payload: RemoveDiscountCodePayload,
      query?: RemoveDiscountCodeQuery,
      options: {
        parallel?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<Cart>({
        actionName: 'cart/removeDiscount',
        payload,
        query,
        parallel: options.parallel,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    updatePayment: async (
      payload: UpdatePaymentPayload,
      query?: UpdatePaymentQuery,
      options: {
        parallel?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<Payment>({
        actionName: 'cart/updatePayment',
        payload,
        query,
        parallel: options.parallel,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    addPaymentByInvoice: async (
      payload: AddPaymentByInvoicePayload,
      query?: AddPaymentByInvoiceQuery,
      options: {
        parallel?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<Cart>({
        actionName: 'cart/addPaymentByInvoice',
        payload,
        query,
        parallel: options.parallel,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    checkout: async (
      payload: CheckoutCartPayload,
      query?: CheckoutCartQuery,
      options: {
        parallel?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<Order>({
        actionName: 'cart/checkout',
        payload,
        query,
        parallel: options.parallel,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    returnOrderItems: async (
      payload: ReturnOrderItemsPayload,
      query?: ReturnOrderItemsQuery,
      options: {
        parallel?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<Order>({
        actionName: 'cart/returnItems',
        payload,
        query,
        parallel: options.parallel,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    cancelOrder: async (
      payload: CancelOrderPayload,
      query?: CancelOrderQuery,
      options: {
        parallel?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<Order>({
        actionName: 'cart/cancelOrder',
        payload,
        query,
        parallel: options.parallel,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    queryOrders: async (
      query?: QueryOrdersQuery,
      options: {
        parallel?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<PaginatedResult<Order>>({
        actionName: 'cart/queryOrders',
        query,
        parallel: options.parallel,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    getCheckoutSessionToken: async (
      options: {
        parallel?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<Token>({
        actionName: 'cart/getCheckoutSessionToken',
        parallel: options.parallel,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
  };
};
