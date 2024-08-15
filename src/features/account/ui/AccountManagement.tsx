'use client';

import { deleteToken } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/ui/button';
import { useRouter } from 'next/navigation';
import { useWithdraw } from '../model/useWithdraw';
import { useUserNameStore } from '../model/useUserNameStore';

const AccountManagement = () => {
  const router = useRouter();
  const { handleWithdrawClick } = useWithdraw();
  const { resetUserName } = useUserNameStore();

  return (
    <ul>
      <li>
        <Button
          variant="link"
          className="text-black p-0 hover:no-underline hover:opacity-50"
          onClick={() => router.push('/changePw')}
        >
          비밀번호 변경
        </Button>
      </li>
      <li>
        <Button
          variant="link"
          className="text-black p-0 hover:no-underline hover:opacity-50"
          onClick={() => {
            deleteToken();
            router.push('/login');
          }}
        >
          로그아웃
        </Button>
      </li>
      <li>
        <Button
          variant="link"
          className=" p-0 hover:no-underline hover:opacity-50 text-red-600"
          onClick={() => {
            handleWithdrawClick();
          }}
        >
          회원탈퇴
        </Button>
      </li>
    </ul>
  );
};

export default AccountManagement;
