import React, { useEffect, useState } from 'react';
import { XIcon } from '@heroicons/react/outline';
import { Workflow } from '@Types/workflow/Workflow';
import { useBusinessUnitStateContext } from 'frontastic/provider/BusinessUnitState';
import { useBusinessUnitDetailsStateContext } from '../../provider';
import NewWorkflowModal from './create';
import DeleteWorkflowModal from './delete';

const WorkflowRules = () => {
  const { selectedBusinessUnit, reloadTree } = useBusinessUnitDetailsStateContext();
  const { updateWorkflow } = useBusinessUnitStateContext();
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [isNewWorkflowModalOpen, setIsNewWorkflowModalOpen] = useState(false);
  const [isDeleteWorkflowModalOpen, setIsDeleteWorkflowModalOpen] = useState(false);
  const [selectedWorkflow, setSelectedWorkflow] = useState<string>();

  const handleNewWorkflow = async (ast: any) => {
    const newWorkflows: Workflow[] = [
      ...workflows,
      {
        id: new Date().toISOString(),
        ast,
      },
    ];
    await updateWorkflow(selectedBusinessUnit, JSON.stringify(newWorkflows));
    reloadTree();
  };

  const handleOpenDelete = (id: string) => {
    setSelectedWorkflow(id);
    setIsDeleteWorkflowModalOpen(true);
  };

  const handleDeleteWorkflow = async () => {
    const newWorkflows: Workflow[] = workflows.filter((workflow) => workflow.id !== selectedWorkflow);
    await updateWorkflow(selectedBusinessUnit, JSON.stringify(newWorkflows));
    reloadTree();
  };

  const handleCloseDelete = () => {
    setSelectedWorkflow(null);
    setIsDeleteWorkflowModalOpen(false);
  };

  useEffect(() => {
    if (selectedBusinessUnit) {
      setWorkflows([]);
    }
  }, [selectedBusinessUnit]);
  return (
    <div className="mt-10">
      <div className="flex flex-row justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-light-100">Workflows</h3>
          <p className="max-w-2xl text-sm text-gray-500">You can add or modify workflows.</p>
        </div>
        <button type="button" onClick={() => setIsNewWorkflowModalOpen(true)} className="button button-primary">
          Add workflow
        </button>
      </div>

      <div className="divide-y divide-gray-200"></div>
      <div>
        <table className="table-primary mt-8 w-full table-fixed border">
          <thead>
            <tr>
              <td>Expression</td>
              <td style={{ width: '5%' }}></td>
            </tr>
          </thead>
          <tbody>
            {!!workflows.length &&
              workflows.map((workflow) => (
                <tr key={workflow.id}>
                  <td>{workflow?.ast?.text}</td>
                  <td>
                    <button onClick={() => handleOpenDelete(workflow.id)}>
                      <XIcon className="mt-1 h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            {!workflows.length && (
              <tr className="mx-auto">
                <span>No workflows</span>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {isNewWorkflowModalOpen && (
        <NewWorkflowModal
          onClose={() => setIsNewWorkflowModalOpen(false)}
          open={isNewWorkflowModalOpen}
          onSave={handleNewWorkflow}
        />
      )}
      {isDeleteWorkflowModalOpen && (
        <DeleteWorkflowModal
          onClose={handleCloseDelete}
          open={isDeleteWorkflowModalOpen}
          onSave={handleDeleteWorkflow}
        />
      )}
    </div>
  );
};

export default WorkflowRules;
