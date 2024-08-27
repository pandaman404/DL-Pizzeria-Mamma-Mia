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

export async function getPizzaById(id: string): Promise<Pizza | null> {
  try {
    const { data } = await axiosClient.get(`/pizzas/${id}`);
    const pizza = data as Pizza;
    return pizza;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return null;
  }
}
