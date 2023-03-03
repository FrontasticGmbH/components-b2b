import { FC } from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';
import AvailabilityRange, { AvailabilityRangeProps } from '../availability-range';

type AvailabilityFilterDisclosureProps = AvailabilityRangeProps;

const AvailabilityFilterDisclosure: FC<AvailabilityFilterDisclosureProps> = ({
  products,
  facets,
  updateAvailabilityFilteringParams,
  availabilityFacet,
}) => {
  return (
    <div className="max-w-xs border-y border-gray-200 py-6">
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between py-3 text-gray-400 hover:text-gray-500">
              <span className="font-medium text-neutral-600 dark:text-light-100">Availability</span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="pt-6">
              <AvailabilityRange
                products={products}
                facets={facets}
                updateAvailabilityFilteringParams={updateAvailabilityFilteringParams}
                availabilityFacet={availabilityFacet}
              />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default AvailabilityFilterDisclosure;
