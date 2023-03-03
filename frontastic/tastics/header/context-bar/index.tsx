import BusinessUnitDropdownTree from 'components/commercetools-ui/business-unit/dropdown-tree';
import StorePicker from 'components/commercetools-ui/business-unit/store-picker';
import { useAccount } from 'frontastic/provider';
import React from 'react';

type Props = { data: any };

const ContextBarTastic: React.FC<Props> = ({ data }) => {
  const { account } = useAccount();

  const organization = data.organization?.dataSource?.organization;
  const associations = data.associations?.dataSource?.associations;
  return (
    <div className={`${data.bgColor} h-full text-right`}>
      {!!account && (
        <div className="pt-4">
          {/* check styles on both when one is hidden */}
          <span className="align-center inline-block">
            {!data.isBUPickerHidden && <BusinessUnitDropdownTree tree={associations} />}
          </span>
          <span className="align-center inline-block">
            {!data.isStorePickerHidden && <StorePicker organization={organization} />}
          </span>
        </div>
      )}
    </div>
  );
};

export default ContextBarTastic;
