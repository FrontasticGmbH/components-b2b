import { Store } from '@Types/store/Store';
import { Channel } from '@Types/store/Channel';
import { BusinessUnit } from '@Types/business-unit/BusinessUnit';

export interface Organization {
  businessUnit: BusinessUnit;
  distributionChannel: Channel;
  store: Store;
}
