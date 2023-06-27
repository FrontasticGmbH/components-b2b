import React, { useEffect, useState } from 'react';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import { useStores } from 'frontastic';
import { useBusinessUnitStateContext } from 'frontastic/provider/BusinessUnitState';
import { useBusinessUnitDetailsStateContext } from '../../provider';

const GeneralPanel: React.FC = () => {
  const { selectedBusinessUnit: businessUnit, getStoreKeys, reloadTree } = useBusinessUnitDetailsStateContext();

  const { formatMessage } = useFormat({ name: 'business-unit' });
  const [data, setData] = useState({
    name: '',
    contactEmail: '',
    status: '',
    unitType: '',
    stores: [],
    budget: -1,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [stores, setStores] = useState([]);
  const [isStoreLoading, setIsStoreLoading] = useState(false);

  const { updateName, updateContactEmail, updateBudget } = useBusinessUnitStateContext();
  const { getStoresByKey } = useStores();

  const updateCompanyName = async () => {
    setIsLoading(true);
    await updateName(businessUnit?.key, data.name);
    await reloadTree();
    setIsLoading(false);
  };

  const updateCompanyEmail = async () => {
    setIsLoading(true);
    await updateContactEmail(businessUnit?.key, data.contactEmail);
    await reloadTree();
    setIsLoading(false);
  };

  const updateCompanyBudget = async () => {
    setIsLoading(true);
    await updateBudget(businessUnit, data.budget);
    await reloadTree();
    setIsLoading(false);
  };

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setData({
      name: businessUnit?.name,
      contactEmail: businessUnit?.contactEmail,
      status: businessUnit?.status,
      unitType: businessUnit?.unitType,
      stores: businessUnit?.stores,
      budget: CurrencyHelpers.getDollarsValue(businessUnit?.custom?.fields?.budget),
    });
  }, [businessUnit]);

  useEffect(() => {
    (async () => {
      setIsStoreLoading(true);
      const stores = await getStoresByKey(getStoreKeys().map((store) => `"${store}"`));
      setStores(stores);
      setIsStoreLoading(false);
    })();
  }, [businessUnit]);

  if (!businessUnit) {
    return <div className="text-md mt-2">Nothing Selected!</div>;
  }
  return (
    <>
      <div className="my-10">
        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-light-100">
          {formatMessage({ id: 'business-unit.general', defaultMessage: 'Business unit general settings' })}
        </h3>
        <p className="max-w-2xl text-sm text-gray-500">
          {formatMessage({
            id: 'business-unit.general.desc',
            defaultMessage: `View or modify settings for ${businessUnit.name}`,
          })}
        </p>
      </div>
      <div className="business-unit-general flex flex-row flex-wrap">
        <div className="basis-1/2">
          <label htmlFor="name">{formatMessage({ id: 'name', defaultMessage: 'Name' })}</label>
          <div className="flex flex-row">
            <input
              id="name"
              name="name"
              type="text"
              value={data.name}
              onChange={updateValue}
              className="input input-primary"
            />
            {businessUnit.name !== data.name && (
              <button
                className="ml-2 flex w-16 justify-center rounded-md border border-transparent bg-accent-400 py-2 text-center text-sm font-medium text-white shadow-sm transition-colors duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 disabled:bg-gray-300"
                onClick={updateCompanyName}
              >
                {!isLoading && 'Apply'}
                {isLoading && <LoadingIcon className="mt-0.5 h-4 w-4 animate-spin" />}
              </button>
            )}
          </div>
        </div>
        <div className="basis-1/2">
          <label htmlFor="contact-email" className="ml-2">
            {formatMessage({ id: 'contact-email', defaultMessage: 'Contact Email' })}
          </label>
          <div className="flex flex-row">
            <input
              id="contact-email"
              name="contactEmail"
              type="email"
              onChange={updateValue}
              value={data.contactEmail}
              className="input input-primary ml-2"
            />
            {businessUnit.contactEmail !== data.contactEmail && (
              <button
                className="ml-2 flex w-16 justify-center rounded-md border border-transparent bg-accent-400 py-2 text-center text-sm font-medium text-white shadow-sm transition-colors duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 disabled:bg-gray-300"
                onClick={updateCompanyEmail}
              >
                {!isLoading && 'Apply'}
                {isLoading && <LoadingIcon className="mt-0.5 h-4 w-4 animate-spin" />}
              </button>
            )}
          </div>
        </div>
        <div className="basis-1/2">
          <label htmlFor="budget">{formatMessage({ id: 'budget', defaultMessage: 'Budget in EUR' })}</label>
          <div className="flex flex-row">
            <input
              id="budget"
              name="budget"
              type="number"
              min={1}
              onChange={updateValue}
              placeholder={data.budget === -1 ? 'No budget set' : ''}
              value={data.budget === -1 ? '' : data.budget}
              className="input input-primary"
            />
            {CurrencyHelpers.getDollarsValue(businessUnit.custom?.fields?.budget) !== data.budget && data.budget > 0 && (
              <button
                className="ml-2 flex w-16 justify-center rounded-md border border-transparent bg-accent-400 py-2 text-center text-sm font-medium text-white shadow-sm transition-colors duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 disabled:bg-gray-300"
                onClick={updateCompanyBudget}
              >
                {!isLoading && 'Apply'}
                {isLoading && <LoadingIcon className="mt-0.5 h-4 w-4 animate-spin" />}
              </button>
            )}
          </div>
        </div>
        <div className="basis-1/2">
          <label htmlFor="type" className="ml-2">
            {formatMessage({ id: 'type', defaultMessage: 'Unit type' })}
          </label>
          <input id="type" type="text" value={data.unitType} readOnly={true} className="input input-primary ml-2" />
        </div>
        <div className="flex-flex-row basis-1/2 items-center pt-6">
          <input
            id="status"
            type="checkbox"
            checked={data.status === 'Active'}
            readOnly={true}
            className="input input-checkbox mr-4"
          />
          <label htmlFor="status">{formatMessage({ id: 'status', defaultMessage: 'Status' })}</label>
        </div>

        <div className="w-full">
          <h3 className="text-bold text-lg">Stores:</h3>
          {isStoreLoading && <LoadingIcon className="mt-0.5 h-4 w-4 animate-spin" />}
          {!isStoreLoading && (
            <>
              {!businessUnit?.stores?.length && businessUnit.storeMode !== 'FromParent' && (
                <span>No store is assigned yet</span>
              )}
              {!businessUnit?.stores?.length && businessUnit.storeMode === 'FromParent' && (
                <span>(Inherited from parent)</span>
              )}
              {!!stores.length && (
                <ol className="list-decimal pl-6">
                  {stores.map((store) => (
                    <li key={store.id}>{store.name ?? store.key}</li>
                  ))}
                </ol>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default GeneralPanel;
