import React, { Fragment } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { FlyingCartButton } from 'components/commercetools-ui/header/flying-cart-button';
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

  const navigation = data?.categories?.dataSource.items || { categories: [] };

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
            {navigation.map((category) => (
              <React.Fragment key={category.slug}>
                <NextLink href={category.slug}>
                  <a className={`${data.textColor} text-md px-2  py-2 font-semibold`}>
                    <Typography>{category.name}</Typography>
                  </a>
                </NextLink>
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
