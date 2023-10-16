'use client';

import React from 'react';
import Dashboard from '@/components/pages/dashboard';
import { DashboardLinks } from '@/components/pages/dashboard/constants';
import AddressesPage from '@/components/pages/dashboard/pages/addresses';
import { AddressesPageProps } from '@/components/pages/dashboard/pages/addresses/types';
import useAccount from '@/lib/hooks/useAccount';
import { mapAddress, mapCoCoAddress } from '@/utils/mappers/map-address';
import countries from '@/static/countries.json';
import useSearch from './hooks/useSearch';
import useSubPath from './hooks/useSubPath';

const AddressesTastic = () => {
  const {
    account,
    addAddress: addAccountAddress,
    updateAddress: updateAccountAddress,
    removeAddress: removeAccountAddress,
  } = useAccount();

  const { searchedAccountAddresses, handleSearch } = useSearch({ accountAddresses: account?.addresses ?? [] });

  const addressesProps = {
    accountAddresses: searchedAccountAddresses.map(mapAddress),
    onSearchAccountAddresses: handleSearch('accountAddresses'),
    onAddAccountAddress: async (address) => {
      await addAccountAddress(mapCoCoAddress(address));
    },
    onUpdateAccountAddress: async (address) => {
      await updateAccountAddress(mapCoCoAddress(address));
    },
    onDeleteAccountAddress: async (addressId) => {
      await removeAccountAddress(addressId);
    },
    countryOptions: countries.map(({ name, code, states }) => ({
      name,
      value: code,
      states: states.map(({ name, code }) => ({ name, value: code })),
    })),
  } as AddressesPageProps;

  const { ActiveSubPath } = useSubPath(addressesProps);

  return (
    <Dashboard title={ActiveSubPath?.title ?? 'common.addresses'} href={DashboardLinks.addresses}>
      {ActiveSubPath?.Component ?? <AddressesPage {...addressesProps} />}
    </Dashboard>
  );
};

export default AddressesTastic;