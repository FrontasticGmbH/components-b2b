import { useMemo } from 'react';
import { DashboardProps } from '../../types';
import DashboardPage from '../../pages/dashboard';
import CompanyAdminPage from '../../pages/company-admin';
import GeneralInfoForm from '../../pages/company-admin/forms/general-info';
import AddressForm from '../../pages/company-admin/forms/address';
import AssociateForm from '../../pages/company-admin/forms/associate';
import BusinessUnitForm from '../../pages/company-admin/forms/business-unit';
import SettingsPage from '../../pages/settings';
import PersonalInfoForm from '../../pages/settings/forms/personal-info';
import AddressesPage from '../../pages/addresses';
import PurchaseListsPage from '../../pages/purchase-lists';
import PurchaseListForm from '../../pages/purchase-lists/forms/purchase-list';
import PurchaseListDetailPage from '../../pages/purchase-list-detail';
import QuotesPage from '../../pages/quotes';
import QuoteDetailsPage from '../../pages/quote-details';
import OrdersPage from '../../pages/orders';
import OrderDetailsPage from '../../pages/order-details';

const useActivePage = ({
  hash,
  companyAdmin,
  settings,
  purchaseLists,
  purchaseListDetails,
  orders,
  orderDetails,
  quotes,
  quoteDetails,
}: DashboardProps & { hash: string }) => {
  const ActivePage = useMemo(() => {
    const pages = {
      '': {
        title: 'common.dashboard',
        Component: <DashboardPage />,
      },
      'company-admin': {
        title: 'common.company.admin',
        Component: <CompanyAdminPage {...companyAdmin} />,
      },
      'edit-general-info': {
        title: 'dashboard.general.info.edit',
        Component: <GeneralInfoForm {...companyAdmin} />,
      },
      'add-address': {
        title: 'dashboard.address.add',
        Component: <AddressForm {...companyAdmin} hash="company-admin" />,
      },
      'edit-address': {
        title: 'dashboard.address.edit',
        Component: <AddressForm {...companyAdmin} hash="company-admin" />,
      },
      'account-add-address': {
        title: 'dashboard.address.add',
        Component: (
          <AddressForm
            {...companyAdmin}
            addresses={companyAdmin.accountAddresses}
            onAddAddress={companyAdmin.onAddAccountAddress}
            hash="addresses"
          />
        ),
      },
      'account-edit-address': {
        title: 'dashboard.address.edit',
        Component: (
          <AddressForm
            {...companyAdmin}
            addresses={companyAdmin.accountAddresses}
            onUpdateAddress={companyAdmin.onUpdateAccountAddress}
            hash="addresses"
          />
        ),
      },
      'add-associate': {
        title: 'dashboard.associate.add',
        Component: <AssociateForm {...companyAdmin} />,
      },
      'edit-associate': {
        title: 'dashboard.associate.edit',
        Component: <AssociateForm {...companyAdmin} />,
      },
      'add-business-unit': {
        title: 'dashboard.business.unit.add',
        Component: <BusinessUnitForm {...companyAdmin} />,
      },
      'edit-business-unit': {
        title: 'dashboard.business.unit.edit',
        Component: <BusinessUnitForm {...companyAdmin} />,
      },
      settings: {
        title: 'account.settings.security',
        Component: <SettingsPage {...settings} />,
      },
      'edit-personal-info': {
        title: 'dashboard.personal.info.edit',
        Component: <PersonalInfoForm {...settings} />,
      },
      addresses: {
        title: 'common.addresses',
        Component: <AddressesPage {...companyAdmin} />,
      },
      'purchase-lists': {
        title: 'common.purchase.lists',
        Component: <PurchaseListsPage {...purchaseLists} />,
      },
      'add-purchase-list': {
        title: 'dashboard.purchase.list.add',
        Component: <PurchaseListForm {...purchaseLists} />,
      },
      'view-purchase-list': {
        title: '',
        Component: <PurchaseListDetailPage {...purchaseListDetails} />,
      },
      orders: {
        title: '',
        Component: <OrdersPage {...orders} />,
      },
      'orders-details': {
        title: '',
        Component: <OrderDetailsPage {...orderDetails} />,
      },
      quotes: {
        title: '',
        Component: <QuotesPage {...quotes} />,
      },
      'quotes-details': {
        title: 'dashboard.quote.details',
        Component: <QuoteDetailsPage {...quoteDetails} />,
      },
    };

    return pages[hash as keyof typeof pages];
  }, [companyAdmin, settings, purchaseLists, purchaseListDetails, orders, orderDetails, quotes, quoteDetails, hash]);

  return ActivePage;
};

export default useActivePage;
