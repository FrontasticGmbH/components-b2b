import React from 'react';
import StorePicker from '../../../components/commercetools-ui/business-unit/store-picker';
import { Organization } from '@Types/organization/organization';

export const StorePickerTastic = ({ data }) => {
  const { organization }: { organization: Organization } = data.data.dataSource;

  return <StorePicker organization={organization} />;
};
