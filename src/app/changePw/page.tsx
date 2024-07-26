'use client';

import { Button } from '@/shared/ui/ui/button';
import { Input } from '@/shared/ui/ui/input';
import { useState } from 'react';

const page = () => {
  const [isValid, setIsValid] = useState(true);

  return (
    <div className="flex flex-col space-y-15">
      <div className="flex flex-col space-y-5">
        <div>
          <p>이메일을 입력하세요.</p>
          <Input type="email" />
        </div>
        <Button className="w-full">확인</Button>
      </div>
      {isValid && (
        <div className="flex flex-col space-y-5  mt-16">
          <div>
            <p>새 비밀번호 입력</p>
            <Input type="password" />
          </div>
          <Button className="w-full">변경하기</Button>
        </div>
      )}
    </div>
  );
};

export default page;
