import React, { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { Order } from '@Types/cart/Order';
import { useDarkMode } from 'frontastic';
import OrderDetails from './details';

interface Props {
  open: boolean;
  onClose: () => void;
  order: Order;
}

const OrderDetailsModal: React.FC<Props> = ({ open, onClose, order }) => {
  const { mode } = useDarkMode();

  if (!order) {
    return null;
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog className={`${mode} default fixed inset-0 z-10 overflow-y-auto`} onClose={onClose}>
        <Transition.Root>
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-left sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="absolute inset-0" onClick={onClose}>
                {/* eslint-disable */}
                <div
                  className="absolute top-1/2 left-1/2 h-[90vh] w-[90%] max-w-[1200px] -translate-x-1/2 -translate-y-1/2 overflow-auto bg-white py-16 px-4 dark:bg-primary-200 sm:px-6 lg:py-24 lg:px-8"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative mx-auto">
                    <div className="text-center">
                      <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-light-100 sm:text-4xl">
                        Order details
                      </h2>
                    </div>
                    <OrderDetails order={order} onClose={onClose} />
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Transition.Root>
      </Dialog>
    </Transition.Root>
  );
};

export default OrderDetailsModal;
