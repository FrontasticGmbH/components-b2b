import React, { Fragment, useState } from 'react';
import { Account } from '@commercetools/frontend-domain-types/account/Account';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import { BusinessUnit } from '@Types/business-unit/BusinessUnit';
import { Organization } from '@Types/organization/organization';
import Typography from 'components/commercetools-ui/typography';
import { useFormat } from 'helpers/hooks/useFormat';
import { Reference, ReferenceLink } from 'helpers/reference';
import Image, { NextFrontasticImage } from 'frontastic/lib/image';
import BusinessUnitDropdownTree from '../business-unit/dropdown-tree';
import BusinessUnitRole from '../business-unit/role';
import StorePicker from '../business-unit/store-picker';
import AccountButton from './account-button';
import CartButton from './cart-button';
import { FlyingCartButton } from './flying-cart-button';
import HeaderMenu from './header-menu';
import SearchButton from './search-button';
import WishListButton from './wishlist-button';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export interface Link {
  name: string;
  reference: Reference;
}

export interface HeaderProps {
  organization: Organization;
  organizationTree: BusinessUnit[];
  tagline?: string;
  links: Link[];
  wishlistItemCount?: number;
  logo: { media: NextFrontasticImage } | NextFrontasticImage;
  logoLink: Reference;
  account: Account;
  accountLink: Reference;
  businessUnitLink: Reference;
  wishlistLink?: Reference;
  cartLink: Reference;
}

const Header: React.FC<HeaderProps> = ({
  organization,
  organizationTree,
  tagline,
  links,
  wishlistItemCount,
  logo,
  logoLink,
  account,
  accountLink,
  businessUnitLink,
  wishlistLink,
  cartLink,
}) => {
  const [open, setOpen] = useState(false);
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });

  return (
    <div className="fixed-screen-width lg:relative-width">
      {/* Mobile menu */}
      <HeaderMenu open={open} setOpen={setOpen} links={links} navigation={{ categories: [] }} />

      <header className="relative">
        {tagline && (
          <p className="flex items-center justify-center bg-primary-400 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
            <Typography>{tagline}</Typography>
          </p>
        )}
        <div className="h-12 bg-stone-100 px-6 drop-shadow-md">
          {!!account && (
            <div className="pt-2">
              <span>
                {formatAccountMessage({ id: 'welcome', defaultMessage: 'Welcome' }) +
                  ', ' +
                  (account?.firstName ?? account?.lastName ?? 'User')}
              </span>
              <BusinessUnitDropdownTree tree={organizationTree} />
              <BusinessUnitRole organization={organization} />
              <StorePicker organization={organization} />
              <span className="px-4">Country: US</span>
              <span className="px-4">Language: English</span>
            </div>
          )}
        </div>
        <div className="h-10 border-b-2 bg-primary-400 px-6 text-white">
          <div className="float-right flex grow items-center pt-2">
            {!!account && (
              <>
                <WishListButton wishlistItemCount={wishlistItemCount} wishlistLink={wishlistLink} />
                <FlyingCartButton />
              </>
            )}
            <AccountButton
              account={account}
              accountLink={accountLink}
              organization={organization}
              businessUnitLink={businessUnitLink}
            />
            {!!account && <CartButton cartLink={cartLink} organization={organization} />}
          </div>
        </div>
        <nav aria-label="Top" className="mx-auto max-w-full border-b border-gray-200 px-6 lg:px-0">
          {/* Secondary navigation */}
          <div className="h-full">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <ReferenceLink target={logoLink} className="flex h-full items-center py-4 pr-2 md:py-3">
                <span className="sr-only">Catwalk</span>
                <div className="relative h-14 w-[60px] sm:w-[120px]">
                  <Image
                    media={logo.media ? logo.media : { media: {} }}
                    className="dark:invert"
                    layout="fill"
                    objectFit="contain"
                    alt="Logo"
                  />
                </div>
              </ReferenceLink>

              {!!account && (
                <div className="flex items-center lg:hidden">
                  <button
                    type="button"
                    className="-ml-2 rounded-md bg-none p-2 text-primary-400 dark:text-light-100"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              )}

              {/* Mega menus */}
              {!!account && (
                <Popover.Group className="hidden lg:block lg:flex-1 lg:self-stretch">
                  <div className="flex h-full items-end space-x-8">
                    {links.map((link, id) => (
                      <ReferenceLink
                        key={id}
                        target={link.reference}
                        className="flex border-r-2 px-4 py-2 text-lg font-semibold text-primary-200 hover:text-primary-500 dark:text-light-100"
                      >
                        <Typography>{link.name}</Typography>
                      </ReferenceLink>
                    ))}
                  </div>
                </Popover.Group>
              )}

              <div className="flex flex-col items-center justify-end">
                {!!account && (
                  <div className="flex w-full grow items-center py-2">
                    {/* <DarkModeWidget className="mr-4 text-primary-400 hover:text-primary-500 dark:text-light-100" /> */}
                    <SearchButton />
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
