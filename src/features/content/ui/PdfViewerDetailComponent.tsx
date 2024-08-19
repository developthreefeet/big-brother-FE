'use client';

import { formatDate } from '@/shared/lib/utils';
import BackToListButton from '@/features/content/ui/BackToListButton';
import DateText from '@/widgets/DateText';
import PdfViewer from './PdfViewer';
import { PdfDetailItem } from '../api/types';
import Title from '@/widgets/Title';
import { usePathname } from 'next/navigation';

const PdfViewerDetailComponent = ({
  item,
}: {
  item: PdfDetailItem | undefined;
}) => {
  const pathname = usePathname();
  if (item) {
    return (
      <div className="flex flex-col space-y-3">
        <div className="flex flex-col space-y-1">
          <Title text={item.title} />
          <div className="flex space-x-3 text-xs items-center text-gray-200">
            <div className="flex space-x-1 items-center">
              <p>생성일 | </p>
              <DateText date={formatDate(item.createAt)} />
            </div>
            {pathname.includes('proceeding') && (
              <div className="flex space-x-1 items-center">
                <p>수정일 | </p>
                <DateText date={formatDate(item.updateAt)} />
              </div>
            )}
          </div>
        </div>
        <hr />
        <PdfViewer pdf={item.fileInfo[0].url} />
        <hr />
        <div className="flex justify-end">
          <BackToListButton />
        </div>
      </div>
    );
  }
};

export default PdfViewerDetailComponent;
