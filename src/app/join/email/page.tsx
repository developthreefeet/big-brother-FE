'use client';

import AlreadyLoggedInNotice from '@/features/account/ui/AlreadyLoggedInNotice';
import JoinEmailForm from '@/features/account/ui/JoinEmailForm';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = getCookie('accessToken');

    if (accessToken) {
      router.push('/main');
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <AlreadyLoggedInNotice />;
  }

  return (
    <>
      <h3 className="font-bold">학교 이메일 인증</h3>
      <JoinEmailForm />
    </>
  );
};

export default page;
