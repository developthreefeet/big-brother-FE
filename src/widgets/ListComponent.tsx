import { formatDate } from '@/shared/lib/dateUtils';

//데이터별로 type 해놔야 함
interface ListComponentProps {
  list: {
    eventName: string;
    target: string;
    content: string;
    start_date: string;
    end_date: string;
    affiliation: string;
    user_id: string;
    create_at: string;
    update_at: string;
  }[];
}

const ListComponent = ({ list }: ListComponentProps) => {
  return (
    <div className="flex flex-col space-y-2 ">
      {list.map((item, index) => (
        <div key={index} className=" border-b py-3">
          <div className="flex flex-col space-y-1 hover:opacity-50 cursor-pointer">
            <p className="text-sm font-bold">{item.eventName}</p>
            <p className="text-xs text-gray-200">
              {formatDate(item.create_at)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListComponent;
