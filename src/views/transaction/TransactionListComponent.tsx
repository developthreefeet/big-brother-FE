import { formatDate } from '@/shared/lib/utils';
import DateText from '@/widgets/DateText';
import { GetTransactionDetailResData } from '@/features/content/api/types';

const TransactionListComponent = ({
  list,
  isLoading,
}: {
  list: GetTransactionDetailResData[];
  isLoading: boolean;
}) => {
  return (
    <div className="flex flex-col space-y-3">
      <p className="text-xl font-bold">내역</p>
      {isLoading ? (
        <div>로딩중...</div>
      ) : (
        <div className="flex flex-col">
          {list.length > 0 ? (
            list.map((item) => (
              <div key={item.transactionId} className="py-4 px-0 border-b">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col space-y-1">
                    <p className="text-md font-bold text-blue-500">
                      {item.amount > 0
                        ? '+ ' + item.amount.toLocaleString()
                        : '- ' + Math.abs(item.amount).toLocaleString()}
                    </p>
                    <div className="flex space-x-1 text-xs">
                      <p>{item.amount > 0 ? '입금' : '출금'}</p>
                      <p>| {item.description}</p>
                    </div>
                    <span className="text-sm font-semibold">
                      잔액: <span>{item.balance.toLocaleString()}</span>
                    </span>
                  </div>
                  <DateText date={formatDate(item.date)} />
                </div>
              </div>
            ))
          ) : (
            <div>내역이 없습니다.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default TransactionListComponent;
