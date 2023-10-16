import Button from '@/components/atoms/button';
import Typography from '@/components/atoms/typography';
import EmptyCartImage from 'public/images/empty-cart.png';
import Image from '@/components/atoms/Image';
import useTranslation from '@/providers/I18n/hooks/useTranslation';

const EmptyCart = () => {
  const { translate } = useTranslation();

  return (
    <div className="mx-auto grid w-fit place-items-center gap-12">
      <div className="grid place-items-center gap-6">
        <Typography fontSize={20} className="text-gray-700">
          {translate('cart.empty')}
        </Typography>

        <Image src={EmptyCartImage.src} width={144} height={144} alt="empty cart image" />
      </div>

      <Typography fontSize={16} lineHeight="loose" className="text-gray-600">
        {translate('cart.no.items.added')}
      </Typography>

      <Button size="l">{translate('cart.continue.shopping')}</Button>
    </div>
  );
};

export default EmptyCart;
