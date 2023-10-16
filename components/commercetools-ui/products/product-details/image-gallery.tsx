import React from 'react';
import Image from 'next/image';
import { Tab } from '@headlessui/react';
import { UIProduct } from '.';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const ImageGallery: React.FC<{ product: UIProduct }> = ({ product }) => {
  return (
    <Tab.Group>
      <div className="relative flex flex-col-reverse">
        {/* Image selector */}
        <div
          className={`mx-auto mt-6 hidden w-full max-w-2xl lg:max-w-none ${
            product?.images?.length > 1 ? 'sm:block' : ''
          }`}
        >
          <Tab.List className="flex flex-row">
            {product?.images?.map((image, i) => (
              <Tab key={image.id} className={`relative h-36 w-36 ${i > 0 ? 'ml-2' : ''}`}>
                {({ selected }) => (
                  <>
                    <span className="sr-only">{image.alt}</span>
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <Image
                        loader={({ src }) => src}
                        src={image.src}
                        alt=""
                        width={150}
                        height={150}
                        className="h-full w-full bg-white object-contain object-center"
                      />
                    </span>
                    <span
                      className={classNames(
                        selected ? 'ring-accent-400' : 'ring-transparent',
                        'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                      )}
                      aria-hidden="true"
                    />
                  </>
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>

        <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
          {product?.images?.map((image) => (
            <Tab.Panel key={image.id}>
              <Image
                loader={({ src }) => src}
                layout="fill"
                src={image.src}
                alt={image.alt}
                className="w-full object-scale-down object-center sm:rounded-lg"
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};
