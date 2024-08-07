import { SortAttribute } from '@/types/entity/sort-attribute';
import { ApprovalFlowStatus, ApprovalRuleStatus } from '@shared/types/business-unit';

type GetBusinessUnitQuery = {
  businessUnitKey: string;
};

type GetBusinessUnitsQuery = {
  expandStores?: boolean;
};

type UpdateBusinessUnitQuery = {
  businessUnitKey: string;
};

type GetAssociateQuery = {
  businessUnitKey: string;
};

type AddAssociateQuery = {
  businessUnitKey: string;
};

type UpdateAssociateQuery = {
  businessUnitKey: string;
};

type RemoveAssociateQuery = {
  businessUnitKey: string;
};

type GetBusinessUnitOrdersQuery = {
  businessUnitKey: string;
};

type AddBusinessUnitAddressQuery = {
  businessUnitKey: string;
};

type UpdateBusinessUnitAddressQuery = {
  businessUnitKey: string;
};

type RemoveBusinessUnitAddressQuery = {
  businessUnitKey: string;
};

type SetBusinessUnitAndStoreKeysQuery = {
  businessUnitKey: string;
  storeKey: string;
};

type CreateApprovalRuleQuery = {
  businessUnitKey: string;
  storeKey: string;
};

type QueryApprovalRulesQuery = {
  businessUnitKey: string;
  limit?: number;
  cursor?: string;
  sortAttributes?: SortAttribute[];
  approvalRuleStatus?: ApprovalRuleStatus[];
  approvalRuleIds: string[];
};

type UpdateApprovalRuleQuery = {
  businessUnitKey: string;
};

type QueryApprovalFlowsQuery = {
  businessUnitKey: string;
  limit?: number;
  cursor?: string;
  sortAttributes?: SortAttribute[];
  approvalFlowStatus?: ApprovalFlowStatus[];
  approvalFlowIds: string[];
};

type ApproveApprovalFlowQuery = {
  approvalFlowId: string;
};

type RejectApprovalFlowQuery = {
  approvalFlowId: string;
  reason: string;
};

export {
  type GetBusinessUnitQuery,
  type GetBusinessUnitsQuery,
  type UpdateBusinessUnitQuery,
  type GetAssociateQuery,
  type AddAssociateQuery,
  type UpdateAssociateQuery,
  type RemoveAssociateQuery,
  type GetBusinessUnitOrdersQuery,
  type AddBusinessUnitAddressQuery,
  type UpdateBusinessUnitAddressQuery,
  type RemoveBusinessUnitAddressQuery,
  type SetBusinessUnitAndStoreKeysQuery,
  type CreateApprovalRuleQuery,
  type QueryApprovalRulesQuery,
  type UpdateApprovalRuleQuery,
  type QueryApprovalFlowsQuery,
  type ApproveApprovalFlowQuery,
  type RejectApprovalFlowQuery,
};
