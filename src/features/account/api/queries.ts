import { useMutation, useQuery } from '@tanstack/react-query';
import { JOIN_API } from '.';

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
