import React from 'react';
import { Organization } from 'cofe-ct-b2b-ecommerce/types/organization/organization';
import Dashboard from './dashboard';
import { DashboardProvider } from './provider';
import { useFormat } from 'helpers/hooks/useFormat';

interface Props {
  organization: Organization;
}

const DashboardWrapper: React.FC<Props> = ({ organization }) => {
  const { formatMessage } = useFormat({ name: 'dashboard' });

  return (
    <DashboardProvider>
      <div className="my-6 border-b-2 pb-2">
        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-light-100">
          {formatMessage({ id: 'dashboard.my', defaultMessage: 'My dashboard' })}
        </h3>
        <p className="max-w-2xl text-sm text-gray-500">
          {formatMessage({
            id: 'dashboard.desc',
            defaultMessage: 'Your personalized dashboard and widgets. Start by dragging widgets from + list',
          })}
        </p>
      </div>
      <Dashboard organization={organization} />
    </DashboardProvider>
  );
};

export default DashboardWrapper;
