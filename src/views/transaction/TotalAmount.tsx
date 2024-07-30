import { calculateTotals } from '@/shared/lib/utils';
import { TransactionItem } from '@/shared/types/type';

const TotalAmount = ({ items }: { items: TransactionItem[] }) => {
  const { totalDeposit, totalWithdraw } = calculateTotals(items);

  return (
    <div className="flex flex-col space-y-3">
      <p className="text-xl font-bold">총 입/출금액</p>
      <div className="flex flex-col space-y-1 font-bold">
        <p>- {totalWithdraw.toLocaleString()} 원</p>
        <p className="text-blue-300">+ {totalDeposit.toLocaleString()} 원</p>
      </div>
    </div>
  );
};

export default TotalAmount;
