import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import useTranslation from '@/providers/I18n/hooks/useTranslation';
import Button from '@/components/atoms/button';
import Confirmation from '@/components/organisms/confirmation';
import PurchaseListItem from '@/components/molecules/purchase-list-item';
import Link from '@/components/atoms/link';
import EditPurchaseListModal from './components/edit-modal';
import { PurchaseListDetailPageProps } from './types';

const PurchaseListDetailPage = ({
  purchaseLists,
  onUpdatePurchaseList,
  onDeletePurchaseList,
  onOrderPurchaseList,
  onAddItemToCart,
  onRemoveItem,
  onUpdateItem,
}: PurchaseListDetailPageProps) => {
  const { translate } = useTranslation();

  const router = useRouter();

  const params = useSearchParams();

  const id = params.get('id') ?? '';

  const purchaseList = purchaseLists.find((list) => list.id === id);

  if (!purchaseList) return <></>;

  const itemsCount = purchaseList.items.length;

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-neutral-400 pb-4 md:flex-row md:items-start md:justify-between md:pb-6 lg:pb-8">
        <div>
          <h1 className="py-6 text-18 font-extrabold text-gray-800 md:py-7 md:text-20 lg:py-9 lg:text-24">
            {purchaseList.name}
          </h1>
          <p className="text-14 text-gray-600 lg:text-16">{purchaseList.description}</p>
        </div>
        <div className="flex items-center gap-3 md:pt-5 lg:pt-8">
          <Link
            className="hidden text-14 leading-normal text-[#274082] md:block"
            href="#"
            onClick={() => router.back()}
          >
            {translate('common.back.to.previous.page')}
          </Link>
          <div className="flex w-full flex-col items-stretch gap-4 md:w-fit md:flex-row md:items-center md:gap-3">
            <Button
              className="w-full px-[0px] py-[8px] md:order-[2] md:w-[75px]"
              size="m"
              onClick={() => onOrderPurchaseList?.(id)}
            >
              {translate('common.order')}
            </Button>
            <EditPurchaseListModal purchaseLists={purchaseLists} onUpdatePurchaseList={onUpdatePurchaseList}>
              <Button className="w-full px-[0px] py-[8px] md:w-[75px]" size="m" variant="secondary">
                {translate('common.edit')}
              </Button>
            </EditPurchaseListModal>
            <Confirmation
              translations={{
                title: translate('dashboard.purchase.list.delete'),
                summary: translate('dashboard.purchase.list.delete.confirm'),
                cancel: translate('common.cancel'),
                confirm: translate('common.delete'),
              }}
              onConfirm={async () => onDeletePurchaseList?.(id)}
            >
              <Button className="w-full px-[0px] py-[8px] md:w-[75px]" size="m" variant="secondary">
                {translate('common.delete')}
              </Button>
            </Confirmation>
          </div>
        </div>
      </div>

      <p className="py-6 lg:pb-9 lg:pt-8 lg:text-18">
        {translate('common.purchase.list')}{' '}
        <span className="text-gray-600">
          ({itemsCount} {translate(itemsCount === 1 ? 'common.item' : 'common.items')})
        </span>
      </p>

      <div className="flex flex-col items-stretch gap-3 lg:gap-4">
        {purchaseList.items.map((item) => (
          <PurchaseListItem
            key={item.id}
            item={item}
            onRemove={async () => onRemoveItem?.(item.id)}
            onAddToCart={async () => onAddItemToCart?.(item)}
            onQuantityChange={async (quantity) => onUpdateItem?.({ ...item, quantity })}
          />
        ))}
      </div>
    </div>
  );
};

export default PurchaseListDetailPage;
