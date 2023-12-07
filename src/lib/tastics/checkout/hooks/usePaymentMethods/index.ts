import useCart from '@/lib/hooks/useCart';
import { CheckoutPayload } from '@/lib/hooks/useCart/types';
import useTranslation from '@/providers/I18n/hooks/useTranslation';

const usePaymentMethods = () => {
  const { translate } = useTranslation();

  const { checkout } = useCart();

  const paymentMethods = [
    {
      id: 'purchase.order',
      name: `${translate('checkout.purchase.order')} (PO)`,
      description: translate('checkout.purchase.order.desc'),
      image: {
        src: '',
        className: '',
      },
      async makePayment(data: unknown) {
        const order = await checkout(data as CheckoutPayload);
        return order.orderId;
      },
    },
  ];

  return paymentMethods;
};

export default usePaymentMethods;
