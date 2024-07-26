import Link from 'next/link';
import { Button } from '@/shared/ui/ui/button';

const GoToJoin = () => {
  return (
    <div className="flex flex-col mt-10 space-y-3">
      <p className="text-lg font-bold">아직 회원이 아니시라면,</p>
      <Link href="/join/email">
        <Button variant="secondary" className="w-full">
          회원가입
        </Button>
      </Link>
    </div>
  );
};

export default GoToJoin;
