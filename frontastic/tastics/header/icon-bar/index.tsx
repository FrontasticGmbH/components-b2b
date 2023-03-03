import BusinessUnitDropdownTree from 'components/commercetools-ui/business-unit/dropdown-tree';
import StorePicker from 'components/commercetools-ui/business-unit/store-picker';
import CartButton from 'components/commercetools-ui/header/cart-button';
import { useCart } from 'frontastic/provider';
import { useAccount } from 'helpers/hooks/useAccount';
import React from 'react';
import { calculateCartCount } from 'helpers/utils/calculateCartCount';

interface Props {
  data: any;
}

const IconBarTastic: React.FC<Props> = ({ data }) => {
  const { account } = useAccount();
  const { data: cart } = useCart();
  const organization = data.organization?.dataSource?.organization;
  const associations = data.associations?.dataSource?.associations;
  return (
    <div className={`flex h-full flex-row items-center justify-end ${data.bgColor}`}>
      {!!account && (
        <>
          <div className="flex flex-col">
            <span className="align-center inline-block">
              {!data.isBUPickerHidden && <BusinessUnitDropdownTree tree={associations} />}
            </span>
            <span className="align-center inline-block">
              {!data.isStorePickerHidden && <StorePicker organization={organization} />}
            </span>
          </div>

          <CartButton
            cartLink={data.cartLink}
            cartItemCount={calculateCartCount(cart?.lineItems)}
            isCartDisabled={typeof cart === 'undefined'}
          />
        </>
      )}
    </div>
  );
};

export default IconBarTastic;
