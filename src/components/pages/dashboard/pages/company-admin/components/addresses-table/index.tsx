import React from 'react';
import Table from '@/components/atoms/table';
import useTranslation from '@/providers/I18n/hooks/useTranslation';
import { PencilSquareIcon as EditIcon, TrashIcon as DeleteIcon } from '@heroicons/react/24/outline';
import Confirmation from '@/components/organisms/confirmation';
import Link from '@/components/atoms/link';
import { CompanyAdminPageProps } from '../../types';

const AddressesTable = ({ onDeleteAddress, addresses = [] }: Partial<CompanyAdminPageProps>) => {
  const { translate } = useTranslation();

  return (
    <Table>
      <Table.Container>
        <Table.Head>
          <Table.Row>
            <Table.Cell>{translate('common.name')}</Table.Cell>
            <Table.Cell>{translate('common.use')}</Table.Cell>
            <Table.Cell>{translate('common.address')}</Table.Cell>
            <Table.Cell>{`${translate('common.city')}, ${translate('common.state')}`}</Table.Cell>
            <Table.Cell>{translate('common.zipCode')}</Table.Cell>
            <Table.Cell>{translate('common.country')}</Table.Cell>
            <Table.Cell />
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {addresses.map(({ id, name, line1, city, state, zip, country, isDefaultBilling, isDefaultShipping }) => (
            <Table.Row key={id}>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>
                {isDefaultBilling || isDefaultShipping ? (
                  <>
                    <span className="text-14">{translate('dashboard.default.for')}</span>{' '}
                    <span className="text-14 font-medium lowercase">
                      {[
                        ...(isDefaultShipping ? [translate('common.shipping')] : []),
                        ...(isDefaultBilling ? [translate('common.billing')] : []),
                      ].join(', ')}
                    </span>
                  </>
                ) : (
                  '-'
                )}
              </Table.Cell>
              <Table.Cell>{line1}</Table.Cell>
              <Table.Cell>
                <span className="text-14">
                  {city}, {state}
                </span>
              </Table.Cell>
              <Table.Cell>{zip}</Table.Cell>
              <Table.Cell>{country}</Table.Cell>
              <Table.Cell>
                <div className="flex items-center justify-end gap-5 text-primary">
                  <Confirmation
                    translations={{
                      title: translate('dashboard.address.delete'),
                      summary: translate('dashboard.address.delete.confirm'),
                      cancel: translate('common.cancel'),
                      confirm: translate('common.delete'),
                    }}
                    onConfirm={async () => onDeleteAddress?.(id)}
                  >
                    <DeleteIcon className="cursor-pointer" width={20} />
                  </Confirmation>
                  <Link href={`?subPath=edit-address&id=${id}`}>
                    <EditIcon className="cursor-pointer" width={20} />
                  </Link>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Container>
    </Table>
  );
};

export default AddressesTable;
