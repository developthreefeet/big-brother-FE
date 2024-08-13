import { BounceLoader } from 'react-spinners';

const AlreadyLoggedInNotice = () => {
  return (
    <div className="flex items-center justify-center flex-col space-y-10 mt-[50%]">
      <BounceLoader color="#002E66" />
      <p className="text-sm text-center">
        이미 로그인 되었습니다.
        <br /> 메인페이지로 이동합니다.
      </p>
    </div>
  );
};

export default AlreadyLoggedInNotice;
