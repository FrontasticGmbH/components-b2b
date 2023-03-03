/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import BusinessUnitAdmin from './admin';
import { BusinessUnitDetailsProvider } from './provider';
const BusinessUnitDetailsWrapper = () => {
  return (
    <BusinessUnitDetailsProvider>
      <BusinessUnitAdmin />
    </BusinessUnitDetailsProvider>
  );
};

export default BusinessUnitDetailsWrapper;
