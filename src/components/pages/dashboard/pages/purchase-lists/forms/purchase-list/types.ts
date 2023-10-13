import { PurchaseListsPageProps } from '../../types';

export interface Props extends PurchaseListsPageProps {
  onCancel?: () => void;
  onSave?: () => void;
}
