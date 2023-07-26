/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { BusinessUnit } from '@Types/business-unit/BusinessUnit';
import { useBusinessUnit } from 'helpers/hooks/useBusinessUnit';
import { useBusinessUnitDetailsStateContext } from '../../provider';
import DeleteBusinessUnit from './modals/DeleteBusinessUnit';

interface Props {
  nodes: BusinessUnit[];
}
const BusinessUnitList: React.FC<Props> = ({ nodes }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [error, setError] = useState('');
  const [selectedBusinessUnit, setSelectedBusinessUnit] = useState<BusinessUnit>(null);

  const { removeBusinessUnit } = useBusinessUnit();
  const { reloadTree } = useBusinessUnitDetailsStateContext();

  const handleOpenDelete = (businessUnit: BusinessUnit) => {
    setSelectedBusinessUnit(businessUnit);
    setIsDeleteModalOpen(true);
  };
  const handleCLoseDelete = () => {
    setSelectedBusinessUnit(null);
    setIsDeleteModalOpen(false);
  };
  const handleDeleteBusinessUnit = async (businessUnitKey: string) => {
    try {
      await removeBusinessUnit(businessUnitKey);
      setError('');
      reloadTree();
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <div className="my-4 text-lg text-red-300">{error}</div>
      <table className="table-primary w-full table-fixed border">
        <thead>
          <tr>
            <td>Name</td>
            <td>Key</td>
            <td>Status</td>
            <td>Created</td>
            <td style={{ width: '5%' }}></td>
          </tr>
        </thead>
        <tbody>
          {!!nodes.length &&
            nodes.map((businessUnit) => (
              <tr key={businessUnit.key}>
                <td>{businessUnit.name}</td>
                <td className="text-ellipsis-150">{businessUnit.key}</td>
                <td>{businessUnit.status}</td>
                <td className="flex flex-row items-center">
                  <button onClick={() => handleOpenDelete(businessUnit)}>
                    <XIcon className="mt-1 h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {isDeleteModalOpen && (
        <DeleteBusinessUnit
          businessUnit={selectedBusinessUnit}
          onClose={handleCLoseDelete}
          open={isDeleteModalOpen}
          deleteBusinessUnit={handleDeleteBusinessUnit}
        />
      )}
    </div>
  );
};

export default BusinessUnitList;
