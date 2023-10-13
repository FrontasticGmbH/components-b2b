import Button from '@/components/atoms/button';
import Typography from '@/components/atoms/typography';
import MoveToList from '@/components/molecules/move-to-list';
import { mockupLists } from '@/components/molecules/move-to-list/move-to-list.stories';
import useTranslation from '@/providers/I18n/hooks/useTranslation';
import { classnames } from '@/utils/classnames/classnames';
import { CartItemFooterProps } from '../types';

const CartItemFooter = ({ className, onRemove }: CartItemFooterProps) => {
  const { translate } = useTranslation();
  const ClassNames = classnames('mt-5 flex items-center gap-3 md:mt-8', className);

  return (
    <div className={ClassNames}>
      <MoveToList lists={mockupLists} />

      <Typography className="text-neutral-400">|</Typography>

      <Button variant="ghost" size="fit" className="text-14 font-medium" onClick={onRemove}>
        {translate('common.remove')}
      </Button>
    </div>
  );
};

export default CartItemFooter;
