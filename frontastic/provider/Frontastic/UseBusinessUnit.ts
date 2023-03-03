import { Account } from '@Types/account/Account';
import { Address } from '@Types/account/Address';
import { BusinessUnit } from '@Types/business-unit/BusinessUnit';
import { Order } from '@Types/cart/Order';
import { ChannelResourceIdentifier } from '@Types/channel/channel';

export interface UseBusinessUnit {
  businessUnit: BusinessUnit;
  createBusinessUnit: (account, customer, parentBusinessUnit?: string) => Promise<any>;
  createBusinessUnitAndStore: (account, customer, parentBusinessUnit?: string) => Promise<any>;
  getMyOrganization: () => Promise<any>;
  updateName: (key: string, name: string) => Promise<any>;
  updateBudget: (key: string, value: number) => Promise<any>;
  updateContactEmail: (key: string, email: string) => Promise<any>;
  addAddress: (key: string, address: Omit<Address, 'addressId'>) => Promise<BusinessUnit>;
  editAddress: (key: string, addressId: string, address: Address) => Promise<BusinessUnit>;
  deleteAddress: (key: string, addressId: string) => Promise<BusinessUnit>;
  addUser: (key: string, email: string, roles: string[]) => Promise<BusinessUnit>;
  updateUser: (key: string, id: string, roles: string[]) => Promise<BusinessUnit>;
  removeUser: (key: string, id: string) => Promise<BusinessUnit>;
  getUser: (id: string) => Promise<Account>;
  getOrders: (businessUnit: BusinessUnit) => Promise<Order[]>;
  getAllOrders: (businessUnit: BusinessUnit) => Promise<Order[]>;
  setMyBusinessUnit: (businessUnitKey: string) => Promise<BusinessUnit>;
  removeBusinessUnit: (businessUnitKey: string) => Promise<BusinessUnit>;
  setMyStore: (storeKey: string) => Promise<ChannelResourceIdentifier>;
}
