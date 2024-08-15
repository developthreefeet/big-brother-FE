'use client';

import { Button } from '@/shared/ui/ui/button';
import Title from '@/widgets/Title';
import Link from 'next/link';

import { useProfile } from '../model/useProfile';
import { useEffect } from 'react';

const Profile = () => {
  const { data, isLoading, isError, refetch } = useProfile();

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return <div>프로필 로딩중...</div>;
  }

  if (isError) {
    return <div>프로필을 불러오는 데 실패했습니다. 관리자에게 문의하세요.</div>;
  }

  if (data) {
    const college = data.data.affiliationListDto?.affiliationTypeList[0];
    const department = data.data.affiliationListDto?.affiliationTypeList[1];

    return (
      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-2">
          <Title text={`${data.data.memberName} 님`} />
          <div className="flex flex-col space-y-1">
            <p>{data.data.email}</p>
            <div className="flex items-center space-x-1 text-gray-300 text-sm">
              <p>{college?.affiliationCode}</p>
              <p>{department?.affiliationCode}</p>
            </div>
          </div>
        </div>
        <Button variant="secondary">
          <Link href="/modify">정보 수정</Link>
        </Button>
      </div>
    );
  }
};

export default Profile;
