import type { User } from '@/types/User';
import { axiosClient } from './axiosClient';
import { ApiError } from '@/types/api/ApiError';

export async function authLogin(email: string, password: string): Promise<User | ApiError> {
  try {
    const { data } = await axiosClient.post('/auth/login', { email, password });
    const user = data as User;
    return user;
  } catch (error) {
    console.error(error);
    return error as ApiError;
  }
}
