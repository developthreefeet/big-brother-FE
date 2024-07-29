'use client';

import { mockUser } from '@/shared/mock/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const useModifyProfile = () => {
  const userNameRegex = /^[가-힣]+$/;

  const userSchema = z.object({
    userName: z
      .string()
      .min(2, { message: '2글자 이상 입력해주세요.' })
      .max(15, { message: '15글자 이하로 입력해 주세요.' })
      .regex(userNameRegex, { message: '한글 조합만 사용 가능합니다.' }),
    college: z.string().min(1, { message: '단과대를 선택해주세요.' }),
    department: z.string().min(1, { message: '학과를 선택해주세요.' }),
  });

  const form = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      userName: mockUser.name,
      college: mockUser.college,
      department: mockUser.department,
    },
  });

  const router = useRouter();

  const onSubmit = (data: any) => {
    //정보 수정 api
    console.log(data);
    router.push('/mypage');
  };

  return {
    form,
    onSubmit,
  };
};
