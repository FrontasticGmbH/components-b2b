import { Store } from '@Types/store/Store';
import { ChannelResourceIdentifier } from '@Types/channel/channel';
import { BusinessUnit } from '@Types/business-unit/BusinessUnit';

export interface Organization {
  businessUnit: BusinessUnit;
  distributionChannel: ChannelResourceIdentifier;
  store: Store;
  superUserBusinessUnitKey?: string;
}
