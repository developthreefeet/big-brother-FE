'use client';

import AccountManagement from '@/features/account/ui/AccountManagement';
import Profile from '@/features/account/ui/Profile';

const Page = () => {
  return (
    <div className="flex flex-col space-y-6">
      <Profile />
      <hr />
      <AccountManagement />
    </div>
  );
};

export default Page;
