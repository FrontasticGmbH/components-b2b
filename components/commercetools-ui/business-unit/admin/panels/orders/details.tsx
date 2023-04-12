import React, { useState } from 'react';
import { DuplicateIcon, ReceiptRefundIcon, XIcon } from '@heroicons/react/outline';
import { Order } from '@Types/cart/Order';
import { OrderItems } from 'components/commercetools-ui/account/details/sections/order-items';
import OrderReturns from 'components/commercetools-ui/account/details/sections/order-returns';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import InvoiceButton from 'components/commercetools-ui/invoice-button';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useCart } from 'frontastic';
import { useBusinessUnitDetailsStateContext } from '../../provider';
import CancelModal from './modals/cancel-modal';
import ReorderModal from './modals/reorder-modal';
import OrderReturnModal from './modals/return-modal';

interface Props {
  order: Order;
  onClose?: () => void;
}

const OrderDetails: React.FC<Props> = ({ order, onClose }) => {
  const [isReturnModalOpen, setIsReturnModalOpen] = useState(false);
  const [isReorderModalOpen, setIsReorderModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { transitionOrderState } = useCart();
  const { reloadTree, selectedBusinessUnit } = useBusinessUnitDetailsStateContext();

  const handleUpdateOrderState = async (state: string) => {
    setIsLoading(true);
    await transitionOrderState(order.orderId, state);
    setIsLoading(false);
    reloadTree();
    onClose();
  };

  if (!order) {
    return null;
  }
  return (
    <div id={order.orderId}>
      <div className="rounded-lg bg-gray-100 py-6 px-4">
        <dl className="flex-auto space-y-6 divide-y divide-gray-200 text-sm text-gray-600 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:space-y-0 sm:divide-y-0 lg:gap-x-8">
          <div className="flex pt-6 sm:block sm:pt-0">
            <dt className="font-medium text-gray-900">Order number</dt>
            <dd className="mb-4 sm:mt-1">{order.orderId}</dd>
            {selectedBusinessUnit?.isAdmin && (
              <>
                <dt className="font-medium text-gray-900">Order belongs to</dt>
                <dd className="mb-4 sm:mt-1">{order.email}</dd>
              </>
            )}
            {order.isPreBuyCart && (
              <>
                <dt className="font-medium text-gray-900">Order type</dt>
                <dd className="mb-4 sm:mt-1">Pre order</dd>
              </>
            )}
            <dt className="font-medium text-gray-900">Total amount</dt>
            <dd className="mb-4 sm:mt-1">{CurrencyHelpers.formatForCurrency(order.sum.centAmount)}</dd>
            <dt className="font-medium text-gray-900">Order status</dt>
            <dd className="mb-4 sm:mt-1">{order.state?.name || order.orderState}</dd>
          </div>
          <div className="flex pt-6 sm:block sm:pt-0">
            <dt className="font-medium text-gray-900">Order date</dt>
            <dd className="mb-4 sm:mt-1">{new Date(order.createdAt).toLocaleDateString()}</dd>
            <dt className="font-medium text-gray-900">Shipping price</dt>
            <dd className="text-ellipsis-150 mb-4 sm:mt-1">
              {CurrencyHelpers.formatForCurrency(order.shippingInfo?.price)}
            </dd>
            <dt className="font-medium text-gray-900">Shipping method</dt>
            <dd className="mb-4 sm:mt-1">{order.shippingInfo?.name || 'N/A'}</dd>
          </div>
          <div className="flex pt-6 sm:block sm:pt-0">
            {order.origin === 'Merchant' && (
              <>
                <dt className="font-medium text-gray-900">Order initiated/placed by</dt>
                <dd className="mb-4 sm:mt-1">Superuser</dd>
              </>
            )}
            {order.purchaseOrderNumber && (
              <>
                <dt className="font-medium text-gray-900">Purchase order number</dt>
                <dd className="mb-4 sm:mt-1">{order.purchaseOrderNumber}</dd>
              </>
            )}
            <div className="flex flex-row">
              <DuplicateIcon className="mr-2 mt-1 h-4 w-4" />
              <button
                type="button"
                className="mb-2 text-gray-900 underline"
                onClick={() => setIsReorderModalOpen(true)}
              >
                Reorder
              </button>
            </div>

            {!['Complete', 'Cancelled'].includes(order.orderState) && (
              <div className="flex flex-row">
                <ReceiptRefundIcon className="mr-2 mt-1 h-4 w-4" />
                <button
                  type="button"
                  className="mb-2 text-gray-900 underline"
                  onClick={() => setIsReturnModalOpen(true)}
                >
                  Return
                </button>
              </div>
            )}
            {!['Complete', 'Cancelled'].includes(order.orderState) && (
              <div className="flex flex-row">
                <XIcon className="mr-2 mt-1 h-4 w-4" />
                <button
                  type="button"
                  className="mb-2 text-gray-900 underline"
                  onClick={() => setIsCancelModalOpen(true)}
                >
                  Cancel
                </button>
              </div>
            )}
            {!['Cancelled'].includes(order.orderState) && (
              <div className="flex flex-row">
                <InvoiceButton order={order}>Invoice</InvoiceButton>
              </div>
            )}
          </div>
        </dl>
      </div>
      <div className="mt-8 flex-auto space-y-6 divide-y divide-gray-200 px-4 text-sm text-gray-600 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 sm:divide-y-0 lg:gap-x-8">
        <div className="flex pt-6 sm:block sm:pt-0">
          <p className="mb-2 font-bold text-gray-900">Ship to:</p>
          <p className="font-medium">{`${order.shippingAddress?.firstName} ${order.shippingAddress?.lastName}`}</p>
          <p>{`${order.shippingAddress?.streetNumber || ''} ${order.shippingAddress?.streetName || ''}`}</p>
          <p>{`${order.shippingAddress?.city} ${order.shippingAddress?.state || ''} ${
            order.shippingAddress?.postalCode
          }`}</p>
          <p>{order.shippingAddress.country}</p>
        </div>
        <div className="flex pt-6 sm:block sm:pt-0">
          <p className="mb-2 font-bold text-gray-900">Bill to:</p>
          <p className="font-medium">{`${order.billingAddress?.firstName} ${order.billingAddress?.lastName}`}</p>
          <p>{`${order.billingAddress?.streetNumber || ''} ${order.billingAddress?.streetName || ''}`}</p>
          <p>{`${order.billingAddress?.city} ${order.billingAddress?.state || ''} ${
            order.billingAddress?.postalCode
          }`}</p>
          <p>{order.billingAddress.country}</p>
        </div>
      </div>
      {!!order.returnInfo?.[0]?.items?.length && (
        <OrderReturns lineItems={order.lineItems} returnInfo={order.returnInfo} className="mt-4" />
      )}
      <OrderItems lineItems={order.lineItems}></OrderItems>
      {order.state?.key === 'review' && selectedBusinessUnit?.isAdmin && (
        <div className="mx-auto mt-20 max-w-[800px]">
          <h3 className="text-center text-lg font-semibold">Do you approve this order?</h3>
          <div className="flex flex-row justify-between px-32">
            <button
              className="button button-secondary flex flex-row"
              onClick={() => handleUpdateOrderState('rejected')}
            >
              {!isLoading && <span>Reject</span>}
              {isLoading && <LoadingIcon className="ml-4 h-6 w-6 animate-spin" />}
            </button>
            <button className="button button-primary flex flex-row" onClick={() => handleUpdateOrderState('finished')}>
              {!isLoading && <span>Accept</span>}
              {isLoading && <LoadingIcon className="ml-4 h-6 w-6 animate-spin" />}
            </button>
          </div>
        </div>
      )}
      {isReturnModalOpen && (
        <OrderReturnModal onClose={() => setIsReturnModalOpen(false)} open={isReturnModalOpen} order={order} />
      )}
      {isReorderModalOpen && (
        <ReorderModal onClose={() => setIsReorderModalOpen(false)} open={isReorderModalOpen} order={order} />
      )}
      {isCancelModalOpen && (
        <CancelModal onClose={() => setIsCancelModalOpen(false)} open={isCancelModalOpen} order={order} />
      )}
    </div>
  );
};

export default OrderDetails;
