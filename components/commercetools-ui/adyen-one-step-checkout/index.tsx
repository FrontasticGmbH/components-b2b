import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ShippingMethod } from '@commercetools/frontend-domain-types/cart/ShippingMethod';
import toast from 'react-hot-toast';
import Address from 'components/commercetools-ui/adyen-one-step-checkout/panels/address';
import Checkout from 'components/commercetools-ui/adyen-one-step-checkout/panels/checkout';
import Overview from 'components/commercetools-ui/adyen-one-step-checkout/panels/overview';
import OrderSummary from 'components/commercetools-ui/cart/orderSummary';
import { useFormat } from 'helpers/hooks/useFormat';
import { countryBasedShippingRateIndex } from 'helpers/utils/flattenShippingMethod';
import { useCart } from 'frontastic';
import { mapToCartStructure, mapToFormStructure } from './mapFormData';
import { requiredDataIsValid } from './requiredDataIsValid';

export type FormData = {
  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  shippingStreetName: string;
  shippingCity: string;
  shippingPostalCode: string;
  shippingCountry: string;
  billingStreetName: string;
  billingCity: string;
  billingPostalCode: string;
  billingCountry: string;
};

const AdyenOneStepCheckout = ({ termsLink, cancellationLink, privacyLink }) => {
  const { data: cartList, updateCart, setShippingMethod, orderCart } = useCart();
  const { formatMessage } = useFormat({ name: 'cart' });
  const router = useRouter();
  const { formatMessage: formatCheckoutMessage } = useFormat({ name: 'checkout' });
  const containerRef = useRef();
  const [disableSubmitButton, setDisableSubmitButton] = useState<boolean>(true);
  const [billingIsSameAsShipping, setBillingIsSameAsShipping] = useState<boolean>(true);
  const [currentShippingMethod, setCurrentShippingMethod] = useState<ShippingMethod>();
  const [dataIsValid, setDataIsValid] = useState<boolean>(false);
  const [isQuoteRequest, setIsQuoteRequest] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    shippingStreetName: '',
    shippingCity: '',
    shippingPostalCode: '',
    shippingCountry: '',
    billingStreetName: '',
    billingCity: '',
    billingPostalCode: '',
    billingCountry: '',
  });

  const [payment, setPayment] = useState<any>({});

  const toggleBillingAddressOption = () => {
    setBillingIsSameAsShipping(!billingIsSameAsShipping);
  };

  const handleOrder = async () => {
    setIsLoading(true);
    await orderCart(payment);
    setIsLoading(false);
    router.replace(
      {
        pathname: '/thank-you',
      },
      undefined,
      {
        shallow: false,
      },
    );
  };

  const submitCheckout = () => {
    if (!payment?.poNumber) {
      toast.error(
        formatCheckoutMessage({
          id: 'noPoNumber',
          defaultMessage: 'Please enter a valid Purchase Order',
        }),
      );
      return;
    }
    handleOrder();
    return;
  };

  const updateData = (data: FormData) => {
    setData(data);
  };

  const updateCartData = () => {
    if (countryBasedShippingRateIndex[data.shippingCountry] == undefined) {
      toast.error(
        formatCheckoutMessage({
          id: 'taxesNotSupported',
          defaultMessage: 'Taxes are not defined for this country in commercetools',
        }),
      );
      updateData({ ...data, shippingCountry: '' });
      return;
    }

    if (dataIsValid) {
      const updatedData = mapToCartStructure(data, billingIsSameAsShipping);
      updateCart(updatedData);
    }
  };

  const updatecurrentShippingMethod = (shippingMethod: ShippingMethod) => {
    if (shippingMethod?.shippingMethodId) {
      setCurrentShippingMethod(shippingMethod);
      setShippingMethod(shippingMethod.shippingMethodId);
    }
  };

  const submitButtonLabel = [
    formatMessage({ id: 'gotToShipping', defaultMessage: 'Go to shipping' }),
    formatMessage({ id: 'goToOverview', defaultMessage: 'Go to overview & payment' }),
    formatMessage({ id: 'ContinueAndPay', defaultMessage: 'Continue and pay' }),
  ];

  useEffect(() => {
    if (cartList?.origin === 'Quote') {
      setIsQuoteRequest(true);
    }
  }, [cartList]);

  useEffect(() => {
    setDataIsValid(requiredDataIsValid(data, billingIsSameAsShipping));
  }, [data, billingIsSameAsShipping]);

  useEffect(() => {
    setDisableSubmitButton(!dataIsValid);
  }, [dataIsValid]);

  useEffect(() => {
    const defaultData = mapToFormStructure(cartList);
    if (defaultData && requiredDataIsValid(defaultData, billingIsSameAsShipping)) {
      updateData(defaultData);
    }
  }, [cartList]);

  useEffect(() => {
    if (!currentShippingMethod && cartList?.availableShippingMethods) {
      if (cartList?.shippingInfo) {
        const currentShippingMethod = cartList.availableShippingMethods.find(
          ({ shippingMethodId }) => shippingMethodId == cartList.shippingInfo.shippingMethodId,
        );
        setCurrentShippingMethod(currentShippingMethod);
      } else {
        setCurrentShippingMethod(cartList?.availableShippingMethods?.[0]);
      }
    }
  }, [cartList?.availableShippingMethods]);

  return (
    <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16" ref={containerRef}>
      <div className="sm:col-span-7 sm:p-6 lg:col-span-12 lg:mt-0 lg:p-8">
        <h2>1. Choose An Address</h2> <br />
        <Address
          data={data}
          updateData={updateData}
          billingIsSameAsShipping={billingIsSameAsShipping}
          toggleBillingAddressOption={toggleBillingAddressOption}
        />
      </div>
      <div className="sm:col-span-8 sm:p-6 lg:col-span-12 lg:mt-0 lg:p-8">
        <h2>2. Choose Shipping</h2>
        <Overview
          shippingMethods={cartList?.availableShippingMethods}
          currentShippingMethod={currentShippingMethod}
          onSelectShippingMethod={updatecurrentShippingMethod}
        />
      </div>
      <div className="sm:col-span-8 sm:p-6 lg:col-span-12 lg:mt-0 lg:p-8">
        <h2>3. Payment</h2>
        <Checkout onPaymentUpdate={setPayment} />
      </div>
      <div className="sm:col-span-8 sm:p-6 lg:col-span-12 lg:mt-0 lg:p-8">
        <OrderSummary
          cart={cartList}
          submitButtonLabel={submitButtonLabel[2]}
          disableSubmitButton={disableSubmitButton || isLoading}
          showDiscountsForm={!isQuoteRequest}
          showSubmitButton={true}
          submitLoading={isLoading}
          onSubmit={submitCheckout}
          termsLink={termsLink}
          cancellationLink={cancellationLink}
          privacyLink={privacyLink}
        />
      </div>
    </div>
  );
};

export default AdyenOneStepCheckout;
