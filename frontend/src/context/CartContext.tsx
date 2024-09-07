import { createContext, useContext } from 'react';

import { useCart } from '@/hooks/useCart';
import { CartContextType } from '@/types/context/CartContextType';

export const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { cart, calculateTotal, addItemToCart, removeItemFromCart } = useCart();

  return (
    <CartContext.Provider value={{ cart, calculateTotal, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
