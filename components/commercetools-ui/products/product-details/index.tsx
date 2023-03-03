import { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline';
import { Category } from '@Types/product/Category';
import { Money } from '@Types/product/Money';
import { Product } from '@Types/product/Product';
import { Variant } from '@Types/product/Variant';
import { StringHelpers } from 'helpers/stringHelpers';
import { ImageGallery } from './image-gallery';
import ProductDetailsBreadcrumbs from './product-details-breadcrumbs';
import VariantSelector from './variant-selector';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export interface Props {
  isPreview: boolean;
  product: UIProduct;
  subscriptions?: Product[];
  productFeaturesAttributes: string[];
  variant: Variant;
  onChangeVariantIdx: (idx: number) => void;
}

export type UIProduct = {
  name: string;
  variants: Variant[];
  price: Money;
  images: UIImage[];
  tastes?: string[];
  description: string;
  details?: UIDetail[];
  categories?: Category[];
};
interface UIImage {
  id: string;
  src: string;
  alt: string;
}
export interface UISize {
  label: string;
  key: string;
}
interface UIDetail {
  name: string;
  items: string[];
}

export default function ProductDetail({
  product,
  subscriptions,
  variant,
  onChangeVariantIdx,
  productFeaturesAttributes,
  isPreview,
}: Props) {
  const [added, setAdded] = useState<boolean>(false);

  const isAttributeAvailable = (attribute: string) => {
    return typeof variant.attributes[attribute] !== 'undefined';
  };

  const getAttributeValue = (attribute: string) => {
    if (typeof variant.attributes[attribute] === 'boolean') {
      return variant.attributes[attribute] ? 'Yes' : 'No';
    }
    if (typeof variant.attributes[attribute] === 'object' && variant.attributes[attribute]?.label) {
      return variant.attributes[attribute].label;
    }
    return variant.attributes[attribute];
  };

  useEffect(() => {
    if (added) {
      setTimeout(() => {
        setAdded(false);
      }, 1000);
    }
  }, [added]);

  return (
    <div>
      <div className=" mx-auto max-w-2xl md:py-4 lg:max-w-7xl lg:px-8">
        <div>{!!product?.categories?.length && <ProductDetailsBreadcrumbs categories={product.categories} />}</div>
        {isPreview && (
          <span className="mt-2 inline-block rounded-sm bg-orange-300 p-2 text-sm font-light text-white">
            Displaying product in preview/staging mode.
          </span>
        )}
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <ImageGallery product={product} />

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-light-100">
              {variant?.attributes?.['brand']?.label}&nbsp;
            </h2>
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-light-100">{product?.name}</h1>
            {!!variant.attributes?.['manufacturer-number'] && (
              <p className="mt-4">{`Manufacturer Part: ${variant.attributes['manufacturer-number']}`}</p>
            )}

            <form className="mt-6">
              {!!variant.attributes?.narcotic && !!variant.attributes?.['product-alert-text'] && (
                <div>
                  <p className="text-sm text-red-500">{variant.attributes?.['product-alert-text']}</p>
                </div>
              )}
              <div className="mt-10 flex sm:flex-1">
                <VariantSelector
                  className="mt-4"
                  subscriptions={subscriptions}
                  product={product}
                  onChangeVariantIdx={onChangeVariantIdx}
                  variant={variant}
                />
              </div>
            </form>
          </div>
        </div>
        {!!product?.description && (
          <section aria-labelledby="details-heading" className="mt-12 border-t">
            <div className="mt-6">
              <h3 className="text-xl font-bold">Description</h3>
              <div
                className="space-y-6 text-base text-gray-700 dark:text-light-100"
                dangerouslySetInnerHTML={{ __html: product?.description }}
              />
            </div>
          </section>
        )}
        {!!productFeaturesAttributes.filter(isAttributeAvailable).length && (
          <section aria-labelledby="details-heading" className="mt-12 border-t">
            <div className="mt-6">
              <h3 className="text-xl font-bold">Specifications</h3>

              <div className="mt-3 grid grid-cols-3 gap-y-6 gap-x-10">
                {productFeaturesAttributes.filter(isAttributeAvailable).map((attribute) => (
                  <div key={attribute} className="border-b pb-2">
                    <span className="mr-2 font-semibold">{`${StringHelpers.capitaliseFirstLetter(attribute)}:`}</span>
                    <span className="">{getAttributeValue(attribute)}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        {product?.details?.length > 0 && (
          <section className="mt-12 border-t">
            <div className="divide-y divide-gray-200 border-t">
              {product?.details?.map((detail) => (
                <Disclosure key={detail.name}>
                  {({ open }) => (
                    <>
                      <h3>
                        <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                          <span
                            className={classNames(
                              open ? 'text-accent-400' : 'text-gray-900 dark:text-light-100',
                              'text-sm font-medium',
                            )}
                          >
                            {detail.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusSmIcon
                                className="block h-6 w-6 text-accent-400 group-hover:text-accent-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmIcon
                                className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel>
                        <div className="prose prose-sm py-6 dark:text-light-100">
                          <ul role="list">
                            {detail.items?.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
