import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { Facet } from '@Types/result/Facet';
import { Product } from '@Types/product/Product';
import Breadcrumb from 'components/commercetools-ui/breadcrumb';
import Filters from 'components/commercetools-ui/filters';
import FilterIcon from 'components/icons/filter';
import CloseIcon from 'components/icons/icon-x';
import { useFormat } from 'helpers/hooks/useFormat';
import { updateURLParams } from 'helpers/utils/updateURLParams';
import List from './list';

// import List from './List';
export interface Props {
  products: Product[];
  previousCursor: string;
  nextCursor: string;
  category: string;
  facets: Facet[];
  totalProducts: number;
  isPreview?: boolean;
  previewURL?: string;
}

export default function ProductList({
  products,
  totalProducts,
  previousCursor,
  nextCursor,
  category,
  facets,
  isPreview,
  previewURL,
}: Props) {
  const [isFiltering, setIsFiltering] = useState<boolean>(true);
  const [previousPageURL, setPreviousPageURL] = useState<string>('/');
  const [nextPageURL, setNextPageURL] = useState<string>('/');

  //i18n messages
  const { formatMessage } = useFormat({ name: 'common' });
  const { formatMessage: formatProductMessage } = useFormat({ name: 'product' });

  const activeButtonClassName =
    'relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50';

  const disabledButtonClassName = 'pointer-events-none rounded bg-gray-500 py-2 px-4 font-bold text-white opacity-50';

  const toggleFiltering = () => {
    setIsFiltering(!isFiltering);
  };

  useEffect(() => {
    if (previousCursor) {
      setPreviousPageURL(updateURLParams([{ key: 'cursor', value: previousCursor }]));
    }

    if (nextCursor) {
      setNextPageURL(updateURLParams([{ key: 'cursor', value: nextCursor }]));
    }
  }, [previousCursor, nextCursor]);

  return (
    <div className="mt-4 px-1 sm:px-3 lg:px-6">
      {category && <Breadcrumb Separator="/">{category.split('/').filter((item) => !!item)}</Breadcrumb>}
      {isPreview && (
        <span className="mt-2 inline-block rounded-sm bg-orange-300 p-2 text-sm font-light text-white">
          Displaying products in preview/staging mode.
        </span>
      )}
      <div>
        <h6 className="col-span-3 hidden text-right dark:text-light-100 lg:block">
          {`${products?.length} ${formatProductMessage({ id: 'items', defaultMessage: 'Items' })} ${totalProducts}`}
        </h6>
      </div>
      <div className="lg:grid lg:grid-cols-2">
        {isFiltering ? (
          <div>
            <button onClick={toggleFiltering} className="py-2">
              <div className="flex justify-center">
                <h6 className="text-base font-bold text-neutral-700 dark:text-light-100">
                  {formatProductMessage({ id: 'sortAndFilter', defaultMessage: 'Sort & Filter' })}
                </h6>
              </div>
            </button>
          </div>
        ) : (
          <div>
            <button onClick={toggleFiltering} className="flex w-full justify-between py-2">
              <div className="flex gap-1">
                <FilterIcon className="h-6 w-5 fill-neutral-700 dark:fill-light-100" />
                <h6 className="text-base font-bold text-neutral-700 dark:text-light-100">
                  {formatProductMessage({ id: 'sortAndFilter', defaultMessage: 'Sort & Filter' })}
                </h6>
              </div>

              <h6 className="col-span-3 block text-right dark:text-light-100 lg:hidden">
                {`${products?.length} ${formatProductMessage({ id: 'items', defaultMessage: 'Items' })}`}
              </h6>
            </button>
          </div>
        )}
      </div>

      {isFiltering ? (
        <div className="mt-2 grid lg:grid-cols-4">
          <div className="">
            <Filters facets={facets} products={products} />
          </div>
          <div className="lg:col-span-3">
            {products.length > 0 ? (
              <List products={products} filtering={isFiltering} isPreview={isPreview} previewURL={previewURL} />
            ) : (
              <p>{formatProductMessage({ id: 'noProductsFound', defaultMessage: 'No products found.' })}</p>
            )}
          </div>
        </div>
      ) : (
        <List products={products} isPreview={isPreview} previewURL={previewURL} />
      )}

      <nav
        className="flex items-center justify-between border-t border-gray-200 py-3 px-4 sm:px-6"
        aria-label="Pagination"
      >
        <div className="flex flex-1 justify-between gap-x-1.5 sm:justify-end">
          <NextLink href={previousPageURL}>
            <a className={previousCursor ? activeButtonClassName : disabledButtonClassName}>
              {formatMessage({ id: 'prev', defaultMessage: 'Previous' })}
            </a>
          </NextLink>
          <NextLink href={nextPageURL}>
            <a className={nextCursor ? activeButtonClassName : disabledButtonClassName}>
              {formatMessage({ id: 'next', defaultMessage: 'Next' })}
            </a>
          </NextLink>
        </div>
      </nav>
    </div>
  );
}
