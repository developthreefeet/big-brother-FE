'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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

  const onSubmit = (data: any) => {
    //로그인 api자리
    if (data.email === 'test@mju.ac.kr' && data.password === 'asdf123@') {
      setIsValidAccount(true);
      router.push('/main');
    } else {
      setIsValidAccount(false);
    }
  };

  return { form, onSubmit, isValidAccount };
};
