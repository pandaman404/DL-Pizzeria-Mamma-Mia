import { useState } from 'react';
import { PizzaCartItem } from '@/types/PizzaCartItem';
import { pizzaCart } from '@/mocks/pizzas';
import { formatNumber } from '@/utils/formatNumber';

export function useCart() {
  const [cart, setCart] = useState<PizzaCartItem[]>(pizzaCart);

  const calculateTotal = (): string => {
    let total = 0;
    cart.forEach(({ count, price }) => (total += count * price));
    return `$${formatNumber(total)}`;
  };

  const addItemToCart = (pizzaId: string) => {
    const updatedCart = cart.map((item) => {
      if (item.id === pizzaId) {
        item.count++;
      }
      return item;
    });

    setCart(updatedCart);
  };

  const removeItemFromCart = (pizzaId: string) => {
    const itemFounded = cart.find((item) => item.id === pizzaId);

    if (itemFounded) {
      if (itemFounded.count === 1) {
        const updatedCart = cart.filter((item) => item.id !== pizzaId);
        setCart(updatedCart);
      } else {
        const updatedCart = cart.map((item) => {
          if (item.id === pizzaId) {
            item.count--;
          }
          return item;
        });

        setCart(updatedCart);
      }
    }
  };

  return {
    cart,
    calculateTotal,
    addItemToCart,
    removeItemFromCart,
  };
}
