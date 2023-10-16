import { Context, createContext, useContext } from 'react';
import { useUI } from 'helpers/hooks/useUI';
import { UseUIState } from './UseUIState';

const UIStateContext: Context<UseUIState> = createContext({
  isFlyingCartOpen: false,
  toggleFlyingCart: () => null,
});

export const UIStateProvider = ({ children }) => {
  const { isFlyingCartOpen, toggleFlyingCart } = useUI();

  return <UIStateContext.Provider value={{ isFlyingCartOpen, toggleFlyingCart }}>{children}</UIStateContext.Provider>;
};

export const useUIStateContext = () => useContext(UIStateContext);
