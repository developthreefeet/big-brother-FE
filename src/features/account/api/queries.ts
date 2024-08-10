import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { JOIN_API } from '.';
import { VerificationData } from './types';

export const useGetVerification = (email: string) => {
  return useQuery({
    queryKey: ['emailVerification'],
    queryFn: () => JOIN_API.verification(email),
    enabled: false,
  });
};
