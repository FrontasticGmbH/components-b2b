import { Address } from '@Types/account/Address';
import { BusinessUnit } from '@Types/business-unit/BusinessUnit';
import { Order } from '@Types/cart/Order';
import { Channel } from '@Types/store/Channel';
import { AssociateRole } from '@Types/business-unit/Associate';

export interface UseBusinessUnit {
  businessUnit: BusinessUnit;
  createBusinessUnit: (account, customer, parentBusinessUnit?: string) => Promise<any>;
  getMyOrganization: () => Promise<any>;
  updateName: (key: string, name: string) => Promise<any>;
  updateContactEmail: (key: string, email: string) => Promise<any>;
  addAddress: (key: string, address: Omit<Address, 'addressId'>) => Promise<BusinessUnit>;
  editAddress: (key: string, addressId: string, address: Address) => Promise<BusinessUnit>;
  deleteAddress: (key: string, addressId: string) => Promise<BusinessUnit>;
  addUser: (key: string, email: string, roles: string[]) => Promise<BusinessUnit>;
  updateUser: (key: string, id: string, roles: string[]) => Promise<BusinessUnit>;
  removeUser: (key: string, id: string) => Promise<BusinessUnit>;
  getOrders: (businessUnit: BusinessUnit) => Promise<Order[]>;
  getSuperUserBusinessUnits: (email: string) => Promise<BusinessUnit[]>;
  setMyBusinessUnit: (businessUnitKey: string) => Promise<BusinessUnit>;
  removeBusinessUnit: (businessUnitKey: string) => Promise<BusinessUnit>;
  setMyStore: (storeKey: string) => Promise<Channel>;
  associateRoles: AssociateRole[];
}
