import React, { useState, useEffect, useCallback } from 'react';
import { XIcon } from '@heroicons/react/solid';
import debounce from 'lodash.debounce';

interface Filter<T> {
  label: string;
  key: string;
  value: boolean;
  extraType?: 'date' | 'product';
  extraTypeValue?: string;
  predicate: (t: T, date?: string) => boolean;
}

function FilterHook<T>(initialFilters: Filter<T>[], items: T[]) {
  const [filters, setFilters] = useState<Filter<T>[]>(initialFilters);
  const [filteredItems, setFilteredItems] = useState<T[]>();

  const reset = () => {
    setFilters(initialFilters);
    setFilteredItems(items);
  };

  const ExtraField = React.memo(function ExtraField({ filter }: { filter: Filter<any> }) {
    const [extraFieldValue, setExtraFieldValue] = useState<string>(filter.extraTypeValue);

    const debouncedUpdateExtraFiled = useCallback(
      debounce((value) => {
        setFilters(
          filters.map((f) => {
            if (f.key === filter.key) {
              return {
                ...f,
                value: true,
                extraTypeValue: value,
              };
            }
            return f;
          }),
        );
      }, 500),
      [],
    );

    const updateExtraField = (value: string) => {
      setExtraFieldValue(value);
      debouncedUpdateExtraFiled(value);
    };

    if (!filter.extraType) {
      return null;
    }
    return (
      <input
        className="ml-2 text-black"
        onChange={(e) => updateExtraField(e.target.value)}
        name={filter.key}
        id={filter.key}
        value={extraFieldValue}
        type={filter.extraType === 'date' ? 'date' : 'text'}
      ></input>
    );
  });

  const updateFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(
      filters.map((filter) => {
        if (filter.key === e.target.name) {
          return {
            ...filter,
            value: e.target.checked,
            extraTypeValue: e.target.checked ? filter.extraTypeValue : '',
          };
        }
        return filter;
      }),
    );
  };

  useEffect(() => {
    if (filters?.length && items?.length) {
      if (filters.some((filter) => filter.value)) {
        setFilteredItems(
          items.filter((order) =>
            filters.reduce(
              (prev, filter) => prev || (filter.value && filter.predicate(order, filter.extraTypeValue)),
              false,
            ),
          ),
        );
      } else {
        setFilteredItems(items);
      }
    }
  }, [filters]);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const FiltersUI = React.useMemo(() => {
    const FilterComponent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className }) => {
      return (
        <div className={className}>
          {filters.map((filter) => (
            <label
              key={filter.key}
              htmlFor={filter.key}
              className={`cursor-pointer rounded-md py-1 px-2 ${
                filter.value ? 'bg-accent-400 text-white' : 'bg-gray-200'
              }`}
            >
              <div className="flexl inline flex-row items-center">
                {filter.value && <XIcon className="mr-2 inline h-4 w-4" />}
                <span className="text-sm font-light">{filter.label}</span>
              </div>
              <input
                className="hidden"
                type="checkbox"
                id={filter.key}
                name={filter.key}
                checked={filter.value}
                onChange={updateFilter}
              />
              {!!filter.extraType && <ExtraField filter={filter} />}
            </label>
          ))}
        </div>
      );
    };
    return FilterComponent;
  }, [filters]);

  return {
    reset,
    filteredItems,
    FiltersUI,
  };
}

export default FilterHook;
