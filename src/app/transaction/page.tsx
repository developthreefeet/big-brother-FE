import Title from '@/widgets/Title';
import Link from 'next/link';

const page = () => {
  return (
    <div className="flex flex-col space-y-10">
      <Title text="입/출금 내역" />
      <div className="flex flex-col space-y-8">
        <p className="font-bold">구분을 선택해주세요.</p>
        <div className="flex flex-col space-y-5">
          <Link href="/transaction/studentCouncil" className="hover:opacity-50">
            <p>{`총학생회 >`}</p>
          </Link>
          <Link href="/transaction/college" className="hover:opacity-50">
            <p>{`단과대 >`}</p>
          </Link>
          <Link href="/transaction/department" className="hover:opacity-50">
            <p>{`학과 >`}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
