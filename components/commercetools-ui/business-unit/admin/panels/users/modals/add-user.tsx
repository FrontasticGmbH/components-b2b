/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MultiSelect } from 'react-multi-select-component';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { useFormat } from 'helpers/hooks/useFormat';

export interface AddUserProps {
  open?: boolean;
  onClose?: () => void;
  addUser: (email: string, roles: string[]) => void;
}

const AddUser: React.FC<AddUserProps> = ({ open, onClose, addUser }) => {
  const { formatMessage } = useFormat({ name: 'business-unit' });

  // @ts-ignore
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [roles, setRoles] = useState([]);

  //submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      await addUser(
        email,
        roles.map((role) => role.value),
      );
    } catch (err) {
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  const options = [
    {
      label: 'Admin',
      value: 'admin',
    },
    {
      label: 'Buyer',
      value: 'buyer',
    },
  ];

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog className="default fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
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
            <span className="hidden sm:inline-block sm:align-middle" aria-hidden="true">
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
                  className="absolute top-1/2 left-1/2 w-[90%] max-w-[800px] -translate-x-1/2 -translate-y-1/2 overflow-auto bg-white py-16 px-4 dark:bg-primary-200 sm:px-6 lg:py-24 lg:px-8"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* eslint-enable */}
                  <div className="relative mx-auto max-w-xl">
                    <div className="text-center">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-light-100 sm:text-4xl">
                        {formatMessage({ id: 'add.user', defaultMessage: 'Assign associate' })}
                      </h2>
                      <p className="mt-4 text-lg leading-6 text-gray-400">
                        {formatMessage({
                          id: 'address.create.dec',
                          defaultMessage: 'Assign an associate by entring their email address',
                        })}
                      </p>
                    </div>
                    <div className="mt-12">
                      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-light-100"
                          >
                            {formatMessage({ id: 'email', defaultMessage: 'Email address' })}
                          </label>
                          <div className="mt-1">
                            <input
                              required
                              type="email"
                              name="email"
                              id="email"
                              autoComplete="email"
                              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-accent-400 focus:ring-accent-400"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="roles"
                            className="block text-sm font-medium text-gray-700 dark:text-light-100"
                          >
                            {formatMessage({ id: 'roles', defaultMessage: 'Roles' })}
                          </label>
                          <div className="mt-1">
                            <MultiSelect
                              hasSelectAll={false}
                              options={options}
                              value={roles}
                              onChange={(e) => setRoles(e)}
                              overrideStrings={{ allItemsAreSelected: 'All roles are selected' }}
                              labelledBy={'label'}
                              className="add-user__multiselect"
                            />
                          </div>
                        </div>

                        <div className="mt-4 flex justify-between gap-4 sm:col-span-2 sm:gap-8">
                          <button type="button" className="button button-secondary" onClick={onClose}>
                            {formatMessage({ id: 'cancel', defaultMessage: 'Cancel' })}
                          </button>
                          <button type="submit" className="button button-primary">
                            {!isLoading && formatMessage({ id: 'save', defaultMessage: 'Save' })}
                            {isLoading && <LoadingIcon className="h-6 w-6 animate-spin" />}
                          </button>
                        </div>
                      </form>
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

export default AddUser;
