import React, { Fragment, useEffect, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { PlusIcon, CogIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { useDashboardStateContext } from '../provider';
import { WIDGETS } from '../widgets';

const WidgetList = () => {
  const [availableWidgets, setAvailableWidgets] = useState([]);

  const { widgets } = useDashboardStateContext();

  useEffect(() => {
    setAvailableWidgets(WIDGETS.filter((W) => !widgets?.some((w) => W.id === w.id)));
  }, [widgets]);

  return (
    <div className="absolute right-0 top-2 z-40 px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md bg-accent-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>
                <PlusIcon className="h-4 w-4" />
              </span>
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
              <Popover.Panel className="absolute left-1/2 z-40 mt-3 w-60 -translate-x-1/2 bg-white px-4 sm:px-0">
                <div className="z-40 overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative flex flex-col">
                    {availableWidgets.map((item) => (
                      <div
                        key={item.id}
                        unselectable="on"
                        draggable="true"
                        onDragStart={(e) => {
                          // this is a hack for firefox
                          // Firefox requires some kind of initialization
                          // which we can do by adding this attribute
                          // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
                          e.dataTransfer.setData('text/plain', '');
                          e.dataTransfer.setData('droppableWidget', JSON.stringify(item));
                          return true;
                        }}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="ml-4 flex items-center py-4">
                          <CogIcon className="mr-2 h-4 w-4" />
                          <p className="text-sm font-medium text-gray-900">{item.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-4">
                    <a
                      href="##"
                      className="flow-root rounded-md p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <span className="block text-sm text-gray-500">Drag and drop widgets to your dashboard</span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default WidgetList;
