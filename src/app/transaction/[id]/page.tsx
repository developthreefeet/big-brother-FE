'use client';

import { transactionItems } from '@/shared/mock/contentList';
import MonthComponent from '@/views/transaction/MonthComponent';
import TotalAmount from '@/views/transaction/TotalAmount';
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
        <TotalAmount items={transactionItems} />
        <TransactionListComponent list={transactionItems} />
      </div>
    </div>
  );
};

export default page;
