import { useCallback, useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';

const useRefinements = () => {
  const [limit, setLimit] = useState(25);
  const [cursor, setCursor] = useState<string>('offset:0');
  const [search, setSearch] = useState<string>('');

  const debouncedSearch = useDebounce(search);

  const page = Math.floor(+cursor.split(':')[1] / limit) + 1;

  const clearRefinements = useCallback(() => {
    setLimit(25);
    setSearch('');
  }, []);

  return {
    limit,
    page,
    setLimit,
    cursor,
    setCursor,
    search,
    debouncedSearch,
    setSearch,
    clearRefinements,
  };
};

export default useRefinements;
