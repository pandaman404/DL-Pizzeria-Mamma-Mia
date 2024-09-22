import type { PizzaCartItem } from '../PizzaCartItem';

export interface CartContextType {
  cart: PizzaCartItem[];
  calculateTotal: () => string;
  addItemToCart: (pizzaCartItem: PizzaCartItem) => void;
  removeItemFromCart: (pizzaId: string) => void;
  completeCheckout: (token: string | null) => Promise<void>;
}
