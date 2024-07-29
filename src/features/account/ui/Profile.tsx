import { User } from '@/shared/types/type';
import { Button } from '@/shared/ui/ui/button';
import Title from '@/widgets/Title';
import Link from 'next/link';

const Profile = ({ user }: { user: User }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col space-y-2">
        <Title text={`${user.name} 님`} />
        <div className="flex flex-col space-y-1">
          <p>{user.email}</p>
          <div className="flex items-center space-x-1 text-gray-300 text-sm">
            <p>{user.college}</p>
            <p>{user.department}</p>
          </div>
        </div>
      </div>
      <Button variant="secondary">
        <Link href="/modify">정보 수정</Link>
      </Button>
    </div>
  );
};

export default Profile;
