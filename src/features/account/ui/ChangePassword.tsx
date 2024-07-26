import Link from 'next/link';
import { Button } from '@/shared/ui/ui/button';

const ChangePassword = () => {
  return (
    <div className="flex justify-center items-center mt-1">
      <p className="text-sm">비밀번호를 잊으셨나요?</p>
      <Button variant="link" className="text-blue-300">
        <Link href="/account">비밀번호 변경</Link>
      </Button>
    </div>
  );
};

export default ChangePassword;
