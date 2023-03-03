import { Cart } from '@Types/cart/Cart';

export interface UseSubscriptions {
  getAllSubscriptions: () => Promise<Cart[]>;
}
