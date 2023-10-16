import React from 'react';
import { Squares2X2Icon as GridIcon, ListBulletIcon as ListIcon } from '@heroicons/react/24/outline';
import { classnames } from '@/utils/classnames/classnames';
import { useProductList } from '../../context';

const ViewToggle = () => {
  const { view, onChangeView } = useProductList();

  const views = [
    { key: 'list', Icon: ListIcon },
    { key: 'grid', Icon: GridIcon },
  ] as const;

  return (
    <div className="flex h-[32px] items-center gap-3 rounded-md border border-gray-300 px-3 py-[6px]">
      {views.map(({ key, Icon }) => (
        <Icon
          key={key}
          width={20}
          height={20}
          className={classnames(
            'cursor-pointer transition hover:text-gray-600',
            view === key ? 'text-gray-600' : 'text-gray-300',
          )}
          onClick={() => onChangeView(key)}
        />
      ))}
    </div>
  );
};

export default ViewToggle;