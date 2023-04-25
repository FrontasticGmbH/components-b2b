import React from 'react';
import { Variant } from '@Types/product/Variant';
import KeyValueSelector from './key-value-selector';
import TextSelector from './text-selector';

type Props = {
  onChangeVariant: (variant: Variant) => void;
  variants: Variant[];
  selectedVariant: Variant;
  attributeKey: string;
};

const GenericSelector: React.FC<Props> = ({ variants, onChangeVariant, selectedVariant, attributeKey }) => {
  const firstVariant = variants.find((variant) => typeof variant.attributes?.[attributeKey] !== 'undefined');

  if (firstVariant && typeof firstVariant.attributes[attributeKey] === 'object') {
    return (
      <KeyValueSelector
        attributeKey={attributeKey}
        onChangeVariant={onChangeVariant}
        variants={variants}
        selectedVariant={selectedVariant}
      />
    );
  }

  return (
    <TextSelector
      attributeKey={attributeKey}
      onChangeVariant={onChangeVariant}
      variants={variants}
      selectedVariant={selectedVariant}
    />
  );
};

export default GenericSelector;
