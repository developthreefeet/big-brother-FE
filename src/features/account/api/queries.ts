import { useMutation, useQuery } from '@tanstack/react-query';
import { JOIN_API } from '.';
import { PostJoinProps } from './types';

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
