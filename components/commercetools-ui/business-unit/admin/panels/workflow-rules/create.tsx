/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { Fragment, useState } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { WorkflowItem } from '@Types/workflow/Workflow';
// @ts-ignore
import { UIPredicate } from 'ui-predicate-react';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
interface Props {
  onClose: () => void;
  onSave: (ast: any) => Promise<void>;
  open?: boolean;
}

const schema = {
  data: {
    logicalType_id: 'and',
    predicates: [
      {
        target_id: 'cart.directDiscounts',
        operator_id: '>',
        argument: 50,
      },
    ],
  },
  columns: {
    targets: [
      {
        target_id: 'cart.sum.centAmount',
        label: 'Order Total in USD',
        type_id: 'int',
      },
      {
        target_id: 'cart.directDiscounts',
        label: 'Direct discounts',
        type_id: 'int',
      },
      {
        target_id: '$sum(cart.lineItems.count)',
        label: 'LineItem count',
        type_id: 'int',
      },
      {
        target_id: 'cart.lineItems.variant.sku',
        label: 'Order contains SKU',
        type_id: '$sku',
      },
    ],
    // besides array list names, everything else follows convention https://github.com/FGRibreau/sql-convention
    operators: [
      {
        operator_id: '<',
        label: '<',
        argumentType_id: 'number',
      },
      {
        operator_id: '=',
        label: '=',
        argumentType_id: 'number',
      },
      {
        operator_id: '>',
        label: '>',
        argumentType_id: 'number',
      },
      {
        operator_id: '$exists',
        label: 'Is',
        argumentType_id: 'boolean',
      },
      {
        operator_id: 'found',
        label: 'found',
        argumentType_id: 'smallString',
      },
    ],
    types: [
      {
        type_id: 'int',
        operator_ids: ['<', '=', '>'],
      },
      {
        type_id: 'boolean',
        operator_ids: ['$exists'],
      },
      {
        type_id: '$sku',
        operator_ids: ['found'],
      },
    ],
    logicalTypes: [
      {
        logicalType_id: 'and',
        label: 'AND',
      },
    ],
    argumentTypes: [
      {
        argumentType_id: 'smallString',
        component: function TextArgument({ value, onChange }) {
          return <input type="text" value={value || ''} onChange={(e) => onChange(e.target.value)} />;
        },
      },
      {
        argumentType_id: 'number',
        component: function TextArgument({ value, onChange }) {
          return <input type="text" value={value || ''} onChange={(e) => onChange(e.target.value)} />;
        },
      },
      {
        argumentType_id: 'boolean',
        component: function TextArgument({ value, onChange }) {
          return (
            <label className="p-4">
              found
              <input
                type="checkbox"
                className="input input-checkbox ml-2"
                value={value || ''}
                onChange={(e) => onChange(e.target.checked)}
              />
            </label>
          );
        },
      },
    ],
  },
};

const findLabel = (target_id) => {
  const f = schema.columns.targets.find((item) => item.target_id === target_id);
  return f ? f.label : target_id;
};

const NewWorkflowModal: React.FC<Props> = ({ onClose, onSave, open }) => {
  const [ast, setAST] = useState<WorkflowItem>();
  const [isLoading, setIsLoading] = useState(false);
  const { data, columns } = schema;

  const handleSave = () => {
    setIsLoading(true);
    onSave(ast)
      .catch((e) => console.error(e))
      .finally(() => {
        setIsLoading(false);
        onClose();
      });
  };

  const handleUpdate = (ass: any) => {
    if (ass.predicates?.length) {
      const newAst = {
        op: ass.logicalType_id,
        expression: ass.predicates
          .map((predicate) => {
            if (predicate.target_id === 'cart.sum.centAmount') {
              return `${predicate.target_id} ${predicate.operator_id} ${predicate.argument * 100}`;
            }
            if (predicate.target_id === '$sum(cart.lineItems.count)') {
              return `${predicate.target_id} ${predicate.operator_id} ${predicate.argument}`;
            }
            if (predicate.target_id === 'cart.lineItems.variant.sku') {
              return `"${predicate.argument}" in ${predicate.target_id}`;
            }
          })
          .join(' and '),
        text: ass.predicates
          .map((predicate) => `${findLabel(predicate.target_id)} ${predicate.operator_id} ${predicate.argument}`)
          .join(' & '),
      };

      setAST(newAst);
    }
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog className={`default fixed inset-0 z-10 overflow-y-auto`} onClose={onClose}>
        <Transition.Root>
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-left sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="absolute inset-0" onClick={onClose}>
                {/* eslint-disable */}
                <div
                  className="absolute top-1/2 left-1/2 max-h-[60vh] w-[40%] max-w-[1200px] -translate-x-1/2 -translate-y-1/2 overflow-auto bg-white py-8 px-4 dark:bg-primary-200 sm:px-6 lg:py-12 lg:px-8"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative mx-auto">
                    <div className="mb-2 text-center">
                      <h2 className="mb-== text-3xl font-extrabold tracking-tight text-gray-900 dark:text-light-100 sm:text-4xl">
                        New Workflow
                      </h2>
                      <p>You can create a new workflow using the provided rules</p>
                    </div>
                    <form className="py-8">
                      <UIPredicate data={data} columns={columns} onChange={handleUpdate} />
                      <div className="mt-8 flex flex-row justify-between px-8">
                        <button className="button button-secondary" onClick={onClose} type="button">
                          Cancel
                        </button>
                        <button
                          className="button button-primary flex flex-row items-center"
                          onClick={handleSave}
                          type="button"
                        >
                          <span>Save</span>
                          {isLoading && <LoadingIcon className="ml-2 h-4 w-4 animate-spin" />}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Transition.Root>
      </Dialog>
    </Transition.Root>
  );
};

export default NewWorkflowModal;
