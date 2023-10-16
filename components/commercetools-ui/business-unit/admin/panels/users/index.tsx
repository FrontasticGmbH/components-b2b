import React, { useState } from 'react';
import { PencilAltIcon, XIcon } from '@heroicons/react/solid';
import { Associate } from '@Types/business-unit/Associate';
import AddUser from 'components/commercetools-ui/business-unit/admin/panels/users/modals/add-user';
import { useFormat } from 'helpers/hooks/useFormat';
import { useBusinessUnitStateContext } from 'frontastic/provider/BusinessUnitState';
import { useBusinessUnitDetailsStateContext } from '../../provider';
import CreateUser from './modals/create-user';
import DeleteUser from './modals/delete-user';
import UpdateUser from './modals/update-user';

const UsersPanel = () => {
  const { formatMessage } = useFormat({ name: 'account' });
  const { selectedBusinessUnit: businessUnit, reloadTree } = useBusinessUnitDetailsStateContext();
  const { addUser, removeUser, updateUser } = useBusinessUnitStateContext();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [selectedAssociate, setSelectedAssociate] = useState<Associate>(null);

  const handleAddUser = async (email: string, roles: string[]) => {
    await addUser(businessUnit.key, email, roles);
    reloadTree();
  };

  const handleEditUser = async (id: string, roles: string[]) => {
    await updateUser(businessUnit.key, id, roles);
    reloadTree();
  };

  const handleOpenEdit = (associate: Associate) => {
    setSelectedAssociate(associate);
    setIsEditModalOpen(true);
  };

  const handleCloseEdit = () => {
    setSelectedAssociate(null);
    setIsEditModalOpen(false);
  };

  const handleOpenDelete = (associate: Associate) => {
    setSelectedAssociate(associate);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDelete = () => {
    setSelectedAssociate(null);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteUser = async (id: string) => {
    await removeUser(businessUnit.key, id);
    reloadTree();
  };

  return (
    <>
      <div className="mt-10">
        <div className="mb-10">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-light-100">Associates</h3>
          <p className="max-w-2xl text-sm text-gray-500">Add, remove or modify associates</p>
        </div>
        <table className="table-primary w-full table-fixed border">
          <thead>
            <tr>
              <td>{formatMessage({ id: '', defaultMessage: 'Name' })}</td>
              <td>{formatMessage({ id: '', defaultMessage: 'Email' })}</td>
              <td>{formatMessage({ id: '', defaultMessage: 'Role(s)' })}</td>
              <td style={{ width: '5%' }}></td>
            </tr>
          </thead>
          <tbody>
            {!!businessUnit.associates.length &&
              businessUnit.associates.map((associate) => (
                <tr key={associate.accountId}>
                  <td>{`${associate.firstName} ${associate.lastName}`}</td>
                  <td className="text-ellipsis-150">{associate.email}</td>
                  <td>{associate.roles?.map((role) => role?.key).join(', ')}</td>
                  <td className="flex flex-row items-center">
                    <button onClick={() => handleOpenEdit(associate)}>
                      <PencilAltIcon className="mt-1 h-4 w-4" />
                    </button>
                    <button onClick={() => handleOpenDelete(associate)}>
                      <XIcon className="mt-1 h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            {!businessUnit.associates.length && (
              <tr>
                <td>{formatMessage({ id: 'no-associate', defaultMessage: 'No associates yet!' })}</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="flex flex-row justify-between">
          <button className="button button-primary" onClick={() => setIsAddModalOpen(true)}>
            Assign an associate
          </button>
          <button className="button button-primary" onClick={() => setIsCreateModalOpen(true)}>
            Create an associate
          </button>
        </div>
      </div>
      {isAddModalOpen && (
        <AddUser onClose={() => setIsAddModalOpen(false)} open={isAddModalOpen} addUser={handleAddUser} />
      )}
      {isDeleteModalOpen && (
        <DeleteUser
          onClose={handleCloseDelete}
          open={isDeleteModalOpen}
          deleteUser={handleDeleteUser}
          associate={selectedAssociate}
        />
      )}
      {isEditModalOpen && (
        <UpdateUser
          onClose={handleCloseEdit}
          open={isEditModalOpen}
          updateUser={handleEditUser}
          associate={selectedAssociate}
        />
      )}
      {isCreateModalOpen && (
        <CreateUser onClose={() => setIsCreateModalOpen(false)} open={isCreateModalOpen} addUser={handleAddUser} />
      )}
    </>
  );
};

export default UsersPanel;
