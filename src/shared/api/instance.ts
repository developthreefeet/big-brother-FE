import { REFRESH_API } from '@/features/account/api';
import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';
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
    const refreshToken = getCookie('refreshToken');
    if (accessToken && config.url !== '/members/refresh') {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    if (config.url === '/members/refresh') {
      config.headers['Authorization'] = `Bearer ${refreshToken}`;
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
    const statusCode = error.response?.status;
    const errorCode = error.response?.data.responseCode;

    if (statusCode === 400) {
      // ACCESS 토큰 만료
      if (errorCode === 'TOKEN_001') {
        try {
          // Access Token 재발급
          const refreshData = await REFRESH_API.refresh();
          setCookie('accessToken', refreshData.accessToken);
          setCookie('refreshToken', refreshData.refreshToken);
          // 기존 요청 재시도
          error.config.headers['Authorization'] =
            `Bearer ${refreshData.accessToken}`;
          return instance.request(error.config); // 기존 요청 재시도
        } catch (refreshError: any) {
          // Refresh 토큰이 만료되었거나, 리프레시 실패 시
          deleteToken();
          alert('세션이 만료되었습니다. 다시 로그인해주세요.');
          window.location.replace('/login');
          return;
        }
      }
      // Refresh 토큰이 만료된 경우
      else if (errorCode === 'TOKEN_002') {
        deleteToken();
        alert('세션이 만료되었습니다. 다시 로그인해주세요.');
        window.location.replace('/login');
        return;
      }
    }
    window.location.replace('/404');
  },
);
