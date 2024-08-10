import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { JOIN_API } from '.'; // Adjust the import path
import { AxiosError, AxiosResponse } from 'axios';
import { PostVerificationResData, VerificationData } from './types';

export const useGetVerification = (
  email: VerificationData,
  options?: UseQueryOptions<AxiosResponse<PostVerificationResData>, AxiosError>,
) => {
  return useQuery<AxiosResponse<PostVerificationResData>, AxiosError>(
    ['emailVerification'],
    () => JOIN_API.verification(email),
    {
      enabled: false,
      ...options,
    },
  );
};
