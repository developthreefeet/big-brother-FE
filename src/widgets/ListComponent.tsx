'use client';

import { formatDate, getId, getTitle } from '@/shared/lib/utils';
import { ListComponentProps } from '@/shared/types/type';
import DateText from './DateText';
import Link from 'next/link';

const ListComponent = ({ list }: ListComponentProps) => {
  const { pathname } = window.location;

  return (
    <div className="flex flex-col space-y-2 ">
      {list.map((item, index) => (
        <div key={index} className=" border-b py-3">
          <Link href={`${pathname}/${getId(item)}`}>
            <div className="flex flex-col space-y-1 hover:opacity-50 cursor-pointer">
              <p className="text-sm font-bold">{getTitle(item)}</p>
              <DateText date={formatDate(item.create_at)} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListComponent;
