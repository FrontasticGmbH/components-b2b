import React, { FC, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Facet } from '@Types/result/Facet';
import { RangeFacet } from '@Types/result/RangeFacet';
import { Product } from '@Types/product/Product';
import { TwoThumbInputRange } from 'react-two-thumb-input-range';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { URLParam } from 'helpers/utils/updateURLParams';

type RangeInputValues = [number, number];

export type PriceRangeProps = {
  products: Product[];
  facets: Facet[];
  updatePriceFilteringParams?: (params: URLParam[]) => void;
};

const PriceRange: FC<PriceRangeProps> = ({ products, facets, updatePriceFilteringParams }) => {
  const router = useRouter();
  const widthRef = useRef(null);
  const [inputWidth, setInputWidth] = useState(0);
  const [minPrice, setMinPrice] = useState<number>(null);
  const [maxPrice, setMaxPrice] = useState<number>(null);
  const [values, setValues] = useState<RangeInputValues>([minPrice, maxPrice]);

  const updateValues = (updatedValues: RangeInputValues) => {
    if (updatedValues[1] <= updatedValues[0]) return;
    setValues(updatedValues);
  };

  const convertCents = (amountInCents: number) => Math.trunc(amountInCents / 100);

  useEffect(() => {
    const setDefaults = () => {
      // Setting defaults for min and max price
      const priceFacet = facets?.find(({ identifier }) => identifier == 'variants.price');

      if (priceFacet) {
        const { min, max, minSelected, maxSelected } = priceFacet as RangeFacet;
        const minConverted = convertCents(min);
        const maxConverted = convertCents(max);

        setMinPrice(minConverted);
        setMaxPrice(maxConverted);

        // Setting default values
        if (minSelected && maxSelected) {
          const minSelectedConverted = convertCents(minSelected);
          const maxSelectedConverted = convertCents(maxSelected);
          updateValues([minSelectedConverted, maxSelectedConverted]);
        } else updateValues([minConverted, maxConverted]);
      }
    };

    setInputWidth(widthRef.current.clientWidth);
    setDefaults();
  }, [router, facets, products]);

  useEffect(() => {
    const params = [
      { key: 'facets[variants.price][min]', value: `${values[0] * 100}` },
      { key: 'facets[variants.price][max]', value: `${values[1] * 100}` },
    ];

    updatePriceFilteringParams?.(params);
  }, [values]);

  return (
    <div className="w-full">
      <div className="mb-4 flex justify-between" ref={widthRef}>
        <h6 className="text-gray-500">{CurrencyHelpers.formatForCurrency(values[0] * 100)}</h6>
        <h6 className="text-gray-500">{CurrencyHelpers.formatForCurrency(values[1] * 100)}</h6>
      </div>
      {minPrice && (
        <TwoThumbInputRange
          inputStyle={{ width: inputWidth }}
          showLabels={false}
          onChange={updateValues}
          values={values}
          min={minPrice}
          max={maxPrice}
        />
      )}
    </div>
  );
};

export default PriceRange;
