'use client';

import { useGetProfile } from '../api/queries';

export const useProfile = () => {
  const { data, isLoading, isError } = useGetProfile();

  console.log(data);

  return {
    data,
    isLoading,
    isError,
  };
};
