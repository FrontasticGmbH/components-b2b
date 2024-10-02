import React, { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import useCustomRouter from '@/hooks/useCustomRouter';
import { Option } from '@/components/atoms/select/types';
import usePath from '@/hooks/usePath';
import { ContextShape, Location } from '@/components/organisms/shipping-and-language/types';
import useCart from '@/lib/hooks/useCart';
import { mapCountry } from '@/utils/mappers/map-country';
import { ProjectSettings } from '@shared/types/ProjectSettings';

const initialMarketState = {
  selectedLanguage: {} as Option,
  selectedLocation: {} as Location,
  locations: [] as Location[],
} as ContextShape;

export const ShipAndLanguageContext = createContext(initialMarketState);

const ShipAndLanguageProvider = ({
  children,
  projectSettings,
}: React.PropsWithChildren<{ projectSettings?: ProjectSettings }>) => {
  const router = useCustomRouter();

  const { path } = usePath();

  const { mutateAll: mutateAllCarts } = useCart();

  const locations = (projectSettings?.countries ?? []).map(mapCountry).map(
    ({ name, code, currencies, locales }) =>
      ({
        name,
        label: `${name} (${currencies[0]})`,
        value: code.toLowerCase(),
        flagName: code.toLowerCase(),
        defaultLanguage: locales[0].locale,
        languages: locales.map(({ name, locale }) => ({ name, value: locale })),
      }) as Location,
  );
  const { locale } = useParams();

  useEffect(() => {
    mutateAllCarts();
  }, [locale, mutateAllCarts]);

  const [selectedLocationValue, setSelectedLocationValue] = useState(locale?.split('-')[1]?.toLowerCase());

  const selectedLocation = locations.find((location) => location.value === selectedLocationValue) ?? locations[0];
  const selectedLanguage =
    selectedLocation?.languages.find((language) => language.value === locale) ?? selectedLocation?.languages[0];

  const onLanguageSelect = (language: string) => {
    router.push(path, { locale: language });
  };

  const onLocationSelect = (location: string) => {
    const locationObject = locations.find((l) => l.value === location);

    setSelectedLocationValue(location);

    if (!locationObject?.languages.find((language) => language.value === locale))
      onLanguageSelect(locationObject?.defaultLanguage ?? '');
  };

  return (
    <ShipAndLanguageContext.Provider
      value={{
        selectedLanguage,
        selectedLocation,
        locations,
        onLanguageSelect,
        onLocationSelect,
      }}
    >
      {children}
    </ShipAndLanguageContext.Provider>
  );
};
export default ShipAndLanguageProvider;
export const useShipAndLanguage = () => useContext(ShipAndLanguageContext);
