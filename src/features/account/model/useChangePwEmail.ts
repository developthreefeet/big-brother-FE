'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useChangePwEmailStore } from './useChangePwEmailStore';

export const useChangePwEmail = () => {
  const { setIsEmailValid, setIsSubmitted } = useChangePwEmailStore();

  const emailSchema = z.object({
    email: z.string(),
  });

  const form = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: any) => {
    setIsSubmitted(true);
    if (data.email.includes('test')) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  return { form, onSubmit };
};
