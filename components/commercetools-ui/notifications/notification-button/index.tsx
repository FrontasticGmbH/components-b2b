import React, { Fragment, HTMLAttributes, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { BellIcon as NotificationIcon, TrashIcon } from '@heroicons/react/solid';
import { Message } from '@twilio/conversations';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { DateHelpers } from 'helpers/dateHelpers';
import { useNotifications } from 'frontastic/provider/Notifications';
import styles from './index.module.css';

const NotificationButton: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const { isInitialized, unreadMessageCount, messages, markMessgaeAsRead, deleteMessage } = useNotifications();

  const [isLoading, setIsLoading] = useState(false);
  const hanleDeleteMessage = async (message: Message) => {
    setIsLoading(true);
    await deleteMessage(message);
    setIsLoading(false);
  };
  if (!isInitialized) {
    return null;
  }

  return (
    <Menu>
      <div className={`relative flex space-x-8 ${className}`}>
        <Menu.Button className="relative">
          {!unreadMessageCount && <BellIcon className="h-5 w-5" />}
          {(unreadMessageCount ?? 0) > 0 && (
            <>
              <NotificationIcon className="shake h-5 w-5" />
              <span className="absolute -top-0 -right-1 h-3 w-3 rounded-full bg-red-400 px-1 hover:bg-red-500">
                <span className="flex h-full w-full items-center justify-center text-xs text-white group-hover:text-white">
                  {unreadMessageCount}
                </span>
              </span>
            </>
          )}
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
        <Menu.Items className="absolute top-8 z-50 mt-2 w-72 origin-top-right overflow-scroll rounded-md bg-white px-2 pb-2 shadow-sm ring-1 ring-black/5 focus:outline-none dark:bg-primary-400 dark:shadow-3xl">
          <div className="mt-4 border-b">
            <span className="font-semibold">Notifications</span>
          </div>
          {!messages?.length && <div className="mt-2 text-sm">No notifications yet!</div>}
          {!!messages?.length && (
            <div className="mt-2 max-h-60 overflow-scroll">
              {messages?.map((message, i) => (
                <Disclosure key={message.sid}>
                  {({ open }) => (
                    <div className="relative mt-2">
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-accent-100 px-4 py-2 text-left text-sm font-medium text-accent-900 hover:bg-accent-200 focus:outline-none focus-visible:ring focus-visible:ring-accent-500 focus-visible:ring-opacity-75">
                        <div>
                          {!!message.attributes?.['subject'] && (
                            <span className="block text-white">{message.attributes?.['subject']}</span>
                          )}
                          <span className="text-xs text-gray-100 ">
                            Recieved on
                            {DateHelpers.formatToLocale(message?.dateCreated)}
                          </span>
                        </div>

                        <div className="h-4 w-4">
                          <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-4 w-4 text-accent-500`} />
                        </div>
                      </Disclosure.Button>
                      {i < unreadMessageCount && (
                        <span className="absolute -top-2 left-0 h-6 w-6 rounded-full bg-red-400 px-1 hover:bg-red-500">
                          <span className="flex h-full w-full items-center justify-center text-xs text-white group-hover:text-white">
                            !
                          </span>
                        </span>
                      )}
                      <Disclosure.Panel className="flex flex-col border px-4 pt-4 pb-2 text-sm">
                        <div
                          className={styles.body}
                          dangerouslySetInnerHTML={{ __html: message.body }}
                          onClick={() => markMessgaeAsRead(message)}
                        ></div>
                        <button className="self-end" onClick={() => hanleDeleteMessage(message)} disabled={isLoading}>
                          {!isLoading && <TrashIcon className="h-4 w-4 text-red-500" />}
                          {isLoading && <LoadingIcon className="h-4 w-4 animate-spin" />}
                        </button>
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              ))}
            </div>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NotificationButton;
