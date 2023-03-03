import React, { useEffect, useState } from 'react';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { useBusinessUnitDetailsStateContext } from '../../provider';
import BusinessUnitList from './business-unit-list';
import CreateBusinessUnit from './modals/CreateBusinessUnit';

const BusinessUnitPanel = () => {
  const { selectedBusinessUnit: businessUnit, businessUnitTree, reloadTree } = useBusinessUnitDetailsStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [children, setChildren] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (!!businessUnit && businessUnitTree?.length) {
      const nodes = businessUnitTree.filter((bu) => bu?.parentId === businessUnit.key);
      setChildren(nodes);
    }
    setIsLoading(false);
  }, [businessUnitTree, businessUnit]);

  return (
    <div className="mt-10">
      <div className="space-y-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-light-100">Business units</h3>
        <p className="max-w-2xl text-sm text-gray-500">
          Add/remove direct children to/from <strong>{businessUnit.name}</strong>
        </p>
      </div>
      <div className="divide-y divide-gray-200"></div>
      <div className="flex flex-col items-stretch justify-center py-10">
        {isLoading && <LoadingIcon className="h-8 w-8 text-gray-500" />}
        {!isLoading && !children?.length && <div>No business units yet!</div>}
        {!isLoading && !!children?.length && <BusinessUnitList nodes={children} />}
        <button type="button" className="button button-primary" onClick={() => setIsAddModalOpen(true)}>
          Create a new division
        </button>
        {isAddModalOpen && (
          <CreateBusinessUnit
            parentBusinessUnit={businessUnit}
            onClose={() => setIsAddModalOpen(false)}
            onCreate={reloadTree}
            open={isAddModalOpen}
          />
        )}
      </div>
    </div>
  );
};

export default BusinessUnitPanel;
