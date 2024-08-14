'use client';

import { useProfile } from '@/features/account/model/useProfile';
import AccountManagement from '@/features/account/ui/AccountManagement';
import Profile from '@/features/account/ui/Profile';

const Page = () => {
  const { data } = useProfile();
  return (
    <div className="flex flex-col space-y-6">
      <Profile data={data} />
      <hr />
      <AccountManagement />
    </div>
  );
};

export default Page;
