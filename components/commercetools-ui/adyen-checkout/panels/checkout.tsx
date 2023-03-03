import React, { useState } from 'react';
import { useFormat } from 'helpers/hooks/useFormat';
import PoNumber from './payments/PoNumber';

const options = [
  {
    id: 'po-number',
    default: true,
    value: 'po-number',
    label: 'Purchase Order (PO)',
  },
];

const Checkout: React.FC = () => {
  const { formatMessage } = useFormat({ name: 'checkout' });

  const paymentMapToComponent = {
    'po-number': <PoNumber />,
  };

  const [PaymentMethodComponent, setPaymentMethodComponent] = useState<React.FC>(
    paymentMapToComponent[options[0].value],
  );

  const onChange = (value: string) => {
    // setSelectedPaymentMethod(value);
    setPaymentMethodComponent(paymentMapToComponent[value]);
  };

  return (
    <section className="bg-white md:rounded md:shadow-md lg:col-span-7 lg:p-5">
      <fieldset className="mt-4 px-4 py-5 md:px-6 lg:px-0">
        <div className="mb-4 text-xs font-bold uppercase leading-tight text-neutral-600">
          <span>{formatMessage({ id: 'paymentMethods', defaultMessage: 'Payment methods' })}</span>
        </div>
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
          {options.map((option, index) => (
            <div key={index} className="flex flex-col p-6">
              <div className="flex flex-row">
                <input
                  id={option.id}
                  name="notification-method"
                  type="radio"
                  defaultChecked={option.default}
                  value={option.value}
                  className="h-4 w-4 border-gray-300 text-accent-400 focus:ring-accent-400"
                  onChange={(e) => onChange(e.target.value)}
                />
                <label htmlFor={option.id} className="ml-3 block text-sm font-medium text-gray-700 dark:text-light-100">
                  {option.label}
                </label>
              </div>
              {!!PaymentMethodComponent && PaymentMethodComponent}
            </div>
          ))}
        </div>
      </fieldset>
    </section>
  );
};

export default Checkout;
