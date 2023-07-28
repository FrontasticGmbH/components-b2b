/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MultiSelect } from 'react-multi-select-component';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { useFormat } from 'helpers/hooks/useFormat';
import { useAccount } from 'frontastic';
import { useBusinessUnitStateContext } from 'frontastic/provider/BusinessUnitState';

export interface AddUserProps {
  open?: boolean;
  onClose?: () => void;
  addUser: (email: string, roles: string[]) => void;
}

const DEFAULT_PASSWORD = 'passw0rd';

const CreateUser: React.FC<AddUserProps> = ({ open, onClose, addUser }) => {
  const { formatMessage } = useFormat({ name: 'business-unit' });
  const { create } = useAccount();
  const { formatMessage: formatErrorMessage } = useFormat({ name: 'error' });
  const { associateRoles } = useBusinessUnitStateContext();

  // @ts-ignore
  const [isLoading, setIsLoading] = useState(false);
  const [roles, setRoles] = useState([]);
  const [options, setOptions] = useState([]);
  const [error, setError] = useState('');
  const [data, setData] = useState({
    email: '',
    password: DEFAULT_PASSWORD,
    confirmPassword: DEFAULT_PASSWORD,
    companyName: '',
    lastName: '',
    firstName: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //processing starts
    setIsLoading(true);
    //try registering the user with given credentials
    try {
      // set email as confirmed by default for demo
      const response = await create({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        companyName: data.companyName,
        confirmed: true,
      });
      if (!response.accountId) {
        setError(
          formatErrorMessage({ id: 'account.create.fail', defaultMessage: "Sorry. We couldn't create your account.." }),
        );
      } else {
        setError('');
        try {
          await addUser(
            data.email,
            roles.map((role) => role.value),
          );
        } catch (err) {
        } finally {
          setIsLoading(false);
          onClose();
        }
      }
    } catch (err) {
      setError(formatErrorMessage({ id: 'wentWrong', defaultMessage: 'Sorry. Something went wrong..' }));
    }
    //processing ends
    setIsLoading(false);
  };

  //handle text input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (associateRoles.length) {
      setOptions(associateRoles.map((role) => ({ value: role.key, label: role.name })));
    }
  }, [associateRoles]);

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
                        {formatMessage({ id: 'create.user', defaultMessage: 'Create associate' })}
                      </h2>
                      <p className="mt-4 text-lg leading-6 text-gray-400">
                        {formatMessage({
                          id: 'address.create.dec',
                          defaultMessage: 'Create an associate by entring their info',
                        })}
                      </p>
                    </div>
                    <div className="mt-12">
                      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        {error && <p className="text-sm text-accent-400">{error}</p>}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-light-100"
                          >
                            {formatMessage({ id: 'emailAddress', defaultMessage: 'Email Address' })}
                          </label>
                          <div className="mt-1">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              required
                              className="block w-full appearance-none rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 focus:border-accent-400 focus:outline-none focus:ring-accent-400 sm:text-sm"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-gray-700 dark:text-light-100"
                          >
                            {formatMessage({ id: 'company', defaultMessage: 'Company' })}
                          </label>
                          <div className="mt-1">
                            <input
                              id="company"
                              name="company"
                              required
                              className="block w-full appearance-none rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 focus:border-accent-400 focus:outline-none focus:ring-accent-400 sm:text-sm"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-gray-700 dark:text-light-100"
                          >
                            {formatMessage({ id: 'firstName', defaultMessage: 'FirstName' })}
                          </label>
                          <div className="mt-1">
                            <input
                              id="firstName"
                              name="firstName"
                              required
                              className="block w-full appearance-none rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 focus:border-accent-400 focus:outline-none focus:ring-accent-400 sm:text-sm"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-gray-700 dark:text-light-100"
                          >
                            {formatMessage({ id: 'lastName', defaultMessage: 'Lastname' })}
                          </label>
                          <div className="mt-1">
                            <input
                              id="lastName"
                              name="lastName"
                              required
                              className="block w-full appearance-none rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 focus:border-accent-400 focus:outline-none focus:ring-accent-400 sm:text-sm"
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-span-2 h-1 w-full border-2" />
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

export default CreateUser;
