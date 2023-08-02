import { Address } from '@Types/account/Address';
import { Cart } from '@Types/cart/Cart';
import { Discount } from '@Types/cart/Discount';
import { ReturnLineItem } from '@Types/cart/Order';
import { Order } from '@Types/cart/Order';
import { ShippingMethod } from '@Types/cart/ShippingMethod';
import { Variant } from '@Types/product/Variant';
import { ProjectSettings } from '@Types/ProjectSettings';
import { QuoteRequest } from '@Types/quote/QuoteRequest';
import { CartDetails } from 'frontastic/actions/cart';
import { QuoteDraft } from '@Types/quote/QuoteDraft';

export interface UseCart {
  data?: Cart;
  getCart: () => Promise<void>;
  reassignCart: (accountId: string, email: string) => Promise<void>;
  addItems: (variants: { variant: Variant; quantity: number }[]) => Promise<void>;
  updateCart: (payload: CartDetails) => Promise<Cart>;
  setShippingMethod: (shippingMethodId: string) => Promise<void>;
  getShippingMethods: () => Promise<ShippingMethod[]>;
  removeItem: (lineItemId: string) => Promise<void>;
  updateItem: (lineItemId: string, newQuantity: number) => Promise<void>;
  removeDiscountCode?: (discount: Discount) => Promise<void>;
  redeemDiscountCode?: (code: string) => Promise<void>;
  shippingMethods: { data?: ShippingMethod[] };
  orderCart: (purchaseOrderNumber?: string) => Promise<Order>;
  replicateCart: (orderId: string) => Promise<void>;
  orderHistory?: () => Promise<Order[]>;
  getProjectSettings?: () => Promise<ProjectSettings>;
  createQuoteRequestFromCurrentCart?: (comment: string) => Promise<QuoteDraft>;
  splitLineItem?: (lineItemId: string, shippingAddresses: { address: Address; count: number }[]) => Promise<any>;
  returnItems: (orderId: string, returnLineItems: ReturnLineItem[]) => Promise<Order>;
  cancelOrder: (orderId: string) => Promise<Order>;
  allSuperUserCarts: Cart[];
  getAllSuperUserCarts: () => void;
}
