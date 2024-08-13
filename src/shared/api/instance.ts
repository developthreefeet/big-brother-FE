import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const instance = axios.create({
  baseURL: `${baseUrl}/api/big-brother`,
  timeout: 1000 * 60,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

const reqInterceptor = instance.interceptors.request.use(
  (config) => {
    console.log('Request Interceptor', config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const resInterceptor = instance.interceptors.response.use(
  (response) => {
    console.log('Response Interceptor', response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
