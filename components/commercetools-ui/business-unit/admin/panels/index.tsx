import React from 'react';
import AddressesSection from 'components/commercetools-ui/business-unit/admin/panels/addresses';
import BusinessUnitSection from 'components/commercetools-ui/business-unit/admin/panels/business-unit';
import GeneralSection from 'components/commercetools-ui/business-unit/admin/panels/general';
import OrderSection from 'components/commercetools-ui/business-unit/admin/panels/orders';
import QuotesSection from 'components/commercetools-ui/business-unit/admin/panels/quotes';
import UsersSection from 'components/commercetools-ui/business-unit/admin/panels/users';
import WorkflowRules from 'components/commercetools-ui/business-unit/admin/panels/workflow-rules';
import { useFormat } from 'helpers/hooks/useFormat';
import useHash from 'helpers/hooks/useHash';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const BusinessUnitPanels: React.FC = () => {
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });
  const hash = useHash();

  const tabs = [
    { name: formatAccountMessage({ id: 'general', defaultMessage: 'General' }), href: '#' },
    { name: formatAccountMessage({ id: 'addresses', defaultMessage: 'Addresses' }), href: '#addresses' },
    { name: formatAccountMessage({ id: 'users', defaultMessage: 'Associates' }), href: '#users' },
    { name: formatAccountMessage({ id: 'business-unit', defaultMessage: 'Business unit' }), href: '#business-unit' },
    { name: formatAccountMessage({ id: 'quotes', defaultMessage: 'Quotes' }), href: '#quotes' },
    { name: formatAccountMessage({ id: 'quotes', defaultMessage: 'Orders' }), href: '#orders' },
    { name: 'Workflow', href: '#workflow' },
  ];

  const mapping = {
    '#': GeneralSection,
    '#addresses': AddressesSection,
    '#users': UsersSection,
    '#business-unit': BusinessUnitSection,
    '#quotes': QuotesSection,
    '#orders': OrderSection,
    '#workflow': WorkflowRules,
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
        {Content && <Content />}
      </div>
    </div>
  );
};
