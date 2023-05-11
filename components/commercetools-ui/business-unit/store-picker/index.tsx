import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Organization } from '@Types/organization/organization';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { useCart, useWishlist } from 'frontastic';
import { useBusinessUnitStateContext } from 'frontastic/provider/BusinessUnitState';

interface Props {
  organization: Organization;
}
const StorePicker: React.FC<Props> = ({ organization }) => {
  const { setMyStore } = useBusinessUnitStateContext();
  const { getCart } = useCart();
  const { fetchStoreWishlists } = useWishlist();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const setStore = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIsLoading(true);
    await setMyStore(event.target.value);
    fetchStoreWishlists().catch(() => console.log('No store in session'));
    getCart();
    setIsLoading(false);
    router.push('/');
  };

  return (
    <span>
      <span className="inline-block text-xs">Store:</span>
      {isLoading && <LoadingIcon className="ml-3 inline-block h-2 w-2 animate-spin" />}

      <select
        value={organization.store?.key}
        onChange={setStore}
        className={`store-picker w-36 appearance-none border-none py-0 pl-3 pr-6 text-xs leading-tight text-gray-700 shadow-none focus:outline-none ${
          isLoading && 'hidden'
        }`}
      >
        {organization.businessUnit.stores.map((item) => (
          <option key={item.key} value={item.key}>
            {item.name ?? item.key}
          </option>
        ))}
        {!organization.store && (
          <option value={-1} disabled selected>
            {`N/A`}
          </option>
        )}
      </select>
    </span>
  );
};

export default StorePicker;
