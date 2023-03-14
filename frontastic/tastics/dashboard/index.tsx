import { Organization } from 'cofe-ct-b2b-ecommerce/types/organization/organization';
import Dashboard from 'components/commercetools-ui/dashboard';
import React from 'react';

const DashboardTastic = ({ data }) => {
  const { organization }: { organization: Organization } = data.data.dataSource;

  return <Dashboard organization={organization} />;
};

export default DashboardTastic;
