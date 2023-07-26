import { useEffect, useState } from 'react';
import { Address } from '@Types/account/Address';
import { Order } from '@Types/cart/Order';
import { AssociateRole } from '@Types/business-unit/Associate';
import { BusinessUnit } from '@Types/business-unit/BusinessUnit';
import { ChannelResourceIdentifier } from '@Types/channel/channel';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { BUSINESS_UNIT_CUSTOM_FILEDS, BUSINESS_UNIT_CUSTOM_TYPE } from 'helpers/customTypes';
import useSWR, { mutate } from 'swr';
import { revalidateOptions, useAccount, useCart, useWishlist } from 'frontastic';
import { fetchApiHub } from 'frontastic/lib/fetch-api-hub';
import { UseBusinessUnit } from 'frontastic/provider/Frontastic/UseBusinessUnit';
import { createStore } from '../../frontastic/actions/stores';

export const useBusinessUnit = (): UseBusinessUnit => {
  const [businessUnit, setBusinessUnit] = useState(null);
  const { account } = useAccount();
  const { getCart, getAllSuperUserCarts } = useCart();
  const { fetchStoreWishlists } = useWishlist();

  const { data: associateRoles } = useSWR<AssociateRole[]>(
    '/action/business-unit/getAssociateRoles',
    fetchApiHub,
    revalidateOptions,
  );

  const fetchAssociateRoles = async () => {
    const roles = await fetchApiHub(`/action/business-unit/getAssociateRoles`);
    mutate('/action/business-unit/getAssociateRoles', roles);
  };

  const getMyOrganization = async (): Promise<any> => {
    if (!businessUnit) {
      return null;
    }
    const result = await fetchApiHub(`/action/business-unit/getCompanies`, {
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
    getAllSuperUserCarts();
    await getCart();
    setBusinessUnit(res);
    return res;
  };

  const setMyStore = async (storeKey: string): Promise<ChannelResourceIdentifier> => {
    const res = await fetchApiHub('/action/store/setMe', { method: 'POST' }, { key: storeKey });
    getAllSuperUserCarts();
    return res;
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

  const updateBudget = async (businessUnit: BusinessUnit, value: number): Promise<any> => {
    return fetchApiHub(
      `/action/business-unit/update`,
      { method: 'POST' },
      {
        actions: [
          {
            action: 'setCustomType',
            type: { typeId: 'type', key: BUSINESS_UNIT_CUSTOM_TYPE },
            fields: {
              ...(businessUnit.custom?.fields || {}),
              [BUSINESS_UNIT_CUSTOM_FILEDS.BUDGET]: CurrencyHelpers.formatToMoney(value),
            },
          },
        ],
        key: businessUnit.key,
      },
    );
  };

  const updateWorkflow = async (businessUnit: BusinessUnit, value: any): Promise<any> => {
    return fetchApiHub(
      `/action/business-unit/update`,
      { method: 'POST' },
      {
        actions: [
          {
            action: 'setCustomType',
            type: { typeId: 'type', key: BUSINESS_UNIT_CUSTOM_TYPE },
            fields: {
              ...(businessUnit.custom?.fields || {}),
              [BUSINESS_UNIT_CUSTOM_FILEDS.WORKFLOWS]: value,
            },
          },
        ],
        key: businessUnit.key,
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
    const addressKey = `address_${crypto.randomUUID()}`;
    const businessUnit = await fetchApiHub(
      `/action/business-unit/update`,
      { method: 'POST' },
      { actions: [{ action: 'addAddress', address: { ...address, key: addressKey } }], key },
    );

    const actions = [];
    if (address.isDefaultBillingAddress) {
      actions.push({
        action: 'setDefaultBillingAddress',
        addressKey,
      });
    }
    if (address.isDefaultShippingAddress) {
      actions.push({
        action: 'setDefaultShippingAddress',
        addressKey,
      });
    }
    if (actions.length) {
      fetchApiHub(
        `/action/business-unit/update`,
        { method: 'POST' },
        {
          actions,
          key,
        },
      );
    }

    return businessUnit;
  };

  const editAddress = async (key: string, addressId: string, address: Address): Promise<BusinessUnit> => {
    const actions: { action: string; addressId: string; address?: Address }[] = [
      { action: 'changeAddress', addressId, address },
    ];
    if (address.isDefaultBillingAddress) {
      actions.push({
        action: 'setDefaultBillingAddress',
        addressId,
      });
    }
    if (address.isDefaultShippingAddress) {
      actions.push({
        action: 'setDefaultShippingAddress',
        addressId,
      });
    }
    return fetchApiHub(`/action/business-unit/update`, { method: 'POST' }, { actions, key });
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

  const getBusinessUnitOrders = async (key: string): Promise<Order[]> => {
    return await fetchApiHub(`/action/business-unit/getBusinessUnitOrders?key=${key}`, {
      method: 'GET',
    });
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
    return getBusinessUnitOrders(businessUnit.key);
  };

  useEffect(() => {
    if (account?.accountId) {
      (async () => {
        const business = await getMyBusinessUnit();
        const fullBusinessUnit = await fetchApiHub(`/action/business-unit/getByKey?key=${business.key}`);
        getCart();
        fetchStoreWishlists().catch(() => console.log('No store in session'));
        fetchAssociateRoles();
        getAllSuperUserCarts();
        setBusinessUnit({
          ...fullBusinessUnit,
          ...business,
          addresses: fullBusinessUnit.addresses,
        });
      })();
    }
  }, [account]);

  return {
    addUser,
    removeUser,
    updateUser,
    updateBudget,
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
    associateRoles,
  };
};
