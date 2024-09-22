import type { PizzaCartItem } from '../PizzaCartItem';

export interface CheckoutData {
  message: string;
  cart: PizzaCartItem[];
  user: User;
}

interface User {
  email: string;
  id: string;
  iat: number;
}
