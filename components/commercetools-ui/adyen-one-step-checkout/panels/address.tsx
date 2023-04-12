import React, { useState, useEffect } from 'react';
import { Address } from '@commercetools/frontend-domain-types/account/Address';
import { ShippingMethod } from '@commercetools/frontend-domain-types/cart/ShippingMethod';
import { ProjectSettings } from '@commercetools/frontend-domain-types/ProjectSettings';
import { CountryOption } from 'helpers/countryOptions';
import { useFormat } from 'helpers/hooks/useFormat';
import { getTaxedCountries } from 'helpers/utils/getTaxedCountries';
import { useCart } from 'frontastic/provider';
import { FormData } from '..';
import { mapToCartStructure } from '../mapFormData';
import AddressForm from './addressForm';
import AddressSelection from './addressSelection';

type AddressProps = {
  data: FormData;
  updateData: (data: FormData) => void;
  billingIsSameAsShipping: boolean;
  toggleBillingAddressOption: () => void;
};

const Address: React.FC<AddressProps> = ({ data, updateData, billingIsSameAsShipping, toggleBillingAddressOption }) => {
  const [projectSettingsCountries, setProjectSettingsCountries] = useState<ProjectSettings>(null);
  const [shippingMethodsData, setShippingMethodsData] = useState<ShippingMethod[]>(null);
  const [availableCountryOptions, setAvailableCountryOptions] = useState<CountryOption[]>(null);
  const [selectedAddress, setSelectedAddress] = useState<Address>(null);
  const { getProjectSettings, getShippingMethods, updateCart } = useCart();
  const { formatMessage } = useFormat({ name: 'checkout' });

  useEffect(() => {
    (async () => {
      const shippingMethods = await getShippingMethods();
      getProjectSettings().then((data) => {
        setProjectSettingsCountries(data);
        setShippingMethodsData(shippingMethods);
      });
    })();
  }, []);

  useEffect(() => {
    if (!shippingMethodsData || !projectSettingsCountries) {
      const showMessageInDropdown = {
        data: '',
        display: `${formatMessage({
          id: 'no.countries.available.for.shipping',
          defaultMessage: 'Currently there are no countries available for shipping',
        })}`,
      };
      setAvailableCountryOptions([showMessageInDropdown]);
    } else {
      const totalCountries = getTaxedCountries(shippingMethodsData, projectSettingsCountries?.countries);

      setAvailableCountryOptions(totalCountries);
    }
  }, [projectSettingsCountries, shippingMethodsData]);

  const updateSelection = (address: FormData) => {
    setSelectedAddress(address);
    updateData(address ? address : ({ shippingCountry: data.shippingCountry } as FormData));
    const updatedData = mapToCartStructure(address, billingIsSameAsShipping);
    updateCart(updatedData);
  };

  useEffect(() => {
    if (!!data.shippingCountry && billingIsSameAsShipping) {
      updateSelection({
        ...data,
        billingCity: data.shippingCity,
        billingPostalCode: data.shippingPostalCode,
        billingCountry: data.shippingCountry,
        billingStreetName: data.shippingStreetName,
      });
    }
  }, [billingIsSameAsShipping]);

  return (
    <section
      aria-labelledby="cart-heading"
      className="bg-white px-4 py-5 md:rounded md:px-6 md:shadow-md lg:col-span-7"
    >
      <div className="mb-4 text-xs font-bold uppercase leading-tight text-neutral-600">
        <span>{formatMessage({ id: 'shippingTo', defaultMessage: 'Shipping to' })}</span>
      </div>

      <div>
        <AddressSelection updateSelection={updateSelection} className="mb-4" addressType="shipping" data={data} />
        {!!selectedAddress && (
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
        )}
        {!billingIsSameAsShipping && (
          <AddressSelection updateSelection={updateSelection} className="mb-4" addressType="billing" data={data} />
        )}
      </div>

      {!selectedAddress && (
        <AddressForm
          toggleBillingAddressOption={toggleBillingAddressOption}
          updateData={updateData}
          data={data}
          billingIsSameAsShipping={billingIsSameAsShipping}
          availableCountryOptions={availableCountryOptions}
        />
      )}
    </section>
  );
};

export default Address;
