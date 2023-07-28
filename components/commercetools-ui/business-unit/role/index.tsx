import React from 'react';
import { Organization } from 'types/Organization';
import { useAccount } from 'frontastic';

type Props = {
  organization: Organization;
};

const BusinessUnitRole: React.FC<Props> = ({ organization }) => {
  const { account } = useAccount();

  if (!account || !organization?.businessUnit) {
    return null;
  }
  const roles = organization?.businessUnit?.associates
    ?.find((associate) => associate?.accountId === account.accountId)
    ?.roles?.map((role) => role.key);

  return <span className="px-2 text-sm font-light">{!!roles?.length ? `(${roles.join(', ')})` : 'No role!'}</span>;
};

export default BusinessUnitRole;
