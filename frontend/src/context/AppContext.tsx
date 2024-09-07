import type { AppContextType } from '@/types/context/AppContextType';
import { createContext, useContext } from 'react';

import { useCart } from '@/hooks/useCart';

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { cart, calculateTotal, addItemToCart, removeItemFromCart } = useCart();

  return (
    <AppContext.Provider value={{ cart, calculateTotal, addItemToCart, removeItemFromCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
