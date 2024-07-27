'use client';

import { transactionItems } from '@/shared/mock/contentList';
import MonthComponent from '@/views/transaction/MonthComponent';
import TransactionListComponent from '@/views/transaction/TransactionListComponent';
import Title from '@/widgets/Title';
import { usePathname } from 'next/navigation';

const page = () => {
  const pathname = usePathname();
  const id = pathname.split('/')[2];

  return (
    <div className="flex flex-col space-y-10">
      <Title
        text={`${id === 'studentCouncil' ? '총학생회' : id === 'college' ? '단과대' : '학과'} 입/출금 내역`}
      />
      <div className="flex flex-col space-y-12">
        <MonthComponent />
        <div className="flex flex-col space-y-3">
          <p className="text-xl font-bold">총 입/출금액</p>
          <div className="flex flex-col space-y-1 font-bold">
            <p>- 100,000 원</p>
            <p className="text-blue-300">+ 14,300,000 원</p>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="text-xl font-bold">내역</p>
          <TransactionListComponent list={transactionItems} />
        </div>
      </div>
    </div>
  );
};

export default page;
