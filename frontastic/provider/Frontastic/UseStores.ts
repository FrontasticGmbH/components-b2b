import { Store } from 'cofe-ct-b2b-ecommerce/types/store/store';

export interface UseStores {
  getStoresByKey: (keys: string[]) => Promise<Store[]>;
}
