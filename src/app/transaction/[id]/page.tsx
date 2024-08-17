'use client';

import { useEffect, useState } from 'react';
import useTransactionDetail from '@/features/content/model/useTransactionDetail';
import TotalAmount from '@/views/transaction/TotalAmount';
import TransactionListComponent from '@/views/transaction/TransactionListComponent';
import Title from '@/widgets/Title';
import { usePathname } from 'next/navigation';
import { GetTransactionDetailResData } from '@/features/content/api/types';
import { useMonthStore } from '@/features/content/model/useTransactionMonthStore';
import MonthSelectComponent from '@/views/transaction/MonthSelectComponent';

const Page = () => {
  const pathname = usePathname();
  const organization = pathname.split('/')[2];
  const { selectMonth } = useMonthStore();

  const [transactionItems, setTransactionItems] = useState<
    GetTransactionDetailResData[]
  >([]);
  const { data, isLoading } = useTransactionDetail(
    organization,
    new Date().getFullYear(),
    selectMonth,
  );

  useEffect(() => {
    if (data) {
      setTransactionItems(data);
    }
  }, [data]);

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
        <MonthSelectComponent />
        <>
          <TotalAmount items={transactionItems} isLoading={isLoading} />
          <TransactionListComponent
            list={transactionItems}
            isLoading={isLoading}
          />
        </>
      </div>
    </div>
  );
};

export default Page;
