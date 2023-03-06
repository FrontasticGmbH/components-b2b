import { Category } from '@Types/product/Category';
import { revalidateOptions } from 'frontastic';
import { fetchApiHub } from 'frontastic/lib/fetch-api-hub';
import { ProductQueryResponse } from 'frontastic/provider/frontastic/UseProducts';
import useSWR, { mutate } from 'swr';

export const query = async (search: string): Promise<ProductQueryResponse> => {
  return await fetchApiHub(`/action/product/query?${search}`, { method: 'GET' });
};
export const getAttributeGroup = async (key: string): Promise<string[]> => {
  return await fetchApiHub(`/action/product/getAttributeGroup?key=${key}`, { method: 'GET' });
};

export const getCategories = (): Category[] => {
  const { data } = useSWR('/action/product/queryCategories', fetchApiHub, revalidateOptions);

  if (data?.items) {
    return data.items;
  }
  return [];
};
