'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import JoinForm from '@/features/account/ui/JoinForm';
import { useEmailStore } from '@/features/account/model/useEmailStore';

const Page = () => {
  const router = useRouter();
  const { verificationComplete } = useEmailStore();

  useEffect(() => {
    if (!verificationComplete) {
      router.push('/join/email');
    }
  }, [verificationComplete]);

  return (
    <>
      <h3 className="font-bold">정보를 입력해 주세요.</h3>
      <JoinForm />
    </>
  );
};

export default Page;
