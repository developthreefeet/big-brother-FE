'use client';

import { Button } from '@/shared/ui/ui/button';
import Title from '@/widgets/Title';
import Link from 'next/link';

import { GetProfileResData } from '../api/types';

interface ProfileProps {
  data?: GetProfileResData;
}

const Profile = ({ data }: ProfileProps) => {
  const affiliationType = data?.affiliationListDto?.affiliationTypeList[0];
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col space-y-2">
        <Title text={`${data?.memberName} 님`} />
        <div className="flex flex-col space-y-1">
          <p>{data?.email}</p>
          <div className="flex items-center space-x-1 text-gray-300 text-sm">
            <p>{affiliationType?.councilType}</p>
            <p>{affiliationType?.affiliationCode}</p>
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
