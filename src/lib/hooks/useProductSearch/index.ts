import useSWR from 'swr';
import { sdk } from '@/sdk';
import { Product } from '@shared/types/product';

const useProductSearch = (searchQuery?: string, skus?: string[], limit?: number) => {
  const { data } = useSWR(['/action/product/query', searchQuery, skus, limit], () =>
    sdk.composableCommerce.product.query({ query: searchQuery, skus, limit }),
  );

  const products = data?.isError ? [] : (data?.data.items as Product[]) ?? [];

  return { products };
};

export default useProductSearch;
