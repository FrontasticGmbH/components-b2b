import { CompanyAdminPageProps } from '../pages/company-admin/types';
import { PurchaseListDetailPageProps } from '../pages/purchase-list-detail/types';
import { PurchaseListsPageProps } from '../pages/purchase-lists/types';
import { QuoteDetailsPageProps } from '../pages/quote-details/types';
import { QuotesPageProps } from '../pages/quotes/types';
import { OrdersPageProps } from '../pages/orders/types';
import { SettingsPageProps } from '../pages/settings/types';
import { OrderDetailsPageProps } from '../pages/order-details/types';

export interface DashboardProps {
  companyAdmin: CompanyAdminPageProps;
  settings: SettingsPageProps;
  purchaseLists: PurchaseListsPageProps;
  purchaseListDetails: PurchaseListDetailPageProps;
  orders: OrdersPageProps;
  orderDetails: OrderDetailsPageProps;
  quotes: QuotesPageProps;
  quoteDetails: QuoteDetailsPageProps;
}
