import { Button } from '@/shared/ui/ui/button';

const AccountManagement = () => {
  return (
    <ul>
      {/* <li>
        <Button
          variant="link"
          className="text-black p-0 hover:no-underline hover:opacity-50"
        >
          {`알림 설정`}
        </Button>
      </li>*/}
      <li>
        <Button
          variant="link"
          className="text-black p-0 hover:no-underline hover:opacity-50"
        >
          {`로그아웃`}
        </Button>
      </li>
      {/*<li>
        <Button
          variant="link"
          className="text-black p-0 hover:no-underline hover:opacity-50"
        >
          {`회원 탈퇴`}
        </Button>
      </li>*/}
    </ul>
  );
};

export default AccountManagement;
