import React, { ChangeEvent } from 'react';
import { countryOptions } from 'helpers/countryOptions';
import { useFormat } from 'helpers/hooks/useFormat';

const AddressForm = ({
  updateData,
  data,
  billingIsSameAsShipping,
  toggleBillingAddressOption,
  availableCountryOptions,
}) => {
  const { formatMessage: formatCommonMessage } = useFormat({ name: 'common' });
  const { formatMessage } = useFormat({ name: 'checkout' });

  const handleChange = (e: ChangeEvent) => {
    const updatedData = {
      ...data,
      [(e.target as HTMLInputElement)?.name]: (e.target as HTMLInputElement)?.value,
    };
    updateData(updatedData);
  };
  return (
    <form className="border-t-4 border-neutral-100 bg-white md:border-t-0">
      <div className="mb-4">
        <label className="mb-2 block text-sm text-neutral-700" htmlFor="firstName">
          <span>{formatCommonMessage({ id: 'firstName', defaultMessage: 'First name' })}</span> *
        </label>
        <input
          className=" input input-primary"
          id="firstName"
          name="firstName"
          type="text"
          onChange={handleChange}
          value={data.firstName}
          required
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-sm text-neutral-700" htmlFor="lastName">
          <span>{formatCommonMessage({ id: 'lastName', defaultMessage: 'Last name' })}</span> *
        </label>
        <input
          className=" input input-primary"
          id="lastName"
          name="lastName"
          type="text"
          onChange={handleChange}
          value={data.lastName}
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-sm text-neutral-700" htmlFor="phone">
          {formatCommonMessage({ id: 'phone', defaultMessage: 'Phone number' })}
        </label>
        <input
          className=" input input-primary"
          id="phone"
          name="phone"
          type="text"
          onChange={handleChange}
          value={data.phone}
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-sm text-neutral-700" htmlFor="email">
          <span>{formatCommonMessage({ id: 'email', defaultMessage: 'Email' })}</span> *
        </label>
        <input
          className=" input input-primary"
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={data.email}
        />
      </div>

      <div className="mb-4 text-xs font-bold uppercase leading-tight text-neutral-600">
        <span>{formatMessage({ id: 'shippingAddress', defaultMessage: 'Shipping address' })}</span>
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-sm text-neutral-700" htmlFor="address">
          <span>{formatCommonMessage({ id: 'street.name', defaultMessage: 'Street name' })}</span> *
        </label>
        <input
          className=" input input-primary"
          id="shipping-street-name"
          name="shippingStreetName"
          type="text"
          onChange={handleChange}
          value={data.shippingStreetName}
          required
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-sm text-neutral-700" htmlFor="city">
          <span>{formatCommonMessage({ id: 'city', defaultMessage: 'City' })}</span> *
        </label>
        <input
          className=" input input-primary"
          id="shipping-city"
          name="shippingCity"
          type="text"
          onChange={handleChange}
          value={data.shippingCity}
          required
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-sm text-neutral-700" htmlFor="zip">
          <span>{formatCommonMessage({ id: 'zipCode', defaultMessage: 'Postal code' })}</span> *
        </label>
        <input
          className=" input input-primary"
          id="shipping-postalCode"
          name="shippingPostalCode"
          type="text"
          onChange={handleChange}
          value={data.shippingPostalCode}
          required
        />
      </div>

      <div>
        <label className="text-sm leading-tight text-neutral-700" htmlFor="shipping-country">
          <span>{formatCommonMessage({ id: 'country', defaultMessage: 'Country' })}</span> *
        </label>
        <select
          id="shipping-country"
          name="shippingCountry"
          className=" input input-primary"
          onChange={handleChange}
          value={data.shippingCountry}
        >
          <option key={-1} value="" disabled>
            {formatMessage({
              id: 'selectShippingCountry',
              defaultMessage: 'Please select a country',
            })}
          </option>
          {availableCountryOptions?.map(({ display, data }, index) => (
            <option key={index} value={data}>
              {formatCommonMessage({ id: `country.${data}`, defaultMessage: display })}
            </option>
          ))}
        </select>
        <div></div>
      </div>

      <label className="mt-4 flex items-center rounded bg-neutral-200 p-4 text-sm">
        <input
          id="billing-same-as-shipping"
          type="checkbox"
          className="mr-2 text-xl"
          checked={billingIsSameAsShipping}
          onChange={toggleBillingAddressOption}
        />
        {formatMessage({
          id: 'billingDetailsLabel',
          defaultMessage: 'Billing address is the same as shipping address',
        })}
      </label>

      {!billingIsSameAsShipping && (
        <>
          <div className="my-4 text-xs font-bold uppercase leading-tight text-neutral-600">
            <span>{formatMessage({ id: 'billingInformation', defaultMessage: 'Billing information' })}</span>
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm text-neutral-700" htmlFor="address">
              <span>{formatCommonMessage({ id: 'street.name', defaultMessage: 'Street name' })}</span> *
            </label>
            <input
              className="input input-primary"
              id="billing-street-name"
              name="billingStreetName"
              type="text"
              onChange={handleChange}
              value={data.billingStreetName}
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm text-neutral-700" htmlFor="city">
              <span>{formatCommonMessage({ id: 'city', defaultMessage: 'City' })}</span> *
            </label>
            <input
              className="input input-primary"
              id="billing-city"
              name="billingCity"
              type="text"
              onChange={handleChange}
              value={data.billingCity}
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm text-neutral-700" htmlFor="zip">
              <span>{formatCommonMessage({ id: 'zipCode', defaultMessage: 'Postal code' })}</span> *
            </label>
            <input
              className="input input-primary"
              id="billing-postalCode"
              name="billingPostalCode"
              type="text"
              onChange={handleChange}
              value={data.billingPostalCode}
              required
            />
          </div>

          <div>
            <label className="text-sm leading-tight text-neutral-700" htmlFor="billing-country">
              <span>{formatCommonMessage({ id: 'country', defaultMessage: 'Country' })}</span> *
            </label>
            <select
              id="billing-country"
              name="billingCountry"
              className="input input-primary"
              onChange={handleChange}
              value={data.billingCountry}
            >
              <option value=""></option>
              {countryOptions.map(({ display, data }, index) => (
                <option key={index} value={data}>
                  {formatCommonMessage({ id: `country.${data}`, defaultMessage: display })}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
    </form>
  );
};

export default AddressForm;
