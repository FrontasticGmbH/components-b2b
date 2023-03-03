import React, { HTMLAttributes, useState } from 'react';
import { ClipboardListIcon } from '@heroicons/react/outline';
import { Order } from '@Types/cart/Order';
import easyinvoice from 'easyinvoice';
import { LoadingIcon } from '../icons/loading';

type Props = {
  order: Order;
};

const InvoiceButton: React.FC<Props & HTMLAttributes<HTMLButtonElement>> = ({ order, children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const data = {
    images: {
      //   logo: 'https://commercetools.com/_build/images/logos/commercetools-logo-desktop.svg',
    },
    sender: {
      company: 'Commercetools B2B',
      address: '325 Blackwell St.',
      zip: '27701 NC',
      city: 'Durham',
      country: 'US',
    },
    client: {
      company: `${order.billingAddress.firstName || ''} ${order.billingAddress.lastName || ''}`,
      address: `${order.billingAddress.streetNumber || ''} ${order.billingAddress.streetName || ''}`,
      zip: `${order.billingAddress.postalCode || ''} ${order.billingAddress.state || ''}`,
      city: order.billingAddress.city,
      country: order.billingAddress.country,
    },
    information: {
      number: order.orderId,
      date: new Date(order.createdAt).toLocaleDateString(),
      'due-date': '',
    },
    products: order.lineItems.map((lineItem) => {
      return {
        quantity: lineItem.count.toString(),
        description: lineItem.name,
        'tax-rate': 0,
        price: (lineItem.price.centAmount - (lineItem.discounts?.[0]?.discountedAmount?.centAmount || 0)) / 100,
      };
    }),
    settings: {
      local: 'en-US',
      currency: 'USD',
      'margin-top': 50,
      'margin-right': 50,
      'margin-left': 50,
      'margin-bottom': 25,
    },
  };

  const handleInvoice = async () => {
    setIsLoading(true);
    const res = await easyinvoice.createInvoice(data);
    easyinvoice.download('invoice.pdf', res.pdf);
    setIsLoading(false);
  };

  return (
    <button className="flex flex-row items-center" onClick={handleInvoice} title="invoice">
      {!children && (
        <>
          {!isLoading && <ClipboardListIcon className="h-4 w-4" />}
          {isLoading && <LoadingIcon className="h-4 w-4 animate-spin" />}
        </>
      )}
      {!!children && (
        <>
          <ClipboardListIcon className="mr-2 h-4 w-4" />
          {!isLoading && children}
          {isLoading && <LoadingIcon className="h-4 w-4 animate-spin" />}
        </>
      )}
    </button>
  );
};

export default InvoiceButton;
