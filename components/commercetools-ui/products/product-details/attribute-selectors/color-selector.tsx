import React from 'react';
import { CheckIcon } from '@heroicons/react/solid';
import { Variant } from '@Types/product/Variant';

type Props = {
  onChangeVariant: (variant: Variant) => void;
  variants: Variant[];
  selectedVariant: Variant;
};

interface UIColor {
  name: string;
  key: string;
  bgColor: string;
  selectedColor: string;
  variant: Variant;
}

const ColorSelector: React.FC<Props> = ({ variants, onChangeVariant, selectedVariant }) => {
  const grayFix = (word: string) => (word === 'grey' || word === 'black' ? 'gray' : word);

  const colors =
    typeof variants[0].attributes.color === 'string'
      ? ([
          ...new Map(
            variants?.map((v: Variant) => [
              v.attributes.color,
              {
                name: v.attributes.color,
                key: v.attributes.color.toLowerCase(),
                variant: v,
                bgColor: `bg-${grayFix(v.attributes.color.toLowerCase())}-500`,
                selectedColor: `ring-${grayFix(v.attributes.color.toLowerCase())}-500`,
              },
            ]),
          ).values(),
        ].filter((item) => item.key) as UIColor[])
      : ([
          ...new Map(
            variants?.map((v: Variant) => [
              v.attributes.color?.key,
              {
                name: v.attributes.color?.label,
                key: v.attributes.color?.key,
                variant: v,
                bgColor: `bg-${grayFix(v.attributes.color?.key)}-500`,
                selectedColor: `ring-${grayFix(v.attributes.color?.key)}-500`,
              },
            ]),
          ).values(),
        ].filter((item) => item.key) as UIColor[]);
  return (
    <div className="flex flex-row flex-wrap">
      {colors.map((color) => (
        <button
          type="button"
          key={color.key}
          className={`mr-2 flex h-8 w-8 items-center justify-center rounded-sm ${color.bgColor} focus:${color.selectedColor}`}
          onClick={() => onChangeVariant(color.variant)}
        >
          {selectedVariant.sku === color.variant.sku && <CheckIcon className="h-4 w-4 text-black" />}
        </button>
      ))}
    </div>
  );
};

export default ColorSelector;
