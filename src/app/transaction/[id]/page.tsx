'use client';

import { useState } from 'react';
import useTransactionDetail from '@/features/content/model/useTransactionDetail';
import MonthComponent from '@/views/transaction/MonthComponent';
import TotalAmount from '@/views/transaction/TotalAmount';
import TransactionListComponent from '@/views/transaction/TransactionListComponent';
import Title from '@/widgets/Title';
import { usePathname } from 'next/navigation';
import { GetTransactionDetailResData } from '@/features/content/api/types';
import { useMonthStore } from '@/features/content/model/useTransactionMonthStore';

const Page = () => {
  const pathname = usePathname();
  const organization = pathname.split('/')[2];
  const { currentMonth, setCurrentMonth } = useMonthStore();

  const [transactionItems, setTransactionItems] = useState<
    GetTransactionDetailResData[]
  >([]);

  const { returnTransactionDetailItem } = useTransactionDetail();

  return (
    <div className="flex flex-col space-y-10">
      <Title
        text={`${
          organization === 'studentCouncil'
            ? '총학생회'
            : organization === 'college'
              ? '단과대'
              : '학과'
        } 입/출금 내역`}
      />
      <div className="flex flex-col space-y-12">
        {/*<MonthComponent
          currentMonth={currentMonth}
        />*/}
        <>
          <TotalAmount items={transactionItems} />
          <TransactionListComponent list={transactionItems} />
        </>
      </div>
    </div>
  );
};

export default Page;
