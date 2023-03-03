import { Store } from '@Types/store/store';

export interface UseStores {
  getStoresByKey: (keys: string[]) => Promise<Store[]>;
}
