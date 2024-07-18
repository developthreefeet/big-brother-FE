import { Button } from '@/shared/ui/ui/button';
import Title from '@/widgets/Title';

const page = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-2">
          <Title text="신현진 님" />
          <div className="flex flex-col space-y-1">
            <p>hello@mju.ac.kr</p>
            <div className="flex items-center space-x-1 text-gray-300 text-sm">
              <p>ict 융합대학</p>
              <p>융합소프트웨어학부</p>
            </div>
          </div>
        </div>
        <Button variant="secondary">정보 수정</Button>
      </div>
      <hr />
      <ul>
        <li>
          <Button
            variant="link"
            className="text-black p-0 hover:no-underline hover:opacity-50"
          >
            {`알림 설정`}
          </Button>
        </li>
        <li>
          <Button
            variant="link"
            className="text-black p-0 hover:no-underline hover:opacity-50"
          >
            {`로그아웃`}
          </Button>
        </li>
        <li>
          <Button
            variant="link"
            className="text-black p-0 hover:no-underline hover:opacity-50"
          >
            {`회원 탈퇴`}
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default page;
