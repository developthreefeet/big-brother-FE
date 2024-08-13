import { useMutation, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { JOIN_API, LOGIN_API } from '.';
import {
  GetEmailCodeVerificationResData,
  GetVerificationResData,
  PostJoinProps,
  PostLoginProps,
} from './types';
import { AxiosError } from 'axios';

export const useGetVerification = (
  email: string,
  options?: UseQueryOptions<GetVerificationResData, AxiosError>,
) => {
  return useQuery<GetVerificationResData, AxiosError>({
    queryKey: ['emailVerification', email],
    queryFn: async () => {
      const response = await JOIN_API.verification(email);
      return response.data;
    },
    enabled: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: false,
    ...options,
  });
};

export const usePostEmailCode = (email: string) => {
  return useMutation({
    mutationFn: () => JOIN_API.emailCode(email),
  });
};

export const useGetEmailCodeVerification = (
  email: string,
  code: string,
  options?: UseQueryOptions<GetEmailCodeVerificationResData, AxiosError>,
) => {
  return useQuery({
    queryKey: ['emailCodeVerification', email, code],
    queryFn: async () => {
      const response = await JOIN_API.emailCodeVerification(email, code);
      return response.data;
    },
    enabled: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: false,
    ...options,
  });
};

export const usePostJoin = () => {
  return useMutation({
    mutationFn: (props: PostJoinProps) => JOIN_API.join(props),
  });
};

export const usePostLogin = () => {
  return useMutation({
    mutationFn: (props: PostLoginProps) => LOGIN_API.login(props),
  });
};
