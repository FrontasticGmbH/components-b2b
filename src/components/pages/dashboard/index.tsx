'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '@/components/organisms/sidebar';
import useTranslation from '@/providers/I18n/hooks/useTranslation';
import useItems from './hooks/useItems';
import { DashboardProps } from './types';
import useActivePage from './hooks/useActivePage';

const Dashboard = ({
  companyAdmin,
  settings,
  purchaseLists,
  purchaseListDetails,
  orders,
  orderDetails,
  quotes,
  quoteDetails,
}: DashboardProps) => {
  const { translate } = useTranslation();

  const params = useSearchParams();

  const hash = params.get('hash') ?? '';

  const { sidebarItems } = useItems();

  const ActivePage = useActivePage({
    hash,
    companyAdmin,
    settings,
    purchaseLists,
    purchaseListDetails,
    orders,
    orderDetails,
    quotes,
    quoteDetails,
  });

  return (
    <div className="relative flex items-start gap-6 2xl:min-h-[calc(100vh-123px)]">
      <div className="sticky top-[123px] hidden h-[calc(100vh-123px)] w-max shrink-0 2xl:block">
        <Sidebar
          title="HELLO, ERIKA!"
          links={sidebarItems.map((link) => ({ ...link, href: `?hash=${link.href}`, isActive: hash === link.href }))}
        />
      </div>

      {ActivePage && (
        <div className="grow overflow-x-hidden px-4 pb-6 md:px-5 md:pb-7 lg:px-12 lg:pb-9">
          {ActivePage.title && (
            <h1 className="py-6 text-18 font-extrabold text-gray-800 md:py-7 md:text-20 lg:py-9 lg:text-24">
              {translate(ActivePage.title)}
            </h1>
          )}
          {ActivePage.Component}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
