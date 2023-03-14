/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { FC, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Facet } from '@commercetools/frontend-domain-types/result/Facet';
import { RangeFacet } from '@commercetools/frontend-domain-types/result/RangeFacet';
import { Product } from 'cofe-ct-b2b-ecommerce/types/product/Product';
import { TwoThumbInputRange } from 'react-two-thumb-input-range';
import { URLParam } from 'helpers/utils/updateURLParams';

type RangeInputValues = [number, number];

export type AvailabilityRangeProps = {
  products: Product[];
  facets: Facet[];
  updateAvailabilityFilteringParams?: (params: URLParam[]) => void;
  availabilityFacet: Facet;
};

const AvailabilityRange: FC<AvailabilityRangeProps> = ({
  products,
  facets,
  updateAvailabilityFilteringParams,
  availabilityFacet,
}) => {
  const router = useRouter();
  const widthRef = useRef(null);
  const [inputWidth, setInputWidth] = useState(0);
  const [availability, setAvailability] = useState<RangeInputValues>([null, null]);
  const [values, setValues] = useState<RangeInputValues>([availability[0], availability[1]]);
  const [updatedValues, setUpdatedValues] = useState<RangeInputValues>([availability[0], availability[1]]);

  const updateValues = (updatedValues: RangeInputValues) => {
    if (updatedValues[1] <= updatedValues[0]) return;
    setValues([Math.max(updatedValues[0], 0), updatedValues[1]]);
    // @ts-ignore
    setUpdatedValues([updatedValues[0] === 0 ? availabilityFacet.min : updatedValues[0], updatedValues[1]]);
  };

  //   const convertCents = (amountInCents: number) => Math.trunc(amountInCents / 100);

  useEffect(() => {
    const setDefaults = () => {
      // Setting defaults for min and max price
      if (availabilityFacet) {
        const { min, max, minSelected, maxSelected } = availabilityFacet as RangeFacet;

        setAvailability([Math.max(0, min), max]);

        // Setting default values
        if (typeof minSelected !== 'undefined' && typeof maxSelected !== 'undefined') {
          updateValues([minSelected, maxSelected]);
        } else {
          updateValues([Math.max(0, min), max]);
        }
      }
    };

    setInputWidth(widthRef.current.clientWidth);
    setDefaults();
  }, [router, facets, products]);

  useEffect(() => {
    const params = [
      { key: `facets[${availabilityFacet.identifier}][min]`, value: `${updatedValues[0]}` },
      { key: `facets[${availabilityFacet.identifier}][max]`, value: `${updatedValues[1]}` },
    ];

    updateAvailabilityFilteringParams?.(params);
  }, [updatedValues]);

  return (
    <div className="w-full">
      <div className="mb-4 flex justify-between" ref={widthRef}>
        <h6 className="text-gray-500">{values[0]}</h6>
        <h6 className="text-gray-500">{values[1]}</h6>
      </div>
      {availability[0] !== null && (
        <TwoThumbInputRange
          thumbStyle={{ borderRadius: '0', transform: 'rotate(45deg)' }}
          inputStyle={{ width: inputWidth }}
          trackColor="#E91E63"
          railColor="#C4C4C4"
          thumbColor="#E91E63"
          showLabels={false}
          onChange={updateValues}
          values={values}
          min={availability[0]}
          max={availability[1]}
        />
      )}
    </div>
  );
};

export default AvailabilityRange;
