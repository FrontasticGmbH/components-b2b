import React, { useEffect, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { Product } from '@Types/product/Product';
import { Variant } from '@Types/product/Variant';
import WishlistButton from 'components/commercetools-ui/wishlist-button';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import { useBundlesHook } from 'helpers/hooks/useSubscription';
import { useCart } from 'frontastic';
import { UIProduct } from '..';
import AddToCartButton from '../add-to-cart-button';
import ConfigurableComponents from '../configurable-components';
import Subscriptions from '../subscriptions';

type Props = {
  product: UIProduct;
  subscriptions?: Product[];
  configurableComponents?: Product[];
  onChangeVariantIdx: (idx: number) => void;
  hideAddTocartButton?: boolean;
  hideWishlistButton?: boolean;
  hideAvailability?: boolean;
  variant: Variant;
};

const DropdownVariantSelector: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  product,
  subscriptions,
  configurableComponents,
  variant,
  onChangeVariantIdx,
  hideAddTocartButton,
  hideWishlistButton,
  hideAvailability,
  className,
}) => {
  const { data: cart } = useCart();
  const { formatMessage: formatProductMessage } = useFormat({ name: 'product' });
  const { handleBundleSelect: handleSubscriptionSelect, selectedBundles: selectedSubscriptions } =
    useBundlesHook(subscriptions);
  const { setSelectedBundles: setConfigurableComponents, selectedBundles: selectedConfiguirableComponent } =
    useBundlesHook(configurableComponents);

  const [isAddToCartDisabled, setIsAddToCartDisabled] = useState(false);
  const [selected, setSelected] = useState(variant.sku);
  const [query, setQuery] = useState('');

  const filteredSKUs =
    query === ''
      ? product?.variants.map((item) => item.sku)
      : product?.variants
          .map((item) => item.sku)
          .filter((item) => item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, '')));

  const restockDate = new Date();
  restockDate.setDate(restockDate.getDate() + (variant?.availability?.restockableInDays || 0));

  useEffect(() => {
    if (selected) {
      const index = product?.variants?.findIndex((variant) => variant.sku === selected);
      if (index > -1) {
        onChangeVariantIdx(index);
      }
    }
  }, [selected]);
  return (
    <div className={`w-full ${className}`}>
      <p className="text-3xl font-bold">
        {CurrencyHelpers.formatForCurrency(product?.price)}
        <span className="ml-8 text-base font-normal">Each</span>
      </p>
      {product?.variants?.length > 1 && (
        <div className="mt-6">
          <p className="text-sm font-semibold">SKUs:</p>

          <Combobox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <div className="">
                <Combobox.Input
                  className="input input-primary"
                  displayValue={(sku: string) => sku}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </Combobox.Button>
              </div>
              <Transition
                as={React.Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
              >
                <Combobox.Options className="absolute z-40 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredSKUs.length === 0 && query !== '' ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">Nothing found.</div>
                  ) : (
                    filteredSKUs.map((sku) => (
                      <Combobox.Option
                        key={sku}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-teal-600 text-white' : 'text-gray-900'
                          }`
                        }
                        value={sku}
                      >
                        {({ selected, active }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{sku}</span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? 'text-white' : 'text-teal-600'
                                }`}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>
      )}
      {!hideAvailability && variant.isOnStock && (
        <p className="text-sm text-gray-400">{`Available Qty: ${variant?.availability?.availableQuantity || 0}`}</p>
      )}
      {!hideAvailability && !variant.isOnStock && (
        <>
          <p className="text-sm text-gray-400">
            {formatProductMessage({ id: 'outOfStock', defaultMessage: 'Out of stock' })}
          </p>
          {!!variant?.availability?.restockableInDays && (
            <p className="text-sm text-gray-400">{`Expected restock date: ${restockDate.toLocaleDateString()}`}</p>
          )}
        </>
      )}
      {!!subscriptions?.length && (
        <Subscriptions
          subscriptions={subscriptions}
          onSubscriptionSelect={handleSubscriptionSelect}
          selectedSubscriptions={selectedSubscriptions}
        />
      )}
      {!!configurableComponents?.length && (
        <ConfigurableComponents
          className="py-4"
          product={product}
          configurableComponents={configurableComponents}
          updateAddToCartButtonState={setIsAddToCartDisabled}
          onConfigurationUpdate={setConfigurableComponents}
        />
      )}
      {!hideAddTocartButton && (
        <AddToCartButton
          disabled={isAddToCartDisabled}
          selectedSubscriptions={selectedSubscriptions}
          selectedConfigurableComponents={selectedConfiguirableComponent}
          variant={variant}
        />
      )}
      {!hideWishlistButton && (
        <div className="mt-2">
          <WishlistButton variant={variant} isCompact />
        </div>
      )}
    </div>
  );
};

export default DropdownVariantSelector;
