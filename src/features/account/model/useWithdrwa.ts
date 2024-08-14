'use client';

import { deleteToken } from '@/shared/lib/utils';
import { useDeleteWithdraw } from '../api/queries';
import { useRouter } from 'next/navigation';
import { toast } from '@/shared/ui/ui/use-toast';

export const useWithdraw = () => {
  const mutation = useDeleteWithdraw();
  const router = useRouter();

  const handleWithdrawClick = async () => {
    try {
      await mutation.mutateAsync();
      deleteToken();
      router.push('/login');
    } catch (error) {
      toast({
        variant: 'destructive',
        description: '회원 탈퇴에 실패했습니다. 관리자에게 문의하세요.',
      });
    }
  };

  return {
    handleWithdrawClick,
  };
};
