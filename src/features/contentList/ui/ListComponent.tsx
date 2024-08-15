'use client';

import { formatDate, getId, getTitle, truncateTitle } from '@/shared/lib/utils';
import { ListComponentProps } from '@/shared/types/type';
import DateText from '@/widgets/DateText';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NoticeContent } from '../api/types';

const ListComponent = ({ list }: { list: NoticeContent[] }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col space-y-2 ">
      {list.map((item, index) => (
        <div key={index} className=" border-b py-3">
          <Link href={`${pathname}/${item.id}`}>
            <div className="flex flex-col space-y-1 hover:opacity-50 cursor-pointer">
              <p className="text-sm font-bold">
                {truncateTitle(item.title, 29)}
              </p>
              <DateText date={formatDate(item.createAt)} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListComponent;
