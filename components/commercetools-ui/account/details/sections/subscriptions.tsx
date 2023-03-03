import React, { useEffect, useState } from 'react';
import { EyeIcon } from '@heroicons/react/outline';
import { Cart } from '@Types/cart/Cart';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { useAccount, useSubscriptions } from 'frontastic';
import SubscriptionDetailsModal from '../modals/subscription';

const Subscriptions = () => {
  //account data
  const {} = useAccount();
  const { getAllSubscriptions } = useSubscriptions();

  const [subscriptions, setSubscriptions] = useState<Cart[]>([]);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSubscription, setSelectedSubscription] = useState(null);

  const openDetailsModal = (subscription: Cart) => {
    setSelectedSubscription(subscription);
    setDetailsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setSelectedSubscription(null);
    setDetailsModalOpen(false);
  };

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const list = await getAllSubscriptions();
      setSubscriptions(list);
    })();
    setIsLoading(false);
  }, []);

  return (
    <>
      <div className="mt-10 divide-y divide-gray-200">
        <div className="mb-10 space-y-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">My Subscriptions</h3>
          <p className="max-w-2xl text-sm text-gray-500">Here you can view subscriptions and their details</p>
        </div>
        {isLoading && <LoadingIcon className="h-4 w-4 animate-spin" />}
        {!isLoading && !subscriptions.length && <span>No spubscriptions yet!</span>}
        {!isLoading && !!subscriptions.length && (
          <table className="table-primary w-full table-fixed border">
            <thead>
              <tr>
                <th style={{ width: '25%' }}>Products</th>
                <th style={{ width: '5%' }}>Count</th>
                <th>Last accurance date</th>
                <th>Next delivery date</th>
                <th>Status</th>
                <th style={{ width: '5%' }}></th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((item) => (
                <tr key={item.cartId}>
                  <td className="text-ellipsis-150">{item.lineItems?.map((lineitem) => lineitem.name).join(', ')}</td>
                  <td>{item.lineItems.length}</td>
                  <td>{new Date(item.subscription.order?.createdAt).toLocaleDateString()}</td>
                  <td>{new Date(item.subscription.nextDeliveryDate).toLocaleDateString()}</td>
                  <td>{item.subscription.isActive ? 'Running' : 'Paused'}</td>
                  <td>
                    <button type="button" onClick={() => openDetailsModal(item)}>
                      <EyeIcon className="h-4 w-4 text-black" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {!!selectedSubscription && (
        <SubscriptionDetailsModal
          open={detailsModalOpen}
          onClose={closeDetailsModal}
          subscription={selectedSubscription}
        />
      )}
    </>
  );
};

export default Subscriptions;
