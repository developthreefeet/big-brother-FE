import AccountManagement from '@/features/account/ui/AccountManagement';
import Profile from '@/features/account/ui/Profile';
import { mockUser } from '@/shared/mock/user';

const page = () => {
  return (
    <div className="flex flex-col space-y-6">
      <Profile user={mockUser} />
      <hr />
      <AccountManagement />
    </div>
  );
};

export default page;
