import React, { Fragment } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { FlyingCartButton } from 'components/commercetools-ui/header/flying-cart-button';
import MegaMenuContent from 'components/commercetools-ui/header/mega-menu-content';
import Typography from 'components/commercetools-ui/typography';
import { useAccount } from 'frontastic/provider';

type Props = {
  data: any;
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const NavigationTastic: React.FC<Props> = ({ data }) => {
  const { account } = useAccount();

  const navigation = data?.categories?.dataSource || { categories: [] };
  return (
    <div className={`${data.bgColor}`}>
      <Head>
        <title>commercetools Composable Frontend</title>
      </Head>
      {/* <HeaderMenu open={open} setOpen={setOpen} links={[]} navigation={navigation} /> */}

      {/* Mega menus */}
      {!!account && (
        <Popover.Group className="hidden lg:block lg:flex-1 lg:self-stretch">
          <div className="flex h-full items-end space-x-8">
            {navigation.categories.map((category, categoryIdx) => (
              <React.Fragment key={category.slug}>
                {!category.subCategories?.length && (
                  <NextLink href={category.slug}>
                    <a className={`${data.textColor} text-md px-2  py-2 font-semibold`}>
                      <Typography>{category.name}</Typography>
                    </a>
                  </NextLink>
                )}
                {!!category.subCategories?.length && (
                  <Popover className="flex">
                    {({ open }) => (
                      <>
                        <div className="relative flex">
                          <Popover.Button
                            className={classNames(
                              open ? 'border-indigo-600' : 'border-transparent ',
                              'text-md relative z-10 -mb-px flex items-center border-b-2 pt-px font-semibold transition-colors duration-200 ease-out',
                            )}
                          >
                            <p className={`${data.textColor} px-2 py-2`}>{category.name}</p>
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Popover.Panel className="absolute inset-x-0 z-10 text-gray-500 sm:text-sm">
                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                            <MegaMenuContent category={category} categoryIdx={categoryIdx} />
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                )}
              </React.Fragment>
            ))}
            {data.showQuickAdd && (
              <div className="inline h-full grow">
                <span className={`text-md flex justify-end px-4 py-2 font-semibold ${data.textColor}`}>
                  <FlyingCartButton />
                </span>
              </div>
            )}
          </div>
        </Popover.Group>
      )}
    </div>
  );
};

export default NavigationTastic;
