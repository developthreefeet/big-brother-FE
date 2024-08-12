import { useMutation, useQuery } from '@tanstack/react-query';
import { JOIN_API, LOGIN_API } from '.';
import { PostJoinProps, PostLoginProps } from './types';

export const useGetVerification = (email: string) => {
  return useQuery({
    queryKey: ['emailVerification'],
    queryFn: () => JOIN_API.verification(email),
    enabled: false,
  });
};

export const usePostEmailCode = (email: string) => {
  return useMutation({
    mutationFn: () => JOIN_API.emailCode(email),
  });
};

export const useGetEmailCodeVerification = (email: string, code: string) => {
  return useQuery({
    queryKey: ['emailCodeVerification'],
    queryFn: () => JOIN_API.emailCodeVerification(email, code),
    enabled: false,
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
