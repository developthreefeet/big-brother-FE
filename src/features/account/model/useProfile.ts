'use client';

import { useGetProfile } from '../api/queries';

export const useProfile = () => {
  const { data, isLoading, isError } = useGetProfile();

  return {
    data,
    isLoading,
    isError,
  };
};
