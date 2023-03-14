import React from 'react';
import { Variant } from 'cofe-ct-b2b-ecommerce/types/product/Variant';

type Props = {
  onChangeVariant: (variant: Variant) => void;
  variants: Variant[];
  selectedVariant: Variant;
  attributeKey: string;
};

export interface GenericAttribute {
  attributeValue: number;
  variant: Variant;
}

const KeyValueSelector: React.FC<Props> = ({ variants, onChangeVariant, selectedVariant, attributeKey }) => {
  const items = [
    ...new Map(
      variants?.map((v: Variant) => [
        v.attributes[attributeKey].key,
        { attributeValue: v.attributes[attributeKey].label, variant: v },
      ]),
    ).values(),
  ]
    .filter((item) => item.attributeValue)
    .sort((a, b) => a.attributeValue - b.attributeValue) as GenericAttribute[];

  return (
    <div className="flex flex-row flex-wrap">
      {items.map((item) => (
        <button
          type="button"
          key={item.attributeValue}
          className={`mr-2 flex items-center justify-center rounded-sm border-2 px-1 ${
            selectedVariant.sku === item.variant.sku ? 'border-0 bg-black text-white' : ''
          }`}
          onClick={() => onChangeVariant(item.variant)}
        >
          {item.attributeValue}
        </button>
      ))}
    </div>
  );
};

export default KeyValueSelector;
