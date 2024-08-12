'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { usePostLogin } from '../api/queries';
import { PostLoginProps } from '../api/types';
import { setCookie } from 'cookies-next';

export const useLogIn = () => {
  const router = useRouter();
  const [isValidAccount, setIsValidAccount] = useState<boolean | string>(
    'notCheck',
  );

  const logInSchema = z.object({
    email: z.string().min(1, { message: '이메일을 입력해주세요.' }),
    password: z.string().min(1, { message: '비밀번호를 입력해주세요.' }),
  });

  const form = useForm({
    resolver: zodResolver(logInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginQuery = usePostLogin();

  const onSubmit = async (data: any) => {
    const loginData: PostLoginProps = {
      memberEmail: data.email,
      memberPass: data.password,
    };

    try {
      const result = await loginQuery.mutateAsync(loginData);
      setIsValidAccount(true);
      setCookie('accessToken', result.data.accessToken);
      setCookie('refreshToken', result.data.refreshToken);
      console.log('성공');
      router.push('/main');
    } catch (error) {
      console.log(error);
      setIsValidAccount(false);
    }
  };

  return { form, onSubmit, isValidAccount };
};
