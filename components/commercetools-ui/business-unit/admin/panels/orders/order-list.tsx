import React, { useState } from 'react';
import { EyeIcon, DuplicateIcon } from '@heroicons/react/outline';
import { Order } from '@Types/cart/Order';
import InvoiceButton from 'components/commercetools-ui/invoice-button';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { mapAddressToString } from 'helpers/utils/addressUtil';
import { useBusinessUnitDetailsStateContext } from '../../provider';
import OrderDetailsModal from './details-modal';
import ReorderModal from './reorder-modal';

interface Props {
  orders: Order[];
}

const OrderList: React.FC<Props> = ({ orders }) => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isReorderModalOpen, setIsReorderModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { reloadTree } = useBusinessUnitDetailsStateContext();

  const handleOpenDetailModal = (order) => {
    setSelectedOrder(order);
    setIsDetailsModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setSelectedOrder(null);
    setIsDetailsModalOpen(false);
  };

  const handleOpenReorderModal = (order) => {
    setSelectedOrder(order);
    setIsReorderModalOpen(true);
  };

  const handleCloseReorderModal = () => {
    reloadTree();
    setSelectedOrder(null);
    setIsReorderModalOpen(false);
  };
  return (
    <div>
      <table className="table-primary w-full table-fixed border">
        <thead>
          <tr>
            <td>ID</td>
            <td>Date</td>
            <td>Business unit</td>
            <td>Shipping Address</td>
            <td>Status</td>
            <td>Items count</td>
            <td>Total price</td>
            <td style={{ width: '7%' }}></td>
          </tr>
        </thead>
        <tbody>
          {!!orders?.length &&
            orders.map((order) => (
              <tr key={order.orderId}>
                <td className="text-ellipsis-150" title={order.orderId}>
                  {order.orderId}
                </td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                <td className="text-ellipsis-150" title={order.businessUnit}>
                  {order.businessUnit}
                </td>
                <td className="text-ellipsis-150">{mapAddressToString(order.shippingAddress)}</td>
                <td>{order.orderState}</td>
                <td>{order.lineItems?.reduce((prev, curr) => prev + curr.count, 0)}</td>
                <td>{CurrencyHelpers.formatForCurrency(order.sum)}</td>
                <td className="mt-1 flex flex-row">
                  <button title="Details" onClick={() => handleOpenDetailModal(order)}>
                    <EyeIcon className="h-4 w-4" />
                  </button>
                  <button title="Reorder" onClick={() => handleOpenReorderModal(order)}>
                    <DuplicateIcon className="h-4 w-4" />
                  </button>
                  <InvoiceButton order={order} />
                </td>
              </tr>
            ))}
          {!orders?.length && (
            <tr>
              <td colSpan={8} className="text-center">
                No orders
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {isDetailsModalOpen && (
        <OrderDetailsModal onClose={handleCloseDetailModal} order={selectedOrder} open={isDetailsModalOpen} />
      )}
      {isReorderModalOpen && (
        <ReorderModal onClose={handleCloseReorderModal} open={isReorderModalOpen} order={selectedOrder} />
      )}
    </div>
  );
};

export default OrderList;
