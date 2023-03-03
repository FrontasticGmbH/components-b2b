import { QuoteRequest } from '@Types/quotes/QuoteRequest';
import { Cart } from '@Types/cart/Cart';
import { Discount } from '@Types/cart/Discount';
import { Order } from '@Types/cart/Order';
import { ShippingMethod } from '@Types/cart/ShippingMethod';
import { Variant } from '@Types/product/Variant';
import { CartDetails } from 'frontastic/actions/cart';
import { ProjectSettings } from '@Types/ProjectSettings';
import { Address } from '@Types/account/Address';
import { LineItemReturnItemDraft } from '@Types/cart/LineItem';

export interface UseCart {
  data?: Cart;
  getCart: () => Promise<void>;
  addItem: (variant: Variant, quantity: number, subscriptions?: Variant[]) => Promise<void>;
  addItems: (lineItems: { variant: Variant; quantity: number }[], subscriptions?: Variant[]) => Promise<void>;
  updateCart: (payload: CartDetails) => Promise<Cart>;
  setShippingMethod: (shippingMethodId: string) => Promise<void>;
  getShippingMethods: () => Promise<ShippingMethod[]>;
  removeItem: (lineItemId: string) => Promise<void>;
  updateItem: (lineItemId: string, newQuantity: number) => Promise<void>;
  removeDiscountCode?: (discount: Discount) => Promise<void>;
  redeemDiscountCode?: (code: string) => Promise<void>;
  shippingMethods: { data?: ShippingMethod[] };
  orderCart: () => Promise<void>;
  replicateCart: (orderId: string) => Promise<void>;
  orderHistory?: () => Promise<Order[]>;
  getProjectSettings?: () => Promise<ProjectSettings>;
  createQuoteRequestFromCurrentCart?: (comment: string) => Promise<QuoteRequest>;
  splitLineItem?: (lineItemId: string, data: { address: Address; quantity: number }[]) => Promise<any>;
  returnItems: (orderNumber: string, returnLineItems: LineItemReturnItemDraft[]) => Promise<Order>;
}
