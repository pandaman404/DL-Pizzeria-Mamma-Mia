import { axiosClient } from './axiosClient';
import type { ApiError } from '@/types/api/ApiError';
import type { ApiAuthResponse } from '@/types/api/ApiResponse';
import type { User } from '@/types/User';

export async function authLogin(email: string, password: string): Promise<ApiAuthResponse | ApiError> {
  try {
    const { data } = await axiosClient.post('/auth/login', { email, password });
    const user = data as ApiAuthResponse;
    return user;
  } catch (error) {
    console.error(error);
    return error as ApiError;
  }
}

export async function authRegister(email: string, password: string): Promise<ApiAuthResponse | ApiError> {
  try {
    const { data } = await axiosClient.post('/auth/register', { email, password });
    const newUser = data as ApiAuthResponse;
    return newUser;
  } catch (error) {
    console.error(error);
    return error as ApiError;
  }
}

export async function authMe(token: string): Promise<User | ApiError> {
  try {
    const { data } = await axiosClient.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const loggedUser = data;
    return loggedUser;
  } catch (error) {
    console.error(error);
    return error as ApiError;
  }
}
