import axios from 'axios';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

export const authInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

authInstance.interceptors.request.use(
  async (config) => {
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

const handleUnauthorized = () => {
  deleteCookie('accessToken');
  deleteCookie('refreshToken');
  alert('세션이 만료되었습니다. 다시 로그인해주세요.');
  window.location.replace('/login');
};

authInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    //에러코드 임시로 달아둠
    if (error.response?.status === 401) {
      if (error.response?.data && 'code' in error.response.data) {
        // 리프레시 토큰이 유효하지 않을 때 (에러코드 임시)
        if (error.response.data.code === 1001) {
          handleUnauthorized();
        }
      } else {
        const accessToken = getCookie('accessToken');
        if (accessToken) {
          //refresh 토큰 재요청하는 api
          /*const res = await REFRESH_API.refreshToken({
            accessToken: accessToken,
            refreshToken: getCookie('refreshToken') as string,
          });
          setCookie('accessToken', res.data.accessToken);
          setCookie('refreshToken', res.data.refreshToken);*/
        } else {
          deleteCookie('accessToken');
          deleteCookie('refreshToken');
          window.location.replace('/login');
        }
      }
    }
    return Promise.reject(error);
  },
);
