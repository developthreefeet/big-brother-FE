'use client';

import { useEffect } from 'react';
import { useGetProfile } from '../api/queries';
import { useUserNameStore } from './useUserNameStore';

export const useProfile = () => {
  const { data, isLoading, isError } = useGetProfile();
  const { setUserName } = useUserNameStore();

  useEffect(() => {
    if (data?.data?.memberName) {
      setUserName(data.data.memberName);
    }
  }, [data]);

  return {
    data,
    isLoading,
    isError,
  };
};
