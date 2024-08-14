import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import {
  CHANGE_PW_API,
  JOIN_API,
  LOGIN_API,
  MYPAGE_API,
  WITHDRAW_API,
} from '.';
import {
  GetEmailCodeVerificationResData,
  GetProfileResData,
  GetVerificationResData,
  PatchChangePwProps,
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
    queryFn: () => JOIN_API.verification(email),
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
    queryFn: () => JOIN_API.emailCodeVerification(email, code),
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

export const useGetProfile = (
  options?: UseQueryOptions<GetProfileResData, AxiosError>,
) => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: MYPAGE_API.profile,
    ...options,
  });
};

export const usePatchChangePw = (): UseMutationResult<
  {},
  Error,
  PatchChangePwProps,
  unknown
> => {
  return useMutation({
    mutationFn: (props: PatchChangePwProps) => CHANGE_PW_API.changePw(props),
  });
};

export const useDeleteWithdraw = () => {
  return useMutation({
    mutationFn: WITHDRAW_API.withdraw,
  });
};
