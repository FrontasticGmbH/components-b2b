import Link from '@/components/atoms/link';
import Button from '@/components/atoms/button';
import { classnames } from '@/utils/classnames/classnames';
import { CheckoutCTAProps } from '../types';

const CheckoutCTA = ({ className, link, disabled, text, onCheckout, onRequestQuote }: CheckoutCTAProps) => {
  const CTAClassName = classnames(className, 'gap-4');

  return (
    <div className={CTAClassName}>
      <Link href={link} className="w-full" underlineOnHover={false}>
        <Button size="full" disabled={disabled} onClick={onCheckout}>
          {text}
        </Button>
      </Link>

      <Button size="full" variant="secondary" disabled={disabled} onClick={onRequestQuote}>
        Request Quote
      </Button>
    </div>
  );
};

export default CheckoutCTA;
