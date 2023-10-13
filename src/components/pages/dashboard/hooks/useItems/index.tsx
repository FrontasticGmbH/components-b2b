import { desktop } from '@/constants/screensizes';
import useMediaQuery from '@/hooks/useMediaQuery';
import useTranslation from '@/providers/I18n/hooks/useTranslation';
import {
  ChatBubbleLeftRightIcon as QuotesIcon,
  ShoppingCartIcon as OrdersIcon,
  BuildingOfficeIcon as CompanyAdminIcon,
  ClipboardDocumentListIcon as PurchaseListsIcon,
  Cog6ToothIcon as SettingsIcon,
  MapPinIcon as AddressesIcon,
} from '@heroicons/react/24/outline';

const useItems = () => {
  const { translate } = useTranslation();

  const [isLargerThanDesktop] = useMediaQuery(desktop);

  const items = {
    dashboard: {
      icon: <></>,
      name: translate('common.dashboard'),
      summary: '',
      href: '',
      disabled: false,
      disabledMessage: '',
      order: 1,
    },
    orders: {
      icon: <OrdersIcon />,
      name: translate('common.orders'),
      summary: translate('dashboard.orders.summary'),
      href: 'orders',
      disabled: false,
      disabledMessage: '',
      order: 2,
    },
    quotes: {
      icon: <QuotesIcon />,
      name: translate('common.quotes'),
      summary: translate('dashboard.quotes.summary'),
      href: 'quotes',
      disabled: false,
      disabledMessage: '',
      order: 3,
    },
    companyAdmin: {
      icon: <CompanyAdminIcon />,
      name: translate('common.company.admin'),
      summary: translate('dashboard.company.admin.summary'),
      href: 'company-admin',
      disabled: !isLargerThanDesktop,
      disabledMessage: translate('dashboard.company.admin.disabled.on.small.screens'),
      order: isLargerThanDesktop ? 4 : 999,
    },
    purchaseLists: {
      icon: <PurchaseListsIcon />,
      name: translate('common.purchase.lists'),
      summary: translate('dashboard.purchase.lists.summary'),
      href: 'purchase-lists',
      disabled: false,
      disabledMessage: '',
      order: 5,
    },
    settings: {
      icon: <SettingsIcon />,
      name: translate('common.settings'),
      summary: translate('dashboard.settings.summary'),
      href: 'settings',
      disabled: false,
      disabledMessage: '',
      order: 6,
    },
    addresses: {
      icon: <AddressesIcon />,
      name: translate('common.addresses'),
      summary: translate('dashboard.addresses.summary'),
      href: 'addresses',
      disabled: false,
      disabledMessage: '',
      order: 7,
    },
  };

  const sidebarItems = [
    items.dashboard,
    items.orders,
    items.quotes,
    items.companyAdmin,
    items.purchaseLists,
    items.settings,
    items.addresses,
  ];

  const cardItems = sidebarItems.slice(1);

  return { sidebarItems, cardItems };
};

export default useItems;
