import { useEffect, useState } from 'react';
import { Account } from '@commercetools/frontend-domain-types/account/Account';
import { Address } from '@commercetools/frontend-domain-types/account/Address';
import { BusinessUnit } from 'cofe-ct-b2b-ecommerce/types/business-unit/BusinessUnit';
import { ChannelResourceIdentifier } from 'cofe-ct-b2b-ecommerce/types/channel/channel';
import { useAccount, useCart } from 'frontastic';
import { fetchApiHub } from 'frontastic/lib/fetch-api-hub';
import { UseBusinessUnit } from 'frontastic/provider/Frontastic/UseBusinessUnit';
import { createStore } from '../../frontastic/actions/stores';
import { Order } from '@Types/cart/Order';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { BUSINESS_UNIT_CUSTOM_FILEDS, BUSINESS_UNIT_CUSTOM_TYPE } from 'helpers/customTypes';

export const useBusinessUnit = (): UseBusinessUnit => {
  const [businessUnit, setBusinessUnit] = useState(null);
  const { account } = useAccount();
  const { getCart } = useCart();

  const getMyOrganization = async (): Promise<any> => {
    if (!businessUnit) {
      return null;
    }
    const result = await fetchApiHub(`/action/business-unit/getMyOrganization`, {
      method: 'GET',
    });
    return result.map((bu) => ({
      ...bu,
      id: bu.key,
      label: bu.name,
      parentId: bu.parentUnit ? bu.parentUnit.key : null,
    }));
  };

  const createBusinessUnitAndStore = async (account, customer, parentBusinessUnit: string = null): Promise<any> => {
    const store = await createStore(account, parentBusinessUnit);

    return await fetchApiHub(
      '/action/business-unit/create',
      { method: 'POST' },
      { account, customer, store, parentBusinessUnit },
    );
  };

  const createBusinessUnit = async (account, customer, parentBusinessUnit: string = null): Promise<any> => {
    return await fetchApiHub(
      '/action/business-unit/create',
      { method: 'POST' },
      { account, customer, store: null, parentBusinessUnit },
    );
  };

  const getSuperUserBusinessUnits = async (email: string): Promise<BusinessUnit[]> => {
    return fetchApiHub(`/action/business-unit/getSuperUserBusinessUnits?email=${email}`, { method: 'GET' });
  };

  const getMyBusinessUnit = async () => {
    const result = await fetchApiHub('/action/business-unit/getMe', { method: 'GET' });
    return result;
  };

  const setMyBusinessUnit = async (businessUnitKey: string) => {
    const res = await fetchApiHub('/action/business-unit/setMe', { method: 'POST' }, { key: businessUnitKey });
    await getCart();
    setBusinessUnit(res);
    return res;
  };

  const setMyStore = async (storeKey: string): Promise<ChannelResourceIdentifier> => {
    return fetchApiHub('/action/store/setMe', { method: 'POST' }, { key: storeKey });
  };

  const removeBusinessUnit = async (key: string): Promise<BusinessUnit> => {
    try {
      const res = await fetchApiHub(`/action/business-unit/remove?key=${key}`, { method: 'POST' });
      return res;
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const updateName = async (key: string, name: string): Promise<any> => {
    return fetchApiHub(
      `/action/business-unit/update`,
      { method: 'POST' },
      { actions: [{ action: 'changeName', name }], key },
    );
  };

  const updateBudget = async (key: string, value: number): Promise<any> => {
    return fetchApiHub(
      `/action/business-unit/update`,
      { method: 'POST' },
      {
        actions: [
          {
            action: 'setCustomType',
            type: { typeId: 'type', key: BUSINESS_UNIT_CUSTOM_TYPE },
            fields: {
              [BUSINESS_UNIT_CUSTOM_FILEDS.BUDGET]: CurrencyHelpers.formatToMoney(value),
            },
          },
        ],
        key,
      },
    );
  };

  const updateWorkflow = async (key: string, value: any): Promise<any> => {
    return fetchApiHub(
      `/action/business-unit/update`,
      { method: 'POST' },
      {
        actions: [
          {
            action: 'setCustomType',
            type: { typeId: 'type', key: BUSINESS_UNIT_CUSTOM_TYPE },
            fields: {
              [BUSINESS_UNIT_CUSTOM_FILEDS.WORKFLOWS]: value,
            },
          },
        ],
        key,
      },
    );
  };

  const updateContactEmail = async (key: string, contactEmail: string): Promise<any> => {
    return fetchApiHub(
      `/action/business-unit/update`,
      { method: 'POST' },
      { actions: [{ action: 'setContactEmail', contactEmail }], key },
    );
  };

  const addAddress = async (key: string, address: Omit<Address, 'addressId'>): Promise<BusinessUnit> => {
    return fetchApiHub(
      `/action/business-unit/update`,
      { method: 'POST' },
      { actions: [{ action: 'addAddress', address }], key },
    );
  };

  const editAddress = async (key: string, addressId: string, address: Address): Promise<BusinessUnit> => {
    return fetchApiHub(
      `/action/business-unit/update`,
      { method: 'POST' },
      { actions: [{ action: 'changeAddress', addressId, address }], key },
    );
  };

  const deleteAddress = async (key: string, addressId: string): Promise<BusinessUnit> => {
    return fetchApiHub(
      `/action/business-unit/update`,
      { method: 'POST' },
      { actions: [{ action: 'removeAddress', addressId }], key },
    );
  };

  const addUser = async (key: string, email: string, roles: string[]): Promise<BusinessUnit> => {
    return fetchApiHub(`/action/business-unit/addAssociate?key=${key}`, { method: 'POST' }, { email, roles });
  };

  const removeUser = async (key: string, id: string): Promise<BusinessUnit> => {
    return fetchApiHub(`/action/business-unit/removeAssociate?key=${key}`, { method: 'POST' }, { id });
  };

  const updateUser = async (key: string, id: string, roles: string[]): Promise<BusinessUnit> => {
    return fetchApiHub(`/action/business-unit/updateAssociate?key=${key}`, { method: 'POST' }, { id, roles });
  };

  const getUser = async (id: string): Promise<Account> => {
    return fetchApiHub(`/action/account/getById?id=${id}`, { method: 'GET' });
  };

  const getBusinessUnitOrders = async (keys: string[]): Promise<Order[]> => {
    return await fetchApiHub(
      `/action/business-unit/getBusinessUnitOrders?keys=${keys?.map((key) => `"${key}"`).join(', ')}`,
      {
        method: 'GET',
      },
    );
  };

  const getAllChildKeys = (businessUnit: BusinessUnit, businessUnitTree: BusinessUnit[]): string[] => {
    let tree = [businessUnit];

    let tempParents = [businessUnit];
    while (tempParents.length) {
      const [current] = tempParents.splice(0, 1);
      const list = businessUnitTree.filter((bu) => bu.parentUnit?.key === current.key);
      if (list.length) {
        tree = tree.concat(list);
        tempParents = tempParents.concat(list);
      }
    }
    return tree.map((bu) => bu.key);
  };

  const getOrders = async (businessUnit: BusinessUnit): Promise<Order[]> => {
    return getBusinessUnitOrders([businessUnit.key]);
  };

  const getAllOrders = async (businessUnit: BusinessUnit): Promise<Order[]> => {
    const keys = getAllChildKeys(businessUnit, await getMyOrganization());
    return getBusinessUnitOrders(keys);
  };

  useEffect(() => {
    if (account?.accountId) {
      (async () => {
        const business = await getMyBusinessUnit();
        const fullBusinessUnit = await fetchApiHub(`/action/business-unit/getByKey?key=${business.key}`);
        setBusinessUnit({
          ...fullBusinessUnit,
          ...business,
        });
      })();
    }
  }, [account]);

  return {
    addUser,
    removeUser,
    updateUser,
    updateBudget,
    getUser,
    addAddress,
    deleteAddress,
    editAddress,
    businessUnit,
    createBusinessUnit,
    createBusinessUnitAndStore,
    getMyOrganization,
    getSuperUserBusinessUnits,
    setMyBusinessUnit,
    removeBusinessUnit,
    setMyStore,
    updateName,
    updateWorkflow,
    updateContactEmail,
    getOrders,
    getAllOrders,
  };
};
