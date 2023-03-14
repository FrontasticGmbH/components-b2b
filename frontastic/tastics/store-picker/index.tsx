import React from 'react';
import StorePicker from '../../../components/commercetools-ui/business-unit/store-picker';
import { Organization } from 'cofe-ct-b2b-ecommerce/types/organization/organization';

export const StorePickerTastic = ({ data }) => {
  const { organization }: { organization: Organization } = data.data.dataSource;

  return <StorePicker organization={organization} />;
};
