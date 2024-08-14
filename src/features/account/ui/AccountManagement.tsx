'use client';

import { Button } from '@/shared/ui/ui/button';
import { useRouter } from 'next/navigation';

const AccountManagement = () => {
  const router = useRouter();
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
        >
          로그아웃
        </Button>
      </li>
    </ul>
  );
};

export default AccountManagement;
