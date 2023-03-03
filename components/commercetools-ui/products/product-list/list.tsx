/* eslint-disable prettier/prettier */
import React from 'react';
import Head from 'next/head';
import { Product } from '@Types/product/Product';
import { useFormat } from 'helpers/hooks/useFormat';
import { useCart } from 'frontastic';
import ListItem from './list-item';

interface Props {
  products: Product[];
  filtering?: boolean;
  isPreview?: boolean;
  previewURL?: string;
}

const List: React.FC<Props> = ({ products, filtering, isPreview, previewURL }) => {
  //i18n messages
  const { formatMessage: formatProductMessage } = useFormat({ name: 'product' });
  const { data } = useCart();

  return (
    <div className="mx-auto max-w-2xl pt-8 pb-16 lg:max-w-7xl lg:pt-4">
      <Head>
        <title>
          {formatProductMessage({ id: 'products', defaultMessage: 'Products' })} | commercetools Composable Frontend
        </title>
      </Head>
      <h2 className="sr-only">{formatProductMessage({ id: 'products', defaultMessage: 'Products' })}</h2>
      <div
        className={`grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${
          filtering ? '3' : '4'
        } xl:gap-x-8`}
      >
        {!!data &&
          products?.map((product) => (
            <ListItem product={product} key={product.productId} isPreview={isPreview} previewURL={previewURL} />
          ))}
      </div>
    </div>
  );
};

export default List;
