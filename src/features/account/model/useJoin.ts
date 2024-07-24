'use client';

import { useForm } from 'react-hook-form';

export const useJoin = () => {
  const form = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return {
    form,
    onSubmit,
  };
};
