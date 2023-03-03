import React, { Fragment } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon, XIcon } from '@heroicons/react/outline';
import { useUIStateContext } from 'frontastic';
import CSVUploader from '../csv-uploader';
import { DynamicCart } from '../dynamic-cart';

export const FlyingCart: React.FC = () => {
  const { isFlyingCartOpen, toggleFlyingCart } = useUIStateContext();
  return (
    <div>
      {isFlyingCartOpen && (
        <div onClick={() => toggleFlyingCart(false)} className="fixed inset-0 h-full w-full bg-black/50" />
      )}
      <Transition.Root show={isFlyingCartOpen} as={Fragment}>
        <div>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="flying-cart fixed right-0 top-0 z-50 flex flex-col items-end overflow-y-scroll bg-white p-4">
              <button className="h-6 w-6" onClick={() => toggleFlyingCart(false)}>
                <XIcon className="h-6 w-6 text-primary-400 dark:text-light-100" />
              </button>
              <div className="w-full">
                <h1 className="pb-12 text-left text-xl font-semibold tracking-tight text-gray-900 dark:text-light-100">
                  Quick add to cart
                </h1>
              </div>
              <Disclosure defaultOpen>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-md bg-gray-100 p-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                      <span>Search by product name or SKU</span>
                      <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-gray-500`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mb-2 w-full rounded-md border py-2">
                      <DynamicCart />
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="mt-2 flex w-full justify-between rounded-md bg-gray-100 p-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                      <span>Upload a CSV file</span>
                      <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-gray-500`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="w-full rounded-md border py-2">
                      <CSVUploader addedTocart={() => toggleFlyingCart(false)} />
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </Transition.Child>
        </div>
      </Transition.Root>
    </div>
  );
};
