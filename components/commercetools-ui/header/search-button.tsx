import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/outline';
import SearchInput from './search-input';

const SearchButton: React.FC = () => {
  //next/router
  const router = useRouter();

  //show search input
  const [searching, setSearching] = useState(false);

  const startSearch = () => setSearching(true);

  const endSearch = () => setSearching(false);

  //input value
  const [searchValue, setSearchValue] = useState('');

  //handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  //handle submission
  const handleSubmit = () => {
    setSearching(false);
    router.push({ pathname: '/search', query: { query: searchValue } });
  };

  return (
    <div className="mr-4 flex">
      <SearchInput onBlur={endSearch} value={searchValue} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
};

export default SearchButton;
