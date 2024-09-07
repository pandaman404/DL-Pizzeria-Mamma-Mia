import type { AppContextType } from '@/types/context/AppContextType';
import { createContext, useContext } from 'react';

import { useCart } from '@/hooks/useCart';

export const CartContext = createContext<AppContextType>({} as AppContextType);

export const CartContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { cart, calculateTotal, addItemToCart, removeItemFromCart } = useCart();

  return (
    <CartContext.Provider value={{ cart, calculateTotal, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
