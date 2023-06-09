import React, { Fragment } from 'react';
import { Account } from '@Types/account/Account';
import { Menu, Transition } from '@headlessui/react';
import { UserIcon as LoggedInIcon } from '@heroicons/react/solid';
import { Organization } from '@Types/organization/organization';
import { useFormat } from 'helpers/hooks/useFormat';
import { Reference, ReferenceLink } from 'helpers/reference';
import { useAccount } from 'frontastic';
import { useBusinessUnitStateContext } from 'frontastic/provider/BusinessUnitState';

interface AccountButtonProps {
  organization: Organization;
  accountLink: Reference;
  businessUnitLink: Reference;
  account: Account;
}

const AccountButton: React.FC<AccountButtonProps> = ({ accountLink, account, businessUnitLink, organization }) => {
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });
  const { logout } = useAccount();
  const { businessUnit } = useBusinessUnitStateContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="relative ml-4 inline-block">
      {account ? (
        <Menu>
          <div className="relative flex space-x-8">
            <Menu.Button className="flex">
              {/* <span>Account</span> */}
              <LoggedInIcon className="h-4 w-4 text-primary-400 dark:text-light-100" aria-hidden="true" />
            </Menu.Button>
            {/* <div className="absolute -right-[1px] -bottom-[2px] h-[9px] w-[9px] rounded-md bg-green-700"></div> */}
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 top-6 z-50 mt-2 w-72 origin-top-right rounded-md bg-white shadow-sm ring-1 ring-black/5 focus:outline-none dark:bg-primary-400 dark:shadow-3xl">
              <div className="py-1 ">
                <Menu.Item>
                  <ReferenceLink
                    target={accountLink}
                    className={`block w-72 cursor-pointer py-2 px-4 ${
                      account ? 'text-left' : 'text-center'
                    }  text-sm text-primary-400 hover:bg-gray-100 dark:bg-primary-400  dark:text-light-100`}
                  >
                    {formatAccountMessage({ id: 'profile-orders', defaultMessage: 'Profile and Orders' })}
                  </ReferenceLink>
                </Menu.Item>
                {businessUnit?.isAdmin && (
                  <Menu.Item>
                    <ReferenceLink
                      target={businessUnitLink}
                      className={`block w-72 cursor-pointer py-2 px-4 text-sm text-primary-400 hover:bg-gray-100 dark:bg-primary-400  dark:text-light-100`}
                    >
                      {organization?.businessUnit &&
                        formatAccountMessage({ id: 'comapny', defaultMessage: 'Company: ' }) +
                          organization.businessUnit.name}
                    </ReferenceLink>
                  </Menu.Item>
                )}
                {account && (
                  <Menu.Item>
                    <button
                      onClick={handleLogout}
                      className="block w-36 cursor-pointer py-2 px-4 text-left text-sm hover:bg-gray-100 dark:bg-primary-400 dark:text-light-100"
                    >
                      {formatAccountMessage({ id: 'signout', defaultMessage: 'Logout' })}
                    </button>
                  </Menu.Item>
                )}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <div className="flex space-x-8">
          <div className="flex">
            <ReferenceLink
              target={accountLink}
              className="-m-2 p-2 text-primary-400 hover:text-primary-500 dark:text-light-100"
            >
              <span>Log In</span>
              {/* <UserIcon className="h-6 w-6" aria-hidden="true" /> */}
            </ReferenceLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountButton;
