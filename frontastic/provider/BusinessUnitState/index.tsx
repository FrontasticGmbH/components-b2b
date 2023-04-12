import { Context, createContext, useContext } from 'react';
import { useBusinessUnit as useBusinessUnitHook } from '../../../helpers/hooks/useBusinessUnit';
import { UseBusinessUnit } from '../Frontastic/UseBusinessUnit';

const BusinessUnitStateContext: Context<UseBusinessUnit> = createContext({
  addAddress: () => null,
  editAddress: () => null,
  deleteAddress: () => null,
  getUser: () => null,
  getOrders: () => null,
  addUser: () => null,
  removeUser: () => null,
  updateUser: () => null,
  businessUnit: null,
  createBusinessUnit: () => null,
  createBusinessUnitAndStore: () => null,
  getMyOrganization: () => null,
  getSuperUserBusinessUnits: () => null,
  setMyBusinessUnit: () => null,
  setMyStore: () => null,
  updateName: () => null,
  updateBudget: () => null,
  updateWorkflow: () => null,
  updateContactEmail: () => null,
  removeBusinessUnit: () => null,
  associateRoles: null,
});

export const BusinessUnitProvider = ({ children }) => {
  const {
    addAddress,
    editAddress,
    deleteAddress,
    businessUnit,
    createBusinessUnit,
    createBusinessUnitAndStore,
    getMyOrganization,
    setMyBusinessUnit,
    setMyStore,
    updateName,
    updateContactEmail,
    addUser,
    removeUser,
    updateUser,
    getUser,
    getOrders,
    getSuperUserBusinessUnits,
    removeBusinessUnit,
    updateBudget,
    updateWorkflow,
    associateRoles,
  } = useBusinessUnitHook();

  return (
    <BusinessUnitStateContext.Provider
      value={{
        addAddress,
        editAddress,
        deleteAddress,
        businessUnit,
        createBusinessUnit,
        createBusinessUnitAndStore,
        getMyOrganization,
        getSuperUserBusinessUnits,
        setMyBusinessUnit,
        setMyStore,
        updateName,
        updateContactEmail,
        addUser,
        removeUser,
        updateUser,
        getUser,
        getOrders,
        removeBusinessUnit,
        updateBudget,
        updateWorkflow,
        associateRoles,
      }}
    >
      {children}
    </BusinessUnitStateContext.Provider>
  );
};

export const useBusinessUnitStateContext = () => useContext(BusinessUnitStateContext);
