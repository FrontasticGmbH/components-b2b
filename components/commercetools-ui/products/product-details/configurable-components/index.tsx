import React, { HTMLAttributes, useEffect, useState } from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import { Product } from 'cofe-ct-b2b-ecommerce/types/product/Product';
import { Variant } from 'cofe-ct-b2b-ecommerce/types/product/Variant';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { UIProduct } from '..';
import ConfigurableComponent from './configurable-component';
import styles from './index.module.scss';

interface ConfigurableComponent extends Product {
  selectedVariant?: Variant;
  tempVariant?: Variant;
}

type Props = {
  product: UIProduct;
  configurableComponents?: Product[];
  updateAddToCartButtonState: (state: boolean) => void;
  onConfigurationUpdate: (variants: Variant[]) => void;
};

const ConfigurableComponents: React.FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  configurableComponents,
  product,
  updateAddToCartButtonState,
  onConfigurationUpdate,
  className,
}) => {
  const [selectedComponentIdx, setSelectedComponentIdx] = useState(0);
  const [components, setComponents] = useState<ConfigurableComponent[]>([]);
  const [updateCentAmount, setUpdateCentAmount] = useState(0);
  const [currentCentAmount, setCurrentCentAmount] = useState(0);

  const handleChangeVariantIdx = (variantIdx: number, componentIdx: number) => {
    setComponents((prevComponents) =>
      prevComponents.map((component, i) => {
        if (i !== componentIdx) {
          return component;
        }
        return {
          ...component,
          tempVariant: component.variants?.[variantIdx],
        };
      }),
    );
  };

  const handleAdvanceNextStep = (i: number) => {
    setSelectedComponentIdx(i + 1);
    setComponents(
      components.map((component, idx) => {
        if (i !== idx) {
          return component;
        }
        return {
          ...component,
          selectedVariant: { ...component.tempVariant },
        };
      }),
    );
  };

  const jumpToStep = (i: number) => {
    setComponents(
      components.map((component, idx) => {
        if (selectedComponentIdx !== idx) {
          return component;
        }
        return {
          ...component,
          tempVariant: undefined,
        };
      }),
    );
    setSelectedComponentIdx(i);
  };

  useEffect(() => {
    if (components.length) {
      const updated = components.reduce((prev, item) => {
        return prev + (item.tempVariant?.price?.centAmount || 0);
      }, 0);
      const current = components.reduce((prev, item) => prev + (item.selectedVariant?.price?.centAmount || 0), 0);

      const isDisabled = components.some((component) => !component.selectedVariant);

      setUpdateCentAmount(updated - currentCentAmount);
      setCurrentCentAmount(current);
      updateAddToCartButtonState(isDisabled);
      if (!isDisabled) {
        onConfigurationUpdate(components.map((component) => component.selectedVariant));
      }
    }
  }, [components, currentCentAmount]);

  useEffect(() => {
    if (configurableComponents.length) {
      setComponents(configurableComponents);
    }
  }, [configurableComponents]);

  if (!configurableComponents.length) {
    return null;
  }
  return (
    <div className={`${className}`}>
      <div className={styles.slider}>
        <div className={styles.sliderLeft}>
          <ul>
            {components.map((component, i) => (
              <button
                key={component.productId}
                onClick={() => selectedComponentIdx > i && jumpToStep(i)}
                className={i === selectedComponentIdx && styles.isSelected}
                type="button"
              >
                <span>{component.name}</span>
                {selectedComponentIdx > i && <CheckIcon className="absolute right-2 ml-2 h-4 w-4" />}
              </button>
            ))}
          </ul>
        </div>
        <div className={styles.sliderRight}>
          {components.map((component, i) => (
            <input
              className={styles.selector}
              key={component.productId}
              id={component.productId}
              name="slide"
              type="radio"
              checked={i === selectedComponentIdx}
            />
          ))}
          {components.map((component, i) => (
            <article className={`${styles.article} flex flex-col justify-between`} key={component.productId}>
              <div className={styles.ledgend}></div>
              <ConfigurableComponent
                className="p-4"
                product={component}
                onChangeVariantIdx={(idx) => handleChangeVariantIdx(idx, i)}
                variant={component.tempVariant}
              />
              <div className="flex justify-center p-4">
                <button className="button button-primary" onClick={() => handleAdvanceNextStep(i)} type="button">
                  {`Continue ${updateCentAmount >= 0 ? '+' : ''}${CurrencyHelpers.formatForCurrency(updateCentAmount)}`}
                </button>
              </div>
            </article>
          ))}
          {components.length === selectedComponentIdx && (
            <article className="mx-4 h-[350px] border border-accent-400 p-4">
              <span className="text-2xl font-semibold">Configuration:</span>
              <ul>
                {components.map((component) => (
                  <li key={component.productId}>
                    <span className="font-bold">{component.name}: </span>
                    <span className="">{component.selectedVariant.sku}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <span className="text-2xl">Total: </span>
                <p className="text-3xl font-bold">
                  {`${CurrencyHelpers.formatForCurrency(product?.price)} + ${CurrencyHelpers.formatForCurrency(
                    currentCentAmount,
                  )}`}
                </p>
              </div>
              <button className="mt-8 underline" onClick={() => jumpToStep(0)} type="button">
                Edit
              </button>
            </article>
          )}

          {components.length !== selectedComponentIdx && (
            <div className="mt-4">
              <span className="text-2xl">Total: </span>
              <p className="text-3xl font-bold">
                {`${CurrencyHelpers.formatForCurrency(product?.price)} + ${CurrencyHelpers.formatForCurrency(
                  currentCentAmount,
                )}`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfigurableComponents;
