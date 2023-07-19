import {Address} from '@Types/account/Address';
import {Discount} from '@Types/cart/Discount';
import {ShippingMethod} from '@Types/cart/ShippingMethod';
import {ProjectSettings} from '@Types/ProjectSettings';
import {ReturnItem} from '@Types/cart/LineItem';
import {Variant} from '@Types/product/Variant';
import {QuoteRequest} from '@Types/quotes/QuoteRequest';
import {Cart} from '@Types/cart/Cart';
import {Order} from '@Types/cart/Order';
import {CartDetails} from 'frontastic/actions/cart';

export interface UseCart {
  data?: Cart;
  getCart: () => Promise<void>;
  reassignCart: (customerId: string, email: string) => Promise<void>;
  addItem: (
    variant: Variant,
    quantity: number,
    subscriptions?: Variant[],
    selectedConfigurableComponents?: Variant[],
  ) => Promise<void>;
  addItems: (lineItems: { variant: Variant; quantity: number }[], subscriptions?: Variant[]) => Promise<void>;
  updateCart: (payload: CartDetails) => Promise<Cart>;
  setShippingMethod: (shippingMethodId: string) => Promise<void>;
  getShippingMethods: () => Promise<ShippingMethod[]>;
  removeItem: (lineItemId: string) => Promise<void>;
  updateItem: (lineItemId: string, newQuantity: number) => Promise<void>;
  removeDiscountCode?: (discount: Discount) => Promise<void>;
  redeemDiscountCode?: (code: string) => Promise<void>;
  shippingMethods: { data?: ShippingMethod[] };
  orderCart: (payload?: any) => Promise<Order>;
  replicateCart: (orderId: string) => Promise<void>;
  orderHistory?: () => Promise<Order[]>;
  getProjectSettings?: () => Promise<ProjectSettings>;
  createQuoteRequestFromCurrentCart?: (comment: string) => Promise<QuoteRequest>;
  splitLineItem?: (lineItemId: string, shippingAddresses: { address: Address; count: number }[]) => Promise<any>;
  returnItems: (orderNumber: string, returnLineItems: ReturnItem[]) => Promise<Order>;
  cancelOrder: (orderNumber: string) => Promise<Order>;
  transitionOrderState: (orderNumber: string, stateKey: string) => Promise<Order>;
  allSuperUserCarts: Cart[];
  getAllSuperUserCarts: () => void;
}
