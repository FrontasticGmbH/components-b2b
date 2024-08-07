'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Button from '@/components/atoms/button';
import useScrollBlock from '@/hooks/useScrollBlock';
import useControllableState from '@/hooks/useControllableState';
import { ConfirmationProps } from './types';
import ResponsiveModal from '../responsive-modal';

const Confirmation = ({
  children,
  translations,
  onCancel,
  onConfirm,
  isOpen: isOpenProp,
  disabled = false,
  className = '',
}: React.PropsWithChildren<ConfirmationProps>) => {
  const [isOpen, setIsOpen] = useControllableState(isOpenProp, false);

  const onOpen = useCallback(() => setIsOpen(true), [setIsOpen]);
  const onClose = useCallback(() => setIsOpen(false), [setIsOpen]);

  const [isLoading, setIsLoading] = useState(false);

  const { blockScroll } = useScrollBlock();

  useEffect(() => {
    blockScroll(isOpen);

    return () => blockScroll(false);
  }, [isOpen, blockScroll]);

  const handleCancel = useCallback(() => {
    onCancel?.();
    onClose();
  }, [onCancel, onClose]);

  const handleConfirm = useCallback(async () => {
    setIsLoading(true);
    await onConfirm?.();
    setIsLoading(false);
    onClose();
  }, [onConfirm, onClose]);

  return (
    <>
      <div className={className} onClick={onOpen}>
        {children}
      </div>
      <ResponsiveModal className="lg:max-w-[400px]" isOpen={isOpen} onRequestClose={handleCancel} closeButton>
        <div className="px-6">
          <h4 className="pb-4 pt-6 text-20 font-semibold text-gray-800">{translations.title}</h4>
          <p className="text-14 text-gray-700">{translations.summary}</p>
        </div>
        <div className="mt-5 flex items-center justify-end gap-3 border-t border-neutral-400 p-6">
          <Button variant="secondary" size="m" className="min-w-[112px]" onClick={handleCancel}>
            {translations.cancel}
          </Button>
          {!disabled && (
            <Button variant="warning" size="m" className="min-w-[112px]" onClick={handleConfirm} loading={isLoading}>
              {translations.confirm}
            </Button>
          )}
        </div>
      </ResponsiveModal>
    </>
  );
};

export default Confirmation;
