'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { usePatchModifyProfile } from '../api/queries';
import { toast } from '@/shared/ui/ui/use-toast';
import { useUserNameStore } from './useUserNameStore';

export const useModifyProfile = () => {
  const userNameRegex = /^[가-힣]+$/;

  const userSchema = z.object({
    userName: z
      .string()
      .min(2, { message: '2글자 이상 입력해주세요.' })
      .max(15, { message: '15글자 이하로 입력해 주세요.' })
      .regex(userNameRegex, { message: '한글 조합만 사용 가능합니다.' }),
  });

  const { userName } = useUserNameStore();

  const form = useForm({
    resolver: zodResolver(userSchema),
  });

  const router = useRouter();
  const { mutate: modifyProfile } = usePatchModifyProfile();

  const onSubmit = (data: any) => {
    //정보 수정 api
    try {
      modifyProfile(data.userName);
      toast({
        description: '정보 수정이 완료되었습니다.',
      });
      router.push('/mypage');
    } catch (error) {
      toast({
        variant: 'destructive',
        description: '정보 수정에 실패했습니다. 담당자에게 문의해주세요.',
      });
    }
  };

  return {
    form,
    onSubmit,
  };
};
