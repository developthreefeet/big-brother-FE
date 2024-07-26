'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEmailStore } from './useEmailStore';

export const useJoin = () => {
  const { resetVerificationComplete } = useEmailStore();

  const userNameRegex = /^[가-힣]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[a-z\d@$!%*?&]{8,20}$/;

  const userSchema = z.object({
    userName: z
      .string()
      .min(2, { message: '2글자 이상 입력해주세요.' })
      .max(15, { message: '15글자 이하로 입력해 주세요.' })
      .regex(userNameRegex, { message: '한글 조합만 사용 가능합니다.' }),
    password: z
      .string()
      .min(8, { message: '8글자 이상 입력해주세요.' })
      .max(20, { message: '20글자 이하로 입력해주세요.' })
      .regex(passwordRegex, {
        message: '영문 소문자, 숫자, 특수문자(@$!%*?&) 조합이어야 합니다.',
      }),
    college: z.string().min(1, { message: '단과대를 선택해주세요.' }),
    department: z.string().min(1, { message: '학과를 선택해주세요.' }),
  });

  const form = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      userName: '',
      password: '',
      college: '',
      department: '',
    },
  });

  const {
    formState: { errors },
  } = form;

  const isSubmitButtonEnabled =
    !errors.userName &&
    form.getValues('college') &&
    form.getValues('department') &&
    !errors.password;

  const router = useRouter();

  const onSubmit = (data: any) => {
    console.log(data);
    resetVerificationComplete();
    router.push('/login');
  };

  return {
    form,
    onSubmit,
    isSubmitButtonEnabled,
  };
};
