import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import WishList from 'components/commercetools-ui/wishlist';
import Wishlists from 'components/commercetools-ui/wishlists';

const WishlistTastic = ({ data }) => {
  const router = useRouter();

  const [match, setMatch] = useState(null);
  const associations = data.associations?.dataSource?.associations;

  useEffect(() => {
    setMatch(router.asPath.match(/^\/wishlist\/(.*)/));
  }, [router.asPath]);

  if (!match || !match?.[1]) {
    return (
      <Wishlists
        pageTitle={data.pageTitle}
        emptyStateImage={data.emptyStateImage}
        emptyStateTitle={data.emptyStateTitle}
        emptyStateSubtitle={data.emptyStateSubtitle}
        emptyStateCTALabel={data.emptyStateCTALabel}
        emptyStateCTALink={data.emptyStateCTALink}
        associations={associations}
      />
    );
  }

  return (
    <WishList
      pageTitle={data.pageTitle}
      emptyStateImage={data.emptyStateImage}
      emptyStateTitle={data.emptyStateTitle}
      emptyStateSubtitle={data.emptyStateSubtitle}
      emptyStateCTALabel={data.emptyStateCTALabel}
      emptyStateCTALink={data.emptyStateCTALink}
      wishlistId={match[1]}
      associations={associations}
    />
  );
};

export default WishlistTastic;
