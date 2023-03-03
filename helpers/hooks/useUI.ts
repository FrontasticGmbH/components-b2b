import { useState } from 'react';
import { UseUIState } from '@Types/hooks/UseUIState';

export const useUI = (): UseUIState => {
  const [isFlyingCartOpen, setIsFlyingCartOpen] = useState(false);

  const toggleFlyingCart = (state?: boolean) => {
    if (typeof state !== 'undefined') {
      setIsFlyingCartOpen(state);
    } else {
      setIsFlyingCartOpen(!isFlyingCartOpen);
    }
  };
  return {
    isFlyingCartOpen,
    toggleFlyingCart,
  };
};
