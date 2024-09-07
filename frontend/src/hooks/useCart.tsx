import { useState } from 'react';
import { PizzaCartItem } from '@/types/PizzaCartItem';
import { formatNumber } from '@/utils/formatNumber';

export function useCart() {
  const [cart, setCart] = useState<PizzaCartItem[]>([]);

  const calculateTotal = (): string => {
    let total = 0;
    cart.forEach(({ count, price }) => (total += count * price));
    return `$${formatNumber(total)}`;
  };

  const addItemToCart = (pizzaCartItem: PizzaCartItem) => {
    const itemCartExists = cart.some((item) => item.id === pizzaCartItem.id);
    let updatedCart: PizzaCartItem[] = [];

    if (itemCartExists) {
      updatedCart = cart.map((item) => {
        if (item.id === pizzaCartItem.id) {
          item.count++;
        }
        return item;
      });

      setCart(updatedCart);
    } else {
      updatedCart = [...cart, pizzaCartItem];
      setCart(updatedCart);
    }
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
