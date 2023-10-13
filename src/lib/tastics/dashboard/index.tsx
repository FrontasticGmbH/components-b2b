'use client';

import Dashboard from '@/components/pages/dashboard';
import countries from '@/static/countries.json';
import useAccount from '@/lib/hooks/useAccount';
import useBusinessUnits from '@/lib/hooks/useBusinessUnits';
import { mapAddress, mapCoCoAddress } from '@/utils/mappers/map-address';
import { mapAssociate } from '@/utils/mappers/map-associate';
import { mapBusinessUnit } from '@/utils/mappers/map-business-unit';
import useAccountRoles from '@/lib/hooks/useAccountRoles';
import usePurchaseLists from '@/lib/hooks/usePurchaseLists';
import { mapPurchaseList } from '@/utils/mappers/map-purchase-list';
import useStores from '@/lib/hooks/useStores';
import useBusinessUnit from './hooks/useBusinessUnit';
import useStore from './hooks/useStore';
import useRole from './hooks/useRole';
import useSearch from './hooks/useSearch';

const DashboardTastic = () => {
  const { activeBusinessUnit, onBusinessUnitSelected, businessUnits } = useBusinessUnit();

  const { addBusinessUnit, removeBusinessUnit, addAssociate, updateAssociate, removeAssociate } = useBusinessUnits();

  const { storeOptions, onStoreSelected, selectedStore } = useStore({ activeBusinessUnit });

  const { defaultStore } = useStores();

  const { roleOptions } = useRole();

  const {
    account,
    updateAccount,
    changePassword,
    addAddress: addAccountAddress,
    updateAddress: updateAccountAddress,
    removeAddress: removeAccountAddress,
    deleteAccount,
  } = useAccount();

  const { role, isAdmin } = useAccountRoles();

  const { purchaseLists, createPurchaseList, updateWishlist } = usePurchaseLists();

  const { searchedAddresses, searchedAccountAddresses, searchedAssociates, searchedBusinessUnits, handleSearch } =
    useSearch({
      addresses: activeBusinessUnit?.addresses ?? [],
      accountAddresses: account?.addresses ?? [],
      associates: activeBusinessUnit?.associates ?? [],
      businessUnits: businessUnits ?? [],
    });

  return (
    <Dashboard
      companyAdmin={{
        companyName: account?.companyName,
        storeName: selectedStore?.name,
        businessUnitOptions: businessUnits.map(({ name, key }) => ({ name: name ?? key ?? '', value: key ?? '' })),
        initialBusinessUnit: activeBusinessUnit?.key,
        onBusinessUnitChange: onBusinessUnitSelected,
        storeOptions,
        onStoreChange: onStoreSelected,
        countryOptions: countries.map(({ name, code, states }) => ({
          name,
          value: code,
          states: states.map(({ name, code }) => ({ name, value: code })),
        })),
        roleOptions,
        generalInformation: activeBusinessUnit
          ? [
              {
                id: activeBusinessUnit.businessUnitId ?? '',
                key: activeBusinessUnit.key ?? '',
                name: activeBusinessUnit.name ?? '',
                email: activeBusinessUnit.contactEmail ?? '',
              },
            ]
          : [],
        addresses: searchedAddresses.map(mapAddress),
        onSearchAddresses: handleSearch('addresses'),
        accountAddresses: searchedAccountAddresses.map(mapAddress),
        onSearchAccountAddresses: handleSearch('accountAddresses'),
        onAddAccountAddress: async (address) => {
          await addAccountAddress(mapCoCoAddress(address));
        },
        onUpdateAccountAddress: async (address) => {
          await updateAccountAddress(mapCoCoAddress(address));
        },
        onDeleteAccountAddress: async (addressId) => {
          await removeAccountAddress(addressId);
        },
        associates: searchedAssociates.map(mapAssociate),
        onSearchAssociates: handleSearch('associates'),
        onAddAssociate: async (associate) => {
          await addAssociate({ ...associate, businessUnit: activeBusinessUnit?.key as string });
        },
        onUpdateAssociate: async (associate) => {
          await updateAssociate({ ...associate, businessUnit: activeBusinessUnit?.key as string });
        },
        onDeleteAssociate: async (id) => {
          await removeAssociate({ id, businessUnit: activeBusinessUnit?.key as string });
        },
        businessUnits: searchedBusinessUnits.map(mapBusinessUnit),
        onSearchBusinessUnits: handleSearch('businessUnits'),
        onAddBusinessUnit: async ({ email, name }) => {
          if (!selectedStore) return;

          await addBusinessUnit({ account: { ...account, companyName: name, email }, store: selectedStore });
        },
        onDeleteBusinessUnit: async (id) => {
          const target = businessUnits.find((businessUnit) => businessUnit.businessUnitId === id);

          if (target) await removeBusinessUnit(target.key as string);
        },
        canAddBusinessUnit: !!selectedStore,
      }}
      settings={{
        account: {
          firstName: account?.firstName ?? '',
          lastName: account?.lastName ?? '',
          email: account?.email ?? '',
          businessUnit: businessUnits?.[0]?.key ?? '',
          role: role?.name ?? role?.key ?? '',
        },
        businessUnitOptions: businessUnits.map(({ name, key }) => ({ name: name ?? key ?? '', value: key ?? '' })),
        roleOptions,
        isAdmin,
        onUpdateAccount: async ({ businessUnit, role, ...accountPayload }) => {
          await updateAccount(accountPayload);
          await removeAssociate({ id: account?.accountId, businessUnit: businessUnit ?? '' });
          await addAssociate({ email: account?.email, role, businessUnit: businessUnit ?? '' });
        },
        onChangePassword: async (oldPassword, newPassword) => {
          await changePassword(oldPassword, newPassword);
        },
        onDeleteAccount: async (password: string) => {
          const res = await deleteAccount(password);
          return res.success;
        },
      }}
      purchaseLists={{
        purchaseLists: purchaseLists.map(mapPurchaseList),
        onAddPurchaseList: async (purchaseList) => {
          if (!defaultStore) return;

          await createPurchaseList({ ...purchaseList, store: defaultStore });
        },
      }}
      purchaseListDetails={{
        purchaseLists: purchaseLists.map(mapPurchaseList),
        onUpdatePurchaseList: async ({ id, name, description }) => {
          await updateWishlist({ wishlistId: id, name, description });
        },
      }}
      orders={{
        orders: [
          {
            id: '2353 2245 6631',
            status: 'confirmed',
            creationDate: '11/03/2023',
            businessUnit: 'Greenville',
            subtotal: 5225.66,
            total: 5225.66,
            currency: 'USD',
            items: [],
          },
          {
            id: '2353 2245 6632',
            status: 'returned',
            creationDate: '11/03/2023',
            businessUnit: 'Greenville',
            subtotal: 5225.66,
            total: 5225.66,
            currency: 'USD',
            items: [],
          },
          {
            id: '2353 2245 6633',
            status: 'delivered',
            creationDate: '11/03/2023',
            businessUnit: 'Greenville',
            subtotal: 5225.66,
            total: 5225.66,
            currency: 'USD',
            items: [],
          },
          {
            id: '2353 2245 6634',
            status: 'cancelled',
            creationDate: '11/03/2023',
            businessUnit: 'Greenville',
            subtotal: 5225.66,
            total: 5225.66,
            currency: 'USD',
            items: [],
          },
          {
            id: '2353 2245 6635',
            status: 'delivered',
            creationDate: '11/03/2023',
            businessUnit: 'Greenville',
            subtotal: 5225.66,
            total: 5225.66,
            currency: 'USD',
            items: [],
          },
          {
            id: '2353 2245 6636',
            status: 'returned',
            creationDate: '11/03/2023',
            businessUnit: 'Greenville',
            subtotal: 5225.66,
            total: 5225.66,
            currency: 'USD',
            items: [],
          },
          {
            id: '2353 2245 6637',
            status: 'cancelled',
            creationDate: '11/03/2023',
            businessUnit: 'Greenville',
            subtotal: 5225.66,
            total: 5225.66,
            currency: 'USD',
            items: [],
          },
          {
            id: '2353 2245 6638',
            status: 'confirmed',
            creationDate: '11/03/2023',
            businessUnit: 'Greenville',
            subtotal: 5225.66,
            total: 5225.66,
            currency: 'USD',
            items: [],
          },
        ],
        filters: {},
        page: 0,
        totalItems: 100,
        limit: 25,
        sortOptions: [
          { name: 'Date', value: 'date' },
          { name: 'Status', value: 'status' },
          { name: 'ID', value: 'id' },
          { name: 'Business Unit', value: 'businessUnit' },
          { name: 'Total', value: 'total' },
        ],
        statusOptions: [
          { name: 'Confirmed', value: 'confirmed', count: 0 },
          { name: 'Delivered', value: 'delivered', count: 0 },
          { name: 'Cancelled', value: 'cancelled', count: 0 },
          { name: 'Returned', value: 'returned', count: 0 },
        ],
      }}
      orderDetails={{
        order: {
          id: '2353 2245 6635',
          status: 'delivered',
          creationDate: '11/03/2023',
          businessUnit: 'Greenville',
          subtotal: 5225.66 - 23.999,
          shippingCosts: 23.999,
          total: 5225.66,
          taxCosts: 552.25,
          currency: 'USD',
          items: [
            {
              id: '1',
              image: '/sb-assets/brake-pad.png',
              name: 'Brake Pad Set, disc brake DELPHI LP20',
              sku: 'Bd10T789',
              quantity: 200,
              price: 49.55,
              currency: 'USD',
            },
            {
              id: '2',
              image: '/sb-assets/brake-pad.png',
              name: 'Brake Pad Set, disc brake DELPHI LP20',
              sku: 'Bh005H789',
              quantity: 2,
              price: 549.55,
              currency: 'USD',
            },
            {
              id: '3',
              image: '/sb-assets/brake-pad.png',
              name: 'Brake Pad Set, disc brake DELPHI LP20',
              sku: 'Bh005H789',
              quantity: 22,
              price: 49.55,
              currency: 'USD',
            },
            {
              id: '4',
              image: '/sb-assets/brake-pad.png',
              name: 'Brake Pad Set, disc brake DELPHI LP20',
              sku: 'Bd10T789',
              quantity: 80,
              price: 49.55,
              currency: 'USD',
            },
            {
              id: '5',
              image: '/sb-assets/brake-pad.png',
              name: 'Brake Pad Set, disc brake DELPHI LP20',
              sku: 'Bb006P123',
              quantity: 19,
              price: 49.55,
              currency: 'USD',
            },
          ],
          shippingAddress: 'commercetools GmbH \n315 Bockele Rd\nGreenville, LU\n314 23',
          billingAddress: 'commercetools GmbH \n315 Bockele Rd\nGreenville, LU\n314 23',
          shippingMethod: 'UPS Standard \nEst. 18/01/2023',
          paymentMethod: 'VISA **4166',
        },
      }}
      quotes={{
        quotes: [
          {
            id: '2353 2245 6631',
            status: 'accepted',
            creationDate: '11/03/2023',
            businessUnit: 'Greenville',
            subtotal: 5225.66,
            total: 5225.66,
            currency: 'USD',
            items: [],
            activity: [],
          },
          {
            id: '2353 2245 6632',
            status: 'renegotiating',
            creationDate: '11/03/2023',
            businessUnit: 'Greenville',
            subtotal: 5225.66,
            total: 5225.66,
            currency: 'USD',
            items: [],
            activity: [],
          },
          {
            id: '2353 2245 6633',
            status: 'inprogress',
            creationDate: '11/03/2023',
            businessUnit: 'Greenville',
            subtotal: 5225.66,
            total: 5225.66,
            currency: 'USD',
            items: [],
            activity: [],
            isNew: true,
          },
          {
            id: '2353 2245 6634',
            status: 'withdrawn',
            creationDate: '11/03/2023',
            businessUnit: 'Greenville',
            subtotal: 5225.66,
            total: 5225.66,
            currency: 'USD',
            items: [],
            activity: [],
          },
          {
            id: '2353 2245 6635',
            status: 'inprogress',
            creationDate: '11/03/2023',
            businessUnit: 'Greenville',
            subtotal: 5225.66,
            total: 5225.66,
            currency: 'USD',
            items: [],
            activity: [],
            isNew: true,
          },
          {
            id: '2353 2245 6636',
            status: 'declined',
            creationDate: '11/03/2023',
            businessUnit: 'Greenville',
            subtotal: 5225.66,
            total: 5225.66,
            currency: 'USD',
            items: [],
            activity: [],
          },
        ],
        quoteRequests: [
          {
            id: '2353 2245 6631',
            status: 'accepted',
            creationDate: '11/03/2023',
            businessUnit: 'Greenville',
            subtotal: 5225.66,
            total: 5225.66,
            currency: 'USD',
            items: [],
            activity: [],
          },
          {
            id: '2353 2245 6632',
            status: 'cancelled',
            creationDate: '11/03/2023',
            businessUnit: 'Greenville',
            subtotal: 5225.66,
            total: 5225.66,
            currency: 'USD',
            items: [],
            activity: [],
          },
          {
            id: '2353 2245 6633',
            status: 'submitted',
            creationDate: '11/03/2023',
            businessUnit: 'Greenville',
            subtotal: 5225.66,
            total: 5225.66,
            currency: 'USD',
            items: [],
            activity: [],
            isNew: true,
          },
          {
            id: '2353 2245 6634',
            status: 'rejected',
            creationDate: '11/03/2023',
            businessUnit: 'Greenville',
            subtotal: 5225.66,
            total: 5225.66,
            currency: 'USD',
            items: [],
            activity: [],
          },
        ],
        filters: {},
        page: 0,
        totalItems: 100,
        limit: 25,
        sortOptions: [
          { name: 'Date', value: 'date' },
          { name: 'Status', value: 'status' },
          { name: 'ID', value: 'id' },
          { name: 'Business Unit', value: 'businessUnit' },
          { name: 'Total', value: 'total' },
        ],
        statusOptions: [
          { name: 'Confirmed', value: 'confirmed', count: 0 },
          { name: 'Delivered', value: 'delivered', count: 0 },
          { name: 'Renogitiated', value: 'renogitiated', count: 0 },
          { name: 'Cancelled', value: 'cancelled', count: 0 },
          { name: 'Returned', value: 'returned', count: 0 },
        ],
      }}
      quoteDetails={{
        quote: {
          id: '2353 2245 6635',
          status: 'accepted',
          creationDate: '11/03/2023',
          businessUnit: 'Greenville',
          subtotal: 5225.66 - 23.999,
          shippingCosts: 23.999,
          total: 5225.66,
          currency: 'USD',
          items: [
            {
              id: '1',
              image: '/sb-assets/brake-pad.png',
              name: 'Brake Pad Set, disc brake DELPHI LP20',
              sku: 'Bd10T789',
              quantity: 200,
              price: 49.55,
              currency: 'USD',
            },
            {
              id: '2',
              image: '/sb-assets/brake-pad.png',
              name: 'Brake Pad Set, disc brake DELPHI LP20',
              sku: 'Bh005H789',
              quantity: 2,
              price: 549.55,
              currency: 'USD',
            },
            {
              id: '3',
              image: '/sb-assets/brake-pad.png',
              name: 'Brake Pad Set, disc brake DELPHI LP20',
              sku: 'Bh005H789',
              quantity: 22,
              price: 49.55,
              currency: 'USD',
            },
            {
              id: '4',
              image: '/sb-assets/brake-pad.png',
              name: 'Brake Pad Set, disc brake DELPHI LP20',
              sku: 'Bd10T789',
              quantity: 80,
              price: 49.55,
              currency: 'USD',
            },
            {
              id: '5',
              image: '/sb-assets/brake-pad.png',
              name: 'Brake Pad Set, disc brake DELPHI LP20',
              sku: 'Bb006P123',
              quantity: 19,
              price: 49.55,
              currency: 'USD',
            },
          ],
          activity: [
            {
              title: 'Quote request submitted',
              date: '11/03/23 15:33',
              author: 'Erika',
              comment: 'Can I have a 10% discount on Bd10T789?',
              commentBy: 'author',
            },
            {
              title: 'Quote Accepted by Seller',
              date: '11/03/23 15:33',
              author: 'Andres',
              comment: 'I have applied your discount Erika!',
              commentBy: 'seller',
            },
            {
              title: 'Awaiting reply from you',
              reply: true,
              renegotiate: true,
            },
          ],
          isNew: true,
          shippingAddress: 'commercetools GmbH \n315 Bockele Rd\nGreenville, LU\n314 23',
          billingAddress: 'commercetools GmbH \n315 Bockele Rd\nGreenville, LU\n314 23',
          shippingMethod: 'UPS Standard \nEst. 18/01/2023',
          paymentMethod: 'VISA **4166',
        },
      }}
    />
  );
};

export default DashboardTastic;
