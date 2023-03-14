/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';
import { BusinessUnit } from 'cofe-ct-b2b-ecommerce/types/business-unit/BusinessUnit';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { useFormat } from 'helpers/hooks/useFormat';
import { BusinessUnitPanels } from './panels';
import { useBusinessUnitDetailsStateContext } from './provider';
import BusinessUnitTree from './tree';
const BusinessUnitAdmin: React.FC = () => {
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });
  const { selectedBusinessUnit, setSelectedBusinessUnit } = useBusinessUnitDetailsStateContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleBusinessUnitChange = (bu: BusinessUnit) => {
    setIsLoading(true);
    setSelectedBusinessUnit(bu);
    setIsLoading(false);
  };
  return (
    <div>
      <div className="flex w-full flex-col">
        <main className="flex-1">
          <div className="relative mx-auto md:px-8 xl:px-0">
            <div className="pt-10 pb-16">
              <div className="w-full">
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-light-100 sm:text-left">
                  {formatAccountMessage({ id: 'company-admin', defaultMessage: 'Company Administration' })}
                </h1>
                {!!selectedBusinessUnit && (
                  <h3 className="text-md mt-4 text-gray-900 dark:text-light-100 sm:text-left">
                    {formatAccountMessage({ id: 'selected-company', defaultMessage: 'Selected Business Unit: ' })}
                    {selectedBusinessUnit.name}
                  </h3>
                )}
              </div>
              <div className="w-full">
                <div className="flex flex-row">
                  <div className="w-1/3">
                    {/* @ts-ignore */}
                    <BusinessUnitTree onChange={handleBusinessUnitChange} />
                  </div>
                  <div className="w-2/3">
                    {isLoading && <LoadingIcon className="h-4 w-4 animate-spin" />}
                    {/* @ts-ignore */}
                    {!isLoading && !!selectedBusinessUnit && <BusinessUnitPanels />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BusinessUnitAdmin;
