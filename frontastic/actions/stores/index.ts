import { Store } from '@Types/store/store';
import { fetchApiHub } from 'frontastic/lib/fetch-api-hub';
import { RegisterAccount } from '../../../helpers/hooks/useAccount';

export const createStore = async (
  account: RegisterAccount & { rootCategoryId?: string },
  parentBusinessUnit?: string,
): Promise<Store> => {
  return await fetchApiHub('/action/store/create', { method: 'POST' }, { account, parentBusinessUnit });
};
export const getStoresByKey = async (keys: string[]): Promise<Store[]> => {
  if (keys?.length) {
    return await fetchApiHub(`/action/store/query?where=key in (${keys.join(', ')})`, { method: 'GET' });
  }
  return [];
};
