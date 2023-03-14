import React from 'react';
import NextLink from 'next/link';
import Typography from 'components/commercetools-ui/typography';

const MegaMenuContent = ({ category, categoryIdx }) => {
  //i18n messages
  if (!category.subCategories?.length) {
    return null;
  }

  return (
    <div className="relative top-10 bg-white">
      <div className="mx-auto max-w-7xl px-12">
        <div className="mx-1 grid grid-cols-2 items-start gap-x-8 gap-y-10 px-8 pt-10 pb-12 shadow-md">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {category.subCategories.map((subCategory) => (
              <div key={subCategory.categoryId}>
                <NextLink href={subCategory.slug}>
                  <p id={`heading-${categoryIdx}`} className="cursor-pointer font-medium text-gray-900">
                    {subCategory.name}
                  </p>
                </NextLink>
                <ul
                  role="list"
                  aria-labelledby={`heading-${categoryIdx}`}
                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                >
                  {subCategory?.subCategories?.map((item) => (
                    <li key={item.name} className="flex">
                      <NextLink href={item.slug}>
                        <a className="hover:text-gray-800">
                          <Typography>{item.name}</Typography>
                        </a>
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuContent;
