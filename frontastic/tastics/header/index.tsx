import React from 'react';
import Header from 'components/commercetools-ui/header';
import { useAccount } from 'frontastic/provider';

const HeaderTastic = ({ data }) => {
  const { account } = useAccount();

  return (
    <Header
      tagline={data.tagline}
      links={data.links}
      organization={data.organization?.dataSource?.organization}
      organizationTree={data.tree?.dataSource?.tree}
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
