import React from 'react';
import useTranslation from '@/providers/I18n/hooks/useTranslation';
import { CompanyAdminPageProps } from '../company-admin/types';
import SearchPanel from '../../components/search-panel';
import AddressesTable from '../company-admin/components/addresses-table';

const AddressesPage = ({
  onDeleteAccountAddress,
  accountAddresses,
  onSearchAccountAddresses,
}: Pick<CompanyAdminPageProps, 'onDeleteAccountAddress' | 'accountAddresses' | 'onSearchAccountAddresses'>) => {
  const { translate } = useTranslation();

  return (
    <SearchPanel
      translations={{ button: translate('dashboard.address.add') }}
      buttonLink={`?hash=account-add-address`}
      onSearchChange={onSearchAccountAddresses}
      isEmpty={!accountAddresses.length}
      entity={translate('common.addresses')}
    >
      <AddressesTable onDeleteAddress={onDeleteAccountAddress} addresses={accountAddresses} hash="account-" />
    </SearchPanel>
  );
};

export default AddressesPage;
