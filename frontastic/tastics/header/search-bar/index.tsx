import SearchButton from 'components/commercetools-ui/header/search-button';
import { useAccount } from 'helpers/hooks/useAccount';
import React from 'react';

const SearchBarTastic: React.FC<{ data: any }> = ({ data }) => {
  const { account } = useAccount();
  return (
    <div className={`flex h-full flex-row items-center ${data.bgColor}`}>
      {!!account && (
        <div className="flex w-full grow items-center py-2">
          {/* <DarkModeWidget className="mr-4 text-primary-400 hover:text-primary-500 dark:text-light-100" /> */}
          <SearchButton />
        </div>
      )}
    </div>
  );
};

export default SearchBarTastic;
