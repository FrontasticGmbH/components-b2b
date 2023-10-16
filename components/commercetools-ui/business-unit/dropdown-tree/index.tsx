import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { useWishlist } from 'frontastic';
import { useBusinessUnitStateContext } from 'frontastic/provider/BusinessUnitState';

const BusinessUnitDropdownTree = ({ tree }) => {
  const { businessUnit, setMyBusinessUnit } = useBusinessUnitStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { fetchStoreWishlists } = useWishlist();

  const setBusinessUnit = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIsLoading(true);
    const bu = await setMyBusinessUnit(event.target.value);
    fetchStoreWishlists().catch(() => console.log('No store in session'));
    setIsLoading(false);
    router.replace(
      {
        pathname: router.pathname,
        query: {
          ...router.query, // list all the queries here
          bu_key: bu.key,
        },
      },
      undefined,
      {
        shallow: false,
      },
    );
  };

  if (!businessUnit || !tree?.length) return null;

  return (
    <span>
      <span className="inline-block text-xs">BU:</span>
      {isLoading && <LoadingIcon className="ml-3 inline-block h-2 w-2 animate-spin" />}

      <select
        defaultValue={businessUnit.key}
        onChange={setBusinessUnit}
        className={`store-picker w-36 appearance-none border-none py-0 pl-3 pr-6 text-xs leading-tight text-gray-700 shadow-none focus:outline-none ${
          isLoading && 'hidden'
        }`}
      >
        {tree.map((item) => (
          <option key={item.key} value={item.key}>
            {item.name}
          </option>
        ))}
      </select>
    </span>
  );
};

export default BusinessUnitDropdownTree;
