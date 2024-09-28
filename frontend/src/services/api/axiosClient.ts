import type { ApiError } from '@/types/api/ApiError';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const apiError = error.response ? error.response.data.error : error.message;
    const customError: ApiError = {
      error: apiError || 'An error occurred',
    };
    return Promise.reject(customError);
  }
);
