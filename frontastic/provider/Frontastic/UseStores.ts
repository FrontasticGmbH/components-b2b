import { Store } from '@Types/store/Store';

export interface UseStores {
  getStoresByKey: (keys: string[]) => Promise<Store[]>;
}
