import { Account, Address } from '@shared/types/account';
import { Store } from '@shared/types/store/Store';

type CreateBusinessUnitPayload = {
  account: Account;
  store: Store;
};

type UpdateBusinessUnitPayload = {
  name?: string;
  contactEmail?: string;
};

type AddAssociatePayload = {
  email: string;
  roleKeys: string[];
};

type UpdateAssociatePayload = {
  accountId: string;
  roleKeys: string[];
};

type RemoveAssociatePayload = {
  accountId: string;
};

type AddBusinessUnitAddressPayload = {
  address: Address;
};

type UpdateBusinessUnitAddressPayload = {
  address: Address;
};

type RemoveBusinessUnitAddressPayload = {
  address: Address;
};

export {
  type CreateBusinessUnitPayload,
  type UpdateBusinessUnitPayload,
  type AddAssociatePayload,
  type UpdateAssociatePayload,
  type RemoveAssociatePayload,
  type AddBusinessUnitAddressPayload,
  type UpdateBusinessUnitAddressPayload,
  type RemoveBusinessUnitAddressPayload,
};
