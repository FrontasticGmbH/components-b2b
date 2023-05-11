import { useState } from 'react';

const useI18n = () => {
  const [country, setCountry] = useState('GB');

  return { country };
};

export default useI18n;
