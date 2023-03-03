import React from 'react';
import NextLink from 'next/link';
import { HomeIcon } from '@heroicons/react/solid';

export type BreadcrumbProps = {
  Separator?: React.ReactNode;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ children, Separator }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <NextLink href="/">
              <a className="text-gray-400 hover:text-gray-500">
                <HomeIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span className="sr-only">Home</span>
              </a>
            </NextLink>
          </div>
        </li>
        {React.Children.map(children, (Child) => {
          return (
            <li>
              <span className="mr-4 text-gray-400">{Separator}</span>
              <b className="font-medium capitalize dark:text-light-100">{Child}</b>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
