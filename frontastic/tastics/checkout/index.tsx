import React from 'react';
import AdyenCheckout from 'components/commercetools-ui/adyen-checkout';
import AdyenOneStepCheckout from 'components/commercetools-ui/adyen-one-step-checkout';

const CheckoutTastic = ({ data }) => {
  //   if (data.checkoutType === 'one') {
  return (
    <AdyenOneStepCheckout
      termsLink={data.termsLink}
      cancellationLink={data.cancellationLink}
      privacyLink={data.privacyLink}
    />
  );
  //   }
  //   return (
  //     <AdyenCheckout termsLink={data.termsLink} cancellationLink={data.cancellationLink} privacyLink={data.privacyLink} />
  //   );
};

export default CheckoutTastic;
