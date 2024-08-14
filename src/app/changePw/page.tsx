'use client';

import { useChangePwEmailStore } from '@/features/account/model/useChangePwEmailStore';
import EmailForm from '@/features/account/ui/EmailForm';
import NewPasswordForm from '@/features/account/ui/NewPasswordForm';

const page = () => {
  const { isEmailValid } = useChangePwEmailStore();

  return (
    <>
      <EmailForm />
      {isEmailValid && <NewPasswordForm />}
    </>
  );
};

export default page;
