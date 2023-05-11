import React from 'react';
import { BusinessUnit } from '@Types/business-unit/BusinessUnit';
import useHash from 'helpers/hooks/useHash';
import { Reference } from 'helpers/reference';
import PersonalLists from './personalLists';
import SharedLists from './sharedLists';
export interface Props {
  pageTitle?: string;
  emptyStateImage?: { media: any } | any;
  emptyStateTitle?: string;
  emptyStateSubtitle?: string;
  emptyStateCTALabel?: string;
  emptyStateCTALink?: Reference;
  associations: BusinessUnit[];
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Wishlists: React.FC<Props> = ({
  pageTitle,
  emptyStateImage,
  emptyStateTitle,
  emptyStateSubtitle,
  emptyStateCTALabel,
  emptyStateCTALink,
  associations,
}) => {
  const hash = useHash();

  const tabs = [
    { name: 'Personal purchase lists', href: '#' },
    { name: 'Shared purchase lists with me', href: '#shared' },
  ];

  const mapping = {
    '#': PersonalLists,
    '#shared': SharedLists,
  };

  //tabs change (mobile only)
  const handleTabChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    window.location.hash = e.target.value;
  };

  //current rendered content
  const Content = mapping[hash];

  return (
    <div className="w-full">
      <div className="py-6">
        {/* Tabs */}
        <div className="lg:hidden">
          <label htmlFor="selected-tab" className="sr-only">
            Select a tab
          </label>
          <select
            id="selected-tab"
            name="selected-tab"
            className="mt-1 block w-full rounded-md border-gray-300 py-2 pr-10 pl-3 text-base focus:border-accent-400 focus:outline-none focus:ring-accent-400 sm:text-sm"
            defaultValue={tabs.find((tab) => tab.href === hash)?.name}
            onChange={handleTabChange}
          >
            {tabs.map((tab) => (
              <option key={tab.name} value={tab.href}>
                {tab.name}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden lg:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.href === hash
                      ? 'border-accent-400 text-accent-400'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-light-100',
                    'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium',
                  )}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
        {Content && (
          <Content
            {...{
              pageTitle,
              emptyStateImage,
              emptyStateTitle,
              emptyStateSubtitle,
              emptyStateCTALabel,
              emptyStateCTALink,
              associations,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Wishlists;
