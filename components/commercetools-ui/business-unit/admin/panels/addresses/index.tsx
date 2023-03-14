/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';
import { Address } from '@commercetools/frontend-domain-types/account/Address';
import { PencilAltIcon, XIcon } from '@heroicons/react/solid';
import CreateAddress from 'components/commercetools-ui/account/details/modals/createAddress';
import UpdateAddress from 'components/commercetools-ui/account/details/modals/updateAddress';
import { useFormat } from 'helpers/hooks/useFormat';
import { useBusinessUnitStateContext } from 'frontastic/provider/BusinessUnitState';
import { useBusinessUnitDetailsStateContext } from '../../provider';
import DeleteAddress from './modals/DeleteAddress';

const AddressesPanel: React.FC = () => {
  const { formatMessage } = useFormat({ name: 'business-unit' });
  const { addAddress, editAddress, deleteAddress } = useBusinessUnitStateContext();
  const { reloadTree, selectedBusinessUnit: businessUnit } = useBusinessUnitDetailsStateContext();

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<Address>(null);

  const addBusnessUnitAddress = async (address) => {
    await addAddress(businessUnit.key, address);
    reloadTree();
  };
  const editBusnessUnitAddress = async (address): Promise<void> => {
    await editAddress(businessUnit.key, address.id, address);
    reloadTree();
  };
  const deleteBusnessUnitAddress = async (address) => {
    await deleteAddress(businessUnit.key, address.id);
    reloadTree();
  };

  const handleOpenDelete = (address: Address) => {
    setSelectedAddress(address);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDelete = () => {
    setSelectedAddress(null);
    setIsDeleteModalOpen(false);
  };

  const handleOpenEdit = (address: Address) => {
    setSelectedAddress(address);
    setIsEditModalOpen(true);
  };

  const handleCloseEdit = () => {
    setSelectedAddress(null);
    setIsEditModalOpen(false);
  };

  return (
    <>
      <div className="mt-10">
        <div className="mb-10">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-light-100">
            {formatMessage({ id: 'address.list', defaultMessage: 'Address list' })}
          </h3>
          <p className="max-w-2xl text-sm text-gray-500">
            {formatMessage({
              id: 'address.desc',
              defaultMessage: `View or modify addresses for ${businessUnit.name}`,
            })}
          </p>
        </div>
        <table className="table-primary w-full table-fixed border">
          <thead>
            <tr>
              <td>{formatMessage({ id: '', defaultMessage: 'Name' })}</td>
              <td>{formatMessage({ id: '', defaultMessage: 'Address' })}</td>
              <td>{formatMessage({ id: '', defaultMessage: 'City' })}</td>
              <td>{formatMessage({ id: '', defaultMessage: 'Zipcode' })}</td>
              <td>{formatMessage({ id: '', defaultMessage: 'Country' })}</td>
              <td style={{ width: '5%' }}></td>
            </tr>
          </thead>
          <tbody>
            {!!businessUnit.addresses.length &&
              businessUnit.addresses.map((address) => (
                // @ts-ignore
                <tr key={address.id}>
                  <td>{`${address.firstName} ${address.lastName}`}</td>
                  <td>{`${address.streetNumber} ${address.streetName}`}</td>
                  <td>{address.city}</td>
                  <td>{address.postalCode}</td>
                  <td>{address.country}</td>
                  <td className="flex flex-row items-center">
                    <button onClick={() => handleOpenEdit(address)}>
                      <PencilAltIcon className="mt-1 h-4 w-4" />
                    </button>
                    <button onClick={() => handleOpenDelete(address)}>
                      <XIcon className="mt-1 h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            {!businessUnit.addresses.length && (
              <tr>
                <td>{formatMessage({ id: 'no-address', defaultMessage: 'No addresses yet!' })}</td>
              </tr>
            )}
          </tbody>
        </table>
        <button className="button button-primary" onClick={() => setIsCreateModalOpen(true)}>
          Add new address
        </button>
        <CreateAddress
          open={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          addAddress={addBusnessUnitAddress}
        />
        {isEditModalOpen && (
          <UpdateAddress
            open={true}
            defaultValues={selectedAddress}
            updateAddress={editBusnessUnitAddress}
            onClose={handleCloseEdit}
          />
        )}
        {isDeleteModalOpen && (
          <DeleteAddress
            open={true}
            deleteAddress={deleteBusnessUnitAddress}
            address={selectedAddress}
            onClose={handleCloseDelete}
          />
        )}
      </div>
    </>
  );
};

export default AddressesPanel;
