import React from 'react';
import BusinessUnitDropdownTree from 'components/commercetools-ui/business-unit/dropdown-tree';
import { BusinessUnit } from 'cofe-ct-b2b-ecommerce/types/business-unit/BusinessUnit';

export const BusinessUnitTree = ({ data }) => {
  const { tree }: { tree: BusinessUnit[] } = data.data.dataSource;

  return <BusinessUnitDropdownTree tree={tree} />;
};
