import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useChangePwEmailStore } from './useChangePwEmailStore';
import { useGetVerification } from '../api/queries';
import { useEffect, useState } from 'react';

export const useChangePwEmail = () => {
  const { setIsEmailValid, setIsSubmitted } = useChangePwEmailStore();
  const [isLoading, setIsLoading] = useState(false);

  const emailSchema = z.object({
    email: z.string().email('Invalid email address'),
  });

  const form = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    },
  });

  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(form.getValues('email'));
  }, [form.getValues('email')]);

  const { refetch: refetchGetVerification } = useGetVerification(email);

  const onSubmit = async () => {
    setIsSubmitted(true);
    setIsLoading(true);

    const { isError } = await refetchGetVerification();

    if (isError) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }

    setIsLoading(false);
  };

  return { form, onSubmit, isLoading };
};
