import ChangePassword from '@/features/account/ui/ChangePassword';
import GoToJoin from '@/features/account/ui/GoToJoin';
import LoginForm from '@/features/account/ui/LoginForm';
import Image from 'next/image';

const page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-14 ">
        <Image
          className="mb-4"
          src="/static/mju-tree.png"
          alt="Tree"
          width={80}
          height={80}
        />
        <h1 className=" font-bold text-lg text-gray-300">MyongJi Univ.</h1>
        <h1 className=" mb-8 font-bold text-3xl">Big Brother</h1>
        <LoginForm />
        <ChangePassword />
      </div>
      <GoToJoin />
    </>
  );
};

export default page;
