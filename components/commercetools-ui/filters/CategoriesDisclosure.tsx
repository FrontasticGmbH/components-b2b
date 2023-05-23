import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Facet } from '@Types/result/Facet';
import { Disclosure } from '@headlessui/react';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';
import { Product } from '@Types/product/Product';
import { GiThermometerCold } from 'react-icons/gi';
import { URLParam } from 'helpers/utils/updateURLParams';
import { useProducts } from 'frontastic';

type CategoriesDisclosureProps = {
  updateCategories: (params: URLParam[]) => void;
  products: Product[];
  facets: (Facet & { terms?: any[] })[];
};

const CategoriesDisclosure: React.FC<CategoriesDisclosureProps> = ({ updateCategories, products, facets }) => {
  const router = useRouter();
  const { categories } = useProducts();
  //   const [categories, setCategories] = useState([]);
  const facetCategories = facets.find((facet) => facet.identifier === 'categories.id');
  const [categoriesMap, setCategoriesMap] = useState({});

  const [terms, setTerms] = useState<any[]>(facetCategories?.terms);

  useEffect(() => {
    if (terms?.length) {
      const tempTerms = [...terms];

      for (let i = 0; i < terms.length; i++) {
        const identifier = router?.query[`facets[categiries.id][terms][${i}]`];
        if (!!identifier) {
          const item = tempTerms.find((tempItem) => tempItem.identifier === identifier);
          if (item) {
            item.selected = true;
          }
        }
      }

      setTerms(tempTerms);
    }
  }, [router?.query]);

  const updateSelected = (i: number) => {
    const termsValue = terms.map((term, index) => {
      if (index === i) {
        return {
          ...term,
          selected: !term.selected,
        };
      }
      return term;
    });
    setTerms(termsValue);

    updateCategories(
      termsValue
        .filter((term) => term.selected)
        .map((term, i) => ({ key: `facets[categories.id][terms][${i}]`, value: term.identifier })),
    );
  };
  useEffect(() => {
    if (!!categories?.length) {
      setCategoriesMap(
        categories.reduce((prev, curr) => {
          prev[curr.categoryId] = curr.name;
          return prev;
        }, {}),
      );
    }
  }, [categories]);

  return (
    <div className="max-w-xs border-y border-gray-200 py-6">
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between py-3 text-gray-400 hover:text-gray-500">
              <span className="font-medium text-neutral-600 dark:text-light-100">Categories</span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="grid gap-2 pt-6">
              {!!terms?.length &&
                terms.map((term, i) => (
                  <label className="text-gray-500" key={term.identifier}>
                    <input
                      id={term.identifier}
                      name={term.identifier}
                      type="checkbox"
                      className="input input-checkbox mr-2"
                      onChange={() => updateSelected(i)}
                      checked={term.selected}
                    />
                    {categoriesMap[term.identifier]}
                  </label>
                ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default CategoriesDisclosure;
