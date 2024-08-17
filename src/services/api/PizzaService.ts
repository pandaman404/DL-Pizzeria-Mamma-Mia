import type { Pizza } from '@/types/Pizza';
import { axiosClient } from './axiosClient';

export async function getPizzas(): Promise<Pizza[]> {
  try {
    const { data } = await axiosClient.get('/pizzas');
    const pizzas = data as Pizza[];
    return pizzas;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Unexpected error');
    }
  }
}
