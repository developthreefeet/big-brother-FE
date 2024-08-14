import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useChangePwEmailStore } from './useChangePwEmailStore';
import { useGetVerification } from '../api/queries';
import { useEffect, useState } from 'react';
import { toast } from '@/shared/ui/ui/use-toast';

export const useChangePwEmail = () => {
  const { setIsEmailValid, setIsSubmitted, email, setEmail } =
    useChangePwEmailStore();
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

  useEffect(() => {
    const emailValue = form.getValues('email');
    setEmail(emailValue);
  }, [form.watch('email')]);

  const { refetch: refetchGetVerification } = useGetVerification(email);

  const onSubmit = async () => {
    setIsSubmitted(true);
    setIsLoading(true);

    const { isError, error } = await refetchGetVerification();

    if (isError) {
      if (error.response?.status === 400) {
        setIsEmailValid(true);
      } else {
        toast({
          variant: 'destructive',
          description:
            '가입한 이메일 검증에 실패했습니다. 관리자에게 문의하세요.',
        });
      }
    } else {
      setIsEmailValid(false);
    }

    setIsLoading(false);
  };

  return { form, onSubmit, isLoading };
};
