'use client';
import React from 'react';
import Dashboard from '@/components/pages/dashboard';
import { DashboardLinks } from '@/components/pages/dashboard/constants';
import OrdersPage from '@/components/pages/dashboard/pages/orders';
import useAccount from '@/lib/hooks/useAccount';
import useOrders from '@/lib/hooks/useOrders';
import { mapOrder } from '@/utils/mappers/map-order';
import { useStoreAndBusinessUnits } from '@/providers/store-and-business-units';
import useRefinements from './hooks/useRefinements';
import useStatusesOptions from './hooks/useStatusesOptions';

const OrdersTastic = () => {
  const { account } = useAccount();

  const {
    page,
    limit,
    setLimit,
    cursor,
    setCursor,
    clearRefinements,
    states,
    addState,
    removeState,
    search,
    debouncedSearch,
    setSearch,
    date,
    ISODate,
    onCreationDateRefine,
  } = useRefinements();

  const { selectedBusinessUnit } = useStoreAndBusinessUnits();

  const { orders } = useOrders({
    limit,
    cursor,
    ...(states.length ? { states } : {}),
    ...(debouncedSearch ? { ids: [debouncedSearch.trim()] } : {}),
    createdFrom: ISODate.from,
    createdTo: ISODate.to,
    businessUnitKey: selectedBusinessUnit?.key,
  });

  const mappedOrders = orders.items?.map(mapOrder);

  const previousCursor = orders.previousCursor;
  const nextCursor = orders.nextCursor;
  const total = orders.total ?? 0;

  const { orderStatusOptions } = useStatusesOptions();

  return (
    <Dashboard href={DashboardLinks.orders} userName={account?.firstName}>
      <OrdersPage
        orders={mappedOrders ?? []}
        filters={{ search, status: states, createdFrom: date.from?.toString(), createdTo: date.to?.toString() }}
        sortOptions={[]}
        statusOptions={orderStatusOptions}
        onSearch={(val) => setSearch(val)}
        onStatusRefine={(status) => {
          const isRefined = states.includes(status);

          if (!isRefined) addState(status);
          else removeState(status);
        }}
        onClearRefinements={clearRefinements}
        onCreationDateRefine={onCreationDateRefine}
        page={page}
        totalItems={total}
        limit={limit}
        onPageChange={(newPage) => {
          const isNext = newPage > page;

          if (isNext && nextCursor) setCursor(nextCursor);
          else if (!isNext && previousCursor) setCursor(previousCursor);
        }}
        onRowsPerPageChange={(newLimit) => setLimit(+newLimit)}
      />
    </Dashboard>
  );
};

export default OrdersTastic;
