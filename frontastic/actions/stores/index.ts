import { Store } from '@Types/store/Store';
import { fetchApiHub } from 'frontastic/lib/fetch-api-hub';

export const getStoresByKey = async (keys: string[]): Promise<Store[]> => {
  if (keys?.length) {
    return await fetchApiHub(`/action/store/query?where=key in (${keys.join(', ')})`, { method: 'GET' });
  }
  return [];
};
