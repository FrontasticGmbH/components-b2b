import React, { useEffect } from 'react';
import { Address } from '@Types/account/Address';
import { useFormat } from 'helpers/hooks/useFormat';
import { mapAddressToString } from 'helpers/utils/addressUtil';
import { useAccount } from 'frontastic';
import { useBusinessUnitStateContext } from 'frontastic/provider/BusinessUnitState';
import { FormData } from '../';
interface Props {
  updateSelection: (address: object) => void;
  isNewAddressHidden?: boolean;
  addressType?: string;
  data: FormData;
}

const AddressSelection: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  updateSelection,
  className,
  isNewAddressHidden,
  data,
  addressType = 'shipping',
}) => {
  const { businessUnit } = useBusinessUnitStateContext();
  const { formatMessage } = useFormat({ name: 'business-unit' });
  const { account } = useAccount();

  const updateAddress = (address: Address) => {
    updateSelection(
      address
        ? {
            ...data,
            firstName: addressType === 'billing' ? data.firstName : address.firstName,
            lastName: addressType === 'billing' ? data.lastName : address.lastName,
            phone: address.phone,
            [`${addressType}StreetName`]: `${address.streetNumber} ${address.streetName}`,
            [`${addressType}City`]: address.city,
            [`${addressType}PostalCode`]: address.postalCode,
            [`${addressType}Country`]: address.country,
            email: account?.email,
          }
        : undefined,
    );
  };

  useEffect(() => {
    if (businessUnit?.addresses?.length && account) {
      updateAddress(businessUnit.addresses[0]);
    }
  }, [businessUnit?.addresses, account]);

  if (!businessUnit?.addresses?.length) {
    return null;
  }

  const addressSelectionHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const address = businessUnit.addresses.find((address) => address.addressId === event.target.value);
    updateAddress(address);
  };

  return (
    <div className={className}>
      <label className="text-sm leading-tight text-neutral-700" htmlFor="billing-country">
        <span>{formatMessage({ id: 'select-address', defaultMessage: 'Select a saved address' })}</span>
      </label>
      {/* TODO: default value can be the last order on this BU */}
      <select onChange={addressSelectionHandler} className="input input-primary">
        {businessUnit.addresses.map((address) => (
          <option key={address.addressId} value={address.addressId}>
            {mapAddressToString(address)}
          </option>
        ))}
        {isNewAddressHidden && (
          <option value={-1}>{formatMessage({ id: 'new-address', defaultMessage: 'Or enter a new address' })}</option>
        )}
      </select>
    </div>
  );
};

export default AddressSelection;
