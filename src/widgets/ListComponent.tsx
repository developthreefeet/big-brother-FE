import { formatDate, getTitle } from '@/shared/lib/utils';
import { ListComponentProps } from '@/shared/types/type';

const ListComponent = ({ list }: ListComponentProps) => {
  return (
    <div className="flex flex-col space-y-2 ">
      {list.map((item, index) => (
        <div key={index} className=" border-b py-3">
          <div className="flex flex-col space-y-1 hover:opacity-50 cursor-pointer">
            <p className="text-sm font-bold">{getTitle(item)}</p>
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
