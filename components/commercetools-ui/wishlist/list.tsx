import React, { useState, useEffect } from 'react';
import { LineItem } from '@Types/wishlist/LineItem';
import Spinner from '../spinner';
import { WishlistItem } from './list-item';

export interface Props {
  items?: LineItem[];
  wishlistId: string;
  onUpdateList: () => void;
}

const List: React.FC<Props> = ({ items, wishlistId, onUpdateList }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (items) {
      setLoading(false);
    }
  }, [items]);

  return (
    <div className="mx-auto max-w-2xl pt-8 pb-16 lg:max-w-3xl lg:pt-4">
      {loading ? (
        <div className="flex items-stretch justify-center py-10 px-12">
          <Spinner />
        </div>
      ) : (
        <ul role="list" className="divide-y divide-gray-200 border-y border-gray-200">
          {items.map((item, i) => (
            <WishlistItem
              wishlistId={wishlistId}
              onUpdateList={onUpdateList}
              key={item.lineItemId}
              item={item}
            ></WishlistItem>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
