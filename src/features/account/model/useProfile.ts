'use client';

import { useEffect } from 'react';
import { useGetProfile } from '../api/queries';

export const useProfile = () => {
  const { data, isLoading, isError } = useGetProfile();

  useEffect(() => {
    if (data?.data?.memberName) {
      localStorage.setItem('userName', data.data.memberName);
    }
  }, [data]);

  return {
    data,
    isLoading,
    isError,
  };
};
