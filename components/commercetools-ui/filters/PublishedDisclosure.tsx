import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Disclosure } from '@headlessui/react';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';
import { URLParam } from 'helpers/utils/updateURLParams';

type PublishedDisclosureProps = {
  updatePublished: (params: URLParam[]) => void;
};

const PublishedDisclosure: FC<PublishedDisclosureProps> = ({ updatePublished }) => {
  const router = useRouter();
  const [currentPublishedState, setCurrentPublishedState] = useState([
    {
      label: 'Show published',
      value: 'T',
      checked: true,
    },
    { label: 'Show unpublished', value: 'F', checked: true },
  ]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const items = currentPublishedState.map((item) => {
      if (item.value === e.target.name) {
        return {
          ...item,
          checked: e.target.checked,
        };
      }
      return item;
    });

    setCurrentPublishedState(items);

    updatePublished(
      items
        .filter((item) => item.checked)
        .map((item, i) => ({ key: `facets[published][terms][${i}]`, value: item.value })),
    );
  };

  useEffect(() => {
    const tempItems = [...currentPublishedState];

    for (let i = 0; i < currentPublishedState.length; i++) {
      const identifier = router?.query[`facets[published][terms][${i}]`];
      if (!!identifier) {
        const item = tempItems.find((tempItem) => tempItem.value === identifier);
        if (item) {
          item.checked = true;
        }
      }
    }

    setCurrentPublishedState(
      currentPublishedState.map((item) => {
        for (let i = 0; i < currentPublishedState.length; i++) {
          const identifier = router?.query[`facets[published][terms][${i}]`];

          if (!!identifier && item.value === identifier) {
            return {
              ...item,
              checked: true,
            };
          }
        }
        return {
          ...item,
          checked: false,
        };
      }),
    );
  }, [router?.query]);

  return (
    <div className="max-w-xs border-y border-gray-200 py-6">
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between py-3 text-gray-400 hover:text-gray-500">
              <span className="font-medium text-neutral-600 dark:text-light-100">Preview products</span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="grid gap-2 pt-6">
              {currentPublishedState.map((option) => (
                <label className="text-gray-500" key={option.value}>
                  <input
                    id={option.value}
                    name={option.value}
                    type="checkbox"
                    className="input input-checkbox mr-2"
                    onChange={handleChange}
                    checked={option.checked}
                  />
                  {option.label}
                </label>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default PublishedDisclosure;
