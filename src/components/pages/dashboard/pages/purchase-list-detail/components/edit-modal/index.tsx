import React, { useEffect } from 'react';
import ResponsiveModal from '@/components/organisms/responsive-modal';
import useDisclosure from '@/hooks/useDisclosure';
import useTranslation from '@/providers/I18n/hooks/useTranslation';
import useScrollBlock from '@/hooks/useScrollBlock';
import { PurchaseListsPageProps } from '../../../purchase-lists/types';
import PurchaseListForm from '../../../purchase-lists/forms/purchase-list';

const EditPurchaseListModal = ({ children, ...props }: React.PropsWithChildren<PurchaseListsPageProps>) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { translate } = useTranslation();

  const { blockScroll } = useScrollBlock();

  useEffect(() => {
    blockScroll(isOpen);

    return () => blockScroll(false);
  }, [isOpen, blockScroll]);

  return (
    <>
      <div onClick={onOpen}>{children}</div>
      <ResponsiveModal isOpen={isOpen} onRequestClose={onClose} closeButton className="lg:w-[600px]">
        <div className="mx-auto p-4 md:p-6 lg:max-w-[400px] lg:p-0 lg:py-6">
          <h4 className="pb-4 font-semibold text-gray-800 md:text-20">{translate('dashboard.purchase.list.edit')}</h4>
          <PurchaseListForm
            {...props}
            classNames={{ form: 'p-0 border-none md:p-0 lg:p-0', buttonsContainer: 'justify-end' }}
            onSave={onClose}
            onCancel={onClose}
          />
        </div>
      </ResponsiveModal>
    </>
  );
};

export default EditPurchaseListModal;
