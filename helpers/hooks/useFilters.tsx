import React, { useState, useEffect } from 'react';
import { XIcon } from '@heroicons/react/solid';

interface Filter<T> {
  label: string;
  key: string;
  value: boolean;
  predicate: (t: T) => boolean;
}

function FilterHook<T>(initialFilters: Filter<T>[], items: T[]) {
  const [filters, setFilters] = useState<Filter<T>[]>(initialFilters);
  const [filteredItems, setFilteredItems] = useState<T[]>();

  const reset = () => {
    setFilters(initialFilters);
    setFilteredItems(items);
  };

  const updateFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(
      filters.map((filter) => {
        if (filter.key === e.target.name) {
          return {
            ...filter,
            value: e.target.checked,
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
          items.filter((order) => {
            return filters.reduce((prev, filter) => prev || (filter.value && filter.predicate(order)), false);
          }),
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
              className={`mr-4 cursor-pointer rounded-md py-1 px-2 ${
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
