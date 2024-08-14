import { REFRESH_API } from '@/features/account/api';
import axios from 'axios';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { deleteToken } from '../lib/utils';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const instance = axios.create({
  baseURL: `${baseUrl}/api/v1`,
  timeout: 1000 * 60,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    /*
    const statusCode = error.response?.status;
    const errorCode = error.response?.data?.responseCode;

    if (statusCode === 400 || statusCode === 404) {
      if (errorCode) {
        // ACCESS 토큰 만료
        if (errorCode === 'TOKEN_001') {
          try {
            // Access Token 재발급
            const refreshData = await REFRESH_API.refresh();
            setCookie('accessToken', refreshData.data.accessToken);
            setCookie('refreshToken', refreshData.data.refreshToken);
            // 기존 요청 재시도
            error.config.headers['Authorization'] =
              `Bearer ${refreshData.data.accessToken}`;
            return instance.request(error.config);
          } catch (refreshError: any) {
            // Refresh 토큰이 만료되었거나, 리프레시 실패 시
            if (refreshError.response?.data?.code === 'TOKEN_002') {
              deleteToken();
              alert('세션이 만료되었습니다. 다시 로그인해주세요.');
              window.location.replace('/login');
            }
            return Promise.reject(refreshError);
          }
        }
        // Refresh 토큰이 만료된 경우
        if (errorCode === 'TOKEN_002') {
          deleteToken();
          alert('리프레시 토큰이 만료되었습니다. 다시 로그인해주세요.');
          window.location.replace('/login');
          return;
        }
      }
    }*/
    return Promise.reject(error);
  },
);
