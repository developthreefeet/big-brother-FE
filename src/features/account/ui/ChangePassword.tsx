import { Button } from '@/shared/ui/ui/button';
import { useRouter } from 'next/navigation';

const ChangePassword = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center mt-1">
      <p className="text-sm">비밀번호를 잊으셨나요?</p>
      <Button
        variant="link"
        className="text-blue-300"
        onClick={() => router.push('/changePw')}
      >
        비밀번호 변경
      </Button>
    </div>
  );
};

export default ChangePassword;
