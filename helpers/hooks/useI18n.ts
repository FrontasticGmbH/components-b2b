import { useState } from 'react';

const useI18n = () => {
  const [country, setCountry] = useState('US');

  return { country };
};

export default useI18n;
