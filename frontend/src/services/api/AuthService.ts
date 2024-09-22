import { axiosClient } from './axiosClient';
import { ApiError } from '@/types/api/ApiError';
import { ApiAuthResponse } from '@/types/api/ApiResponse';

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
