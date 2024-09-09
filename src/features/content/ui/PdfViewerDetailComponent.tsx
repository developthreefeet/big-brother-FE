'use client';

import { formatDate } from '@/shared/lib/utils';
import BackToListButton from '@/features/content/ui/BackToListButton';
import DateText from '@/widgets/DateText';
import PdfViewer from './PdfViewer';
import { PdfDetailItem } from '../api/types';
import Title from '@/widgets/Title';
import { usePathname } from 'next/navigation';
import { Skeleton } from '@/shared/ui/ui/skeleton';

const PdfViewerDetailComponent = ({
  item,
  isLoading,
}: {
  item: PdfDetailItem | undefined;
  isLoading: boolean;
}) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col space-y-3">
      {isLoading ? (
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Skeleton className="w-80 h-6" />
            <div className="flex gap-2">
              <Skeleton className="w-16 h-4" />
              <Skeleton className="w-16 h-4" />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col space-y-1">
            <Title text={item?.title as string} />
            <div className="flex space-x-3 text-xs items-center text-gray-200">
              <div className="flex space-x-1 items-center">
                <p>생성일 | </p>
                <DateText date={formatDate(item?.createAt as string)} />
              </div>
              {pathname.includes('proceeding') && (
                <div className="flex space-x-1 items-center">
                  <p>수정일 | </p>
                  <DateText date={formatDate(item?.updateAt as string)} />
                </div>
              )}
            </div>
          </div>
          <hr />
          <PdfViewer pdf={item?.fileInfo[0].url as string} />
        </>
      )}
      <hr />
      <div className="flex justify-end">
        <BackToListButton />
      </div>
    </div>
  );
};

export default PdfViewerDetailComponent;
