import type { PizzaCartItem } from '../PizzaCartItem';

export interface AppContextType {
  cart: PizzaCartItem[];
  calculateTotal: () => string;
  addItemToCart: (pizzaCartItem: PizzaCartItem) => void;
  removeItemFromCart: (pizzaId: string) => void;
}
