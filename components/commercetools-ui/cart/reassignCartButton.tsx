/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { Fragment, HTMLAttributes, useEffect, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { BusinessUnit } from 'cofe-ct-b2b-ecommerce/types/business-unit/BusinessUnit';
import { Organization } from 'cofe-ct-b2b-ecommerce/types/organization/organization';
import { useAccount, useCart } from 'frontastic';
import { useBusinessUnitStateContext } from 'frontastic/provider/BusinessUnitState';
type Props = {
  organization?: Organization;
};

const ReassignCartButton: React.FC<Props & HTMLAttributes<HTMLDivElement>> = ({ organization, className }) => {
  const { getMyOrganization, businessUnit: currentBusinesssUnit } = useBusinessUnitStateContext();
  const { reassignCart } = useCart();
  const { account } = useAccount();

  const [businessUnit, setBusinessUnit] = useState<BusinessUnit>();

  useEffect(() => {
    getMyOrganization().then((org) => {
      if (org) {
        const bu = org.find((bu) => bu.key === currentBusinesssUnit.key);
        setBusinessUnit(bu);
      }
    });
  }, [currentBusinesssUnit]);

  if (!organization?.superUserBusinessUnitKey || !businessUnit?.associates?.length) {
    return null;
  }

  return (
    <Popover className={`relative ${className}`}>
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                      ${open ? '' : 'text-opacity-90'}
                      flex flex-row text-sm font-medium text-accent-400`}
          >
            Assign this cart to another associate
            {!open && <ChevronDownIcon className="mt-1 h-4 w-4" />}
            {open && <ChevronUpIcon className="mt-1 h-4 w-4" />}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className={`absolute left-1/2 z-10 mt-3 w-60 max-w-sm -translate-x-1/2 transform rounded-md bg-gray-300 px-2`}
            >
              {businessUnit.associates
                ?.filter((associate) => associate.customer.id !== account?.accountId)
                .map((associate) => (
                  <button
                    type="button"
                    className="w-full py-2"
                    key={associate.customer.id}
                    onClick={() => reassignCart(associate.customer.id)}
                  >
                    {`${associate.customer.firstName || ''} ${associate.customer.lastName || ''} `}
                  </button>
                ))}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default ReassignCartButton;
