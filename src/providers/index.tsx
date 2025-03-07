'use client';

import { sdk } from '@/sdk';
import AddToCartOverlayProvider from '@/providers/add-to-cart-overlay';
import useProjectSettings from '@/lib/hooks/useProjectSettings';
import { SWRProvider } from './swr';
import I18nProvider from './I18n';
import { ProvidersProps } from './types';
import ShipAndLanguageProvider from './ship-and-language';
import StoreAndBusinessUnitsProvider from './store-and-business-units';
import TracingProvider from './tracing';

export const Providers = ({
  locale,
  translations,
  initialData,
  page,
  children,
}: React.PropsWithChildren<ProvidersProps>) => {
  sdk.defaultConfigure(locale);
  const { projectSettings } = useProjectSettings();
  return (
    <TracingProvider page={page}>
      <I18nProvider translations={translations}>
        <SWRProvider
          value={{
            fallback: {
              '/action/account/getAccount': { data: initialData.account },
              '/action/business-unit/getBusinessUnits': { data: initialData.businessUnits },
              '/action/business-unit/getAssociate': { data: initialData.associate },
              '/action/project/getProjectSettings': { data: initialData.projectSettings },
              '/action/product/queryCategories?format=flat': { data: initialData.flatCategories },
              '/action/product/queryCategories?format=tree': { data: initialData.treeCategories },
            },
          }}
        >
          <ShipAndLanguageProvider projectSettings={projectSettings}>
            <StoreAndBusinessUnitsProvider>
              <AddToCartOverlayProvider>{children}</AddToCartOverlayProvider>
            </StoreAndBusinessUnitsProvider>
          </ShipAndLanguageProvider>
        </SWRProvider>
      </I18nProvider>
    </TracingProvider>
  );
};
