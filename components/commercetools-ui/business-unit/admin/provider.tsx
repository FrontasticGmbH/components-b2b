import { Context, createContext, useContext, useEffect, useState } from 'react';
import { TreeNode, TreeNodeList } from '@naisutech/react-tree';
import { BusinessUnit } from '@Types/business-unit/BusinessUnit';
import { useBusinessUnitStateContext } from 'frontastic/provider/BusinessUnitState';

const BusinessUnitDetailsStateContext: Context<{
  businessUnitTree: TreeNodeList;
  selectedBusinessUnit: BusinessUnit;
  setSelectedBusinessUnit: (businessUnit: BusinessUnit) => void;
  getStoreKeys: () => string[];
  reloadTree: () => Promise<void>;
}> = createContext({
  businessUnitTree: null,
  selectedBusinessUnit: null,
  reloadTree: () => null,
  getStoreKeys: () => null,
  setSelectedBusinessUnit: () => null,
});

export const BusinessUnitDetailsProvider = ({ children }) => {
  const [tree, setTree] = useState<TreeNodeList>(null);
  const [selectedBusinessUnit, setSelectedBusinessUnit] = useState<BusinessUnit>(null);

  const { businessUnit, getMyOrganization } = useBusinessUnitStateContext();

  useEffect(() => {
    if (businessUnit?.key) {
      getOrganizationTree();
    }
  }, [businessUnit]);

  const getOrganizationTree = async () => {
    const res = await getMyOrganization();
    setTree(res);
    if (selectedBusinessUnit) {
      const updatedSelectedBusinessUnit = res.find((bu) => bu.key === selectedBusinessUnit.key);
      if (updatedSelectedBusinessUnit) {
        setSelectedBusinessUnit(updatedSelectedBusinessUnit);
      }
    }
  };

  const getStoreKeys = (): string[] => {
    const getKeys = (businessUnit) => {
      if (businessUnit.storeMode !== 'FromParent') {
        return businessUnit.stores?.map((store) => store.key) || [];
      }
      return null;
    };
    if (selectedBusinessUnit) {
      let currentBU: TreeNode = {
        ...selectedBusinessUnit,
        id: selectedBusinessUnit.key,
        parentId: selectedBusinessUnit.parentUnit?.key,
      };
      let keys = getKeys(currentBU);
      while (keys === null) {
        currentBU = tree.find((bu) => bu.id === currentBU?.parentId);
        if (!currentBU) {
          break;
        }
        keys = getKeys(currentBU);
      }
      return keys;
    }
    return [];
  };

  return (
    <BusinessUnitDetailsStateContext.Provider
      value={{
        businessUnitTree: tree,
        selectedBusinessUnit,
        setSelectedBusinessUnit,
        reloadTree: getOrganizationTree,
        getStoreKeys,
      }}
    >
      {children}
    </BusinessUnitDetailsStateContext.Provider>
  );
};

export const useBusinessUnitDetailsStateContext = () => useContext(BusinessUnitDetailsStateContext);
