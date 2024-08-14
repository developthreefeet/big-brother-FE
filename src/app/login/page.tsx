'use client';

import { useJoinEmailStore } from '@/features/account/model/useJoinEmailStore';
import AlreadyLoggedInNotice from '@/features/account/ui/AlreadyLoggedInNotice';
import ChangePassword from '@/features/account/ui/ChangePassword';
import GoToJoin from '@/features/account/ui/GoToJoin';
import LoginForm from '@/features/account/ui/LoginForm';
import { getCookie } from 'cookies-next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
  const { resetVerificationComplete } = useJoinEmailStore();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    resetVerificationComplete();
    const accessToken = getCookie('accessToken');

    if (accessToken) {
      setLoading(true);
      router.push('/main');
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <AlreadyLoggedInNotice />;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-14 ">
        <Image
          className="mb-4 w-auto h-auto"
          src="/static/mju-tree.png"
          alt="Tree"
          width={80}
          height={80}
          priority
        />
        <h1 className=" font-bold text-lg text-gray-300">MyongJi Univ.</h1>
        <h1 className=" mb-8 font-bold text-3xl">Big Brother</h1>
        <LoginForm />
        <ChangePassword />
      </div>
      <GoToJoin />
    </>
  );
};

export default Page;
