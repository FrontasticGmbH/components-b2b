import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Associate } from '@Types/account/Associate';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { useDarkMode } from 'frontastic';

type Props = {
  open: boolean;
  deleteUser: (id: string) => Promise<void>;
  associate: Associate;
  onClose: () => void;
};

const DeleteUser: React.FC<Props> = ({ open, deleteUser, associate, onClose }) => {
  const { mode } = useDarkMode();

  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteUser = async () => {
    setIsLoading(true);
    await deleteUser(associate.accountId);
    setIsLoading(false);
    onClose();
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog className={`${mode} default fixed inset-0 z-10 overflow-y-auto`} onClose={onClose}>
        <>
          <div className="flex items-end justify-center px-4 pt-4 text-left sm:block sm:p-0">
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
                  className="lg:py-18 absolute top-1/2 left-1/2 w-[90%] max-w-[800px] -translate-x-1/2 -translate-y-1/2 overflow-auto bg-white py-16 px-4 dark:bg-primary-200 sm:px-6 lg:px-8"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* eslint-enable */}
                  <div className="relative mx-auto max-w-xl">
                    <div className="text-center">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-light-100 sm:text-4xl">
                        Remove associate
                      </h2>
                      <p className="mt-4 text-lg leading-6 text-gray-400">
                        Are you sure you want to remove <strong>{associate?.email}</strong>?
                      </p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <button className="button button-secondary" onClick={onClose}>
                        Cancel
                      </button>
                      <button className="button button-primary" onClick={handleDeleteUser}>
                        {!isLoading && <span>Remove</span>}
                        {isLoading && <LoadingIcon className="h-6 w-6 animate-spin" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </>
      </Dialog>
    </Transition.Root>
  );
};

export default DeleteUser;
