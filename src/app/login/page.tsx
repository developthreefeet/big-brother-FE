import ChangePassword from '@/features/account/ui/ChangePassword';
import GoToJoin from '@/features/account/ui/GoToJoin';
import LoginForm from '@/features/account/ui/LoginForm';

const page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-14 ">
        <div className="w-28 h-28 bg-gray-100 mb-16">아이콘 자리</div>
        <LoginForm />
        <ChangePassword />
      </div>
      <GoToJoin />
    </>
  );
};

export default page;
