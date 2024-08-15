'use client';

import { useChangePwEmailStore } from '@/features/account/model/useChangePwEmailStore';
import EmailForm from '@/features/account/ui/EmailForm';
import NewPasswordForm from '@/features/account/ui/NewPasswordForm';

const Page = () => {
  const { verificationComplete } = useChangePwEmailStore();

  return (
    <>
      <EmailForm />
      {verificationComplete && <NewPasswordForm />}
    </>
  );
};

export default Page;
