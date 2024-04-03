import Button from '@/components/atoms/button';
import Checkbox from '@/components/atoms/checkbox';
import Typography from '@/components/atoms/typography';
import useTranslation from '@/providers/I18n/hooks/useTranslation';
import { classnames } from '@/utils/classnames/classnames';
import { ListWishListsProps } from '@/components/molecules/wishlist-modal/types';

const ListWishlist = ({ lists, selectedIds, onClose, onSubmit, handleChange, loading }: ListWishListsProps) => {
  const { translate } = useTranslation();
  return (
    <>
      <div className="px-6 lg:pl-0 lg:pr-5">
        <Typography
          fontWeight="semibold"
          fontSize={16}
          lineHeight="loose"
          className="border-b border-neutral-400 pb-6 pt-4 text-gray-700 md:pt-6 md:text-20 lg:mx-auto lg:max-w-[400px]"
        >
          {translate('wishlist.select.list')}
        </Typography>
      </div>
      <div className="lg:pr-5">
        <div className="custom-scrollbar max-h-[284px] overflow-y-scroll px-6 lg:px-0">
          <div className="lg:mx-auto lg:max-w-[400px]">
            {lists?.map(({ label, id }, index) => (
              <Checkbox
                key={id}
                label={label}
                value={id}
                defaultChecked={selectedIds.includes(id)}
                onChecked={(checked) => handleChange(id, checked)}
                containerClassName={classnames(
                  'w-full flex-row-reverse justify-between border-neutral-400 py-4 lg:py-5',
                  { 'border-b': index < lists.length - 1 },
                )}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-auto border-t border-neutral-400 p-6">
        <div className="flex justify-end gap-3 lg:mx-auto lg:max-w-[400px]">
          <Button size="m" variant="secondary" onClick={onClose}>
            {translate('common.cancel')}
          </Button>
          <Button loading={loading} size="m" onClick={() => onSubmit(lists)}>
            {translate('wishlist.move')}
          </Button>
        </div>
      </div>
    </>
  );
};

export default ListWishlist;
