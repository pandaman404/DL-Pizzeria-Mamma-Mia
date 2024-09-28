import type { Pizza } from '@/types/Pizza';
import type { ApiError } from '@/types/api/ApiError';
import { axiosClient } from './axiosClient';

export async function getPizzas(): Promise<Pizza[] | ApiError> {
  try {
    const { data } = await axiosClient.get('/pizzas');
    const pizzas = data as Pizza[];
    return pizzas;
  } catch (error) {
    console.error(error);
    throw error as ApiError;
  }
}

export async function getPizzaById(id: string): Promise<Pizza | ApiError> {
  try {
    const { data } = await axiosClient.get(`/pizzas/${id}`);
    const pizza = data as Pizza;
    return pizza;
  } catch (error) {
    console.error(error);
    throw error as ApiError;
  }
}
