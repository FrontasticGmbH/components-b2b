import { Dialog, Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Typography from 'components/commercetools-ui/typography';
import { useAccount } from 'frontastic/provider';
import { ReferenceLink } from 'helpers/reference';
import { FlyingCartButton } from 'components/commercetools-ui/header/flying-cart-button';

import React, { Fragment, useState } from 'react';
import { mode } from 'tailwind.config';

type Props = {
  data: any;
};

const LinksBarTastic: React.FC<Props> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const { account } = useAccount();

  return (
    <div className={`flex h-full w-full flex-row items-center ${data.bgColor}`}>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog className={`${mode} fixed inset-0 z-40 flex lg:hidden`} onClose={() => setOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl dark:bg-primary-200">
              <div className="flex px-4 pt-5 pb-2">
                <button
                  type="button"
                  className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 dark:text-light-100"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                {data.links.map((link) => (
                  <div key={link.name} className="flow-root" onClick={() => setOpen(false)}>
                    <ReferenceLink
                      target={link.reference}
                      className="-m-2 block p-2 font-medium text-gray-900 dark:text-light-100"
                    >
                      <Typography>{link.name}</Typography>
                    </ReferenceLink>
                  </div>
                ))}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
      <nav aria-label="Top" className="w-full px-6 lg:px-0">
        {/* Secondary navigation */}
        <div className="h-full">
          <div className="flex items-center justify-between">
            {!!account && (
              <div className="flex items-center lg:hidden">
                <button
                  type="button"
                  className="-ml-2 rounded-md bg-none p-2 text-primary-400 dark:text-light-100"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            )}

            {/* Mega menus */}
            {!!account && (
              <Popover.Group className="hidden lg:block lg:flex-1 lg:self-stretch">
                <div className="flex h-full items-end space-x-8">
                  {data.links.map((link, id) => (
                    <ReferenceLink
                      key={id}
                      target={link.reference}
                      className={`text-md flex px-4 py-2 font-semibold ${data.textColor}`}
                    >
                      <Typography>{link.name}</Typography>
                    </ReferenceLink>
                  ))}
                  {data.showQuickAdd && (
                    <div className="inline h-full flex-grow">
                      <span className={`text-md flex justify-end px-4 py-2 font-semibold ${data.textColor}`}>
                        <FlyingCartButton />
                      </span>
                    </div>
                  )}
                </div>
              </Popover.Group>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LinksBarTastic;
