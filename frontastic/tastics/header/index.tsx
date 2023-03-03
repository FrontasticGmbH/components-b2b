import React from 'react';
import Header from 'components/commercetools-ui/header';
import { calculateCartCount } from 'helpers/utils/calculateCartCount';
import { useCart, useAccount } from 'frontastic/provider';

const HeaderTastic = ({ data }) => {
  const { data: cart } = useCart();
  const { account } = useAccount();

  return (
    <Header
      tagline={data.tagline}
      links={data.links}
      organization={data.organization?.dataSource?.organization}
      organizationTree={data.tree?.dataSource?.tree}
      cartItemCount={calculateCartCount(cart?.lineItems) || 0}
      logo={data.logo}
      logoLink={data.logoLink}
      account={account}
      accountLink={data.accountLink}
      wishlistLink={data.wishlistLink}
      businessUnitLink={data.businessUnitLink}
      cartLink={data.cartLink}
    />
  );
};

export default HeaderTastic;
