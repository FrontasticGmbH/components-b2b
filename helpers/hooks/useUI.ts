import { UseUIState } from '../../frontastic/provider/UiState/UseUIState';
import { useState } from 'react';

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
