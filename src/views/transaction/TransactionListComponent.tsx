import { formatDate } from '@/shared/lib/utils';
import { TransactionListComponentProps } from '@/shared/types/type';
import DateText from '@/widgets/DateText';

const TransactionListComponent = ({ list }: TransactionListComponentProps) => {
  return (
    <div className="flex flex-col">
      {list.map((item, index) => (
        <div key={index} className="py-4 px-0 border-b ">
          <div className="flex justify-between items-center">
            <div className="flex flex-col space-y-1">
              <p className="text-md font-bold text-blue-500">
                {item.trans_direction === 'deposit'
                  ? '+ ' + item.deposit
                  : '- ' + item.withdraw}
              </p>
              <div className="flex space-x-1 text-xs">
                <p>{item.trans_direction === 'deposit' ? '입금' : '출금'}</p>
                <p>| {item.trans}</p>
              </div>
              <span className="text-sm font-semibold">
                잔액: <span>{item.balance}</span>
              </span>
            </div>
            <DateText date={formatDate(item.trans_date)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionListComponent;
