import * as React from 'react';
import { SWRConfig } from 'swr';
import { useAccount as useAccountHook } from '../../../helpers/hooks/useAccount';
import { fetchApiHub } from '../../lib/fetch-api-hub';
import DarkModeProvider from '../DarkMode';
import { FrontasticState, getFrontasticState } from './FrontasticState';
import { UseAccount } from './UseAccount';

interface EnhancedFrontasticState extends FrontasticState {
  useAccount: UseAccount;
}
const initialState: EnhancedFrontasticState = {
  useCart: {} as any,
  useWishlist: {} as any,
  useSubscriptions: {} as any,
  useAccount: {} as any,
  useAdyen: {} as any,
  useProducts: {} as any,
  useQuotes: {} as any,
  useStores: {} as any,
};

const FrontasticContext = React.createContext<EnhancedFrontasticState>(initialState);

export const FrontasticProvider: React.FC = ({ children }) => {
  const frontasticState: FrontasticState = getFrontasticState();
  const account = useAccountHook();

  const state = {
    ...frontasticState,
    useAccount: account,
  };
  return (
    <SWRConfig value={{ fetcher: fetchApiHub }}>
      <DarkModeProvider>
        <FrontasticContext.Provider value={state}>{children}</FrontasticContext.Provider>
      </DarkModeProvider>
    </SWRConfig>
  );
};

const checkContext = (context: FrontasticState) => {
  if (!context) {
    throw new Error('Expected to be wrapped in FrontasticProvider');
  }
};

export const useCart = () => {
  const context = React.useContext(FrontasticContext);
  checkContext(context);
  return context.useCart;
};

export const useAccount = () => {
  const context = React.useContext(FrontasticContext);
  checkContext(context);
  return context.useAccount;
};

export const useWishlist = () => {
  const context = React.useContext(FrontasticContext);
  checkContext(context);
  return context.useWishlist;
};

export const useAdyen = () => {
  const context = React.useContext(FrontasticContext);
  checkContext(context);
  return context.useAdyen;
};

export const useProducts = () => {
  const context = React.useContext(FrontasticContext);
  checkContext(context);
  return context.useProducts;
};

export const useQuotes = () => {
  const context = React.useContext(FrontasticContext);
  checkContext(context);
  return context.useQuotes;
};

export const useStores = () => {
  const context = React.useContext(FrontasticContext);
  checkContext(context);
  return context.useStores;
};

export const useSubscriptions = () => {
  const context = React.useContext(FrontasticContext);
  checkContext(context);
  return context.useSubscriptions;
};
