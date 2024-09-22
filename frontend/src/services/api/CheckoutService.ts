import { axiosClient } from './axiosClient';
import type { PizzaCartItem } from '@/types/PizzaCartItem';
import type { ApiError } from '@/types/api/ApiError';
import type { CheckoutData } from '@/types/api/Checkout';

export async function checkout(token: string, cart: PizzaCartItem[]): Promise<CheckoutData | ApiError> {
  try {
    const { data } = await axiosClient.post('/checkouts', cart, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const checkoutData = data as CheckoutData;
    return checkoutData;
  } catch (error) {
    console.error(error);
    return error as ApiError;
  }
}
