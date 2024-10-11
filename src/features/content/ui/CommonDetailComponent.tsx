'use client';

import DateText from '@/widgets/DateText';
import Title from '@/widgets/Title';
import { formatDate } from '@/shared/lib/utils';
import BackToListButton from '@/features/content/ui/BackToListButton';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { TbDownload } from 'react-icons/tb';
import { CommonDetailItem } from '../api/types';
import { usePathname } from 'next/navigation';
import { Skeleton } from '@/shared/ui/ui/skeleton';

const CommonDetailComponent = ({
  content: data,
  isLoading,
}: {
  content: CommonDetailItem | undefined;
  isLoading: boolean;
}) => {
  const pathname = usePathname();
  const isEventDetailPage = pathname.includes('event');

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
          <hr />
          <Skeleton className="w-80 flex-wrap h-16 mb-4" />
        </div>
      ) : data ? (
        <>
          <div className="flex flex-col space-y-1">
            <Title text={data.title} />
            <div className="flex space-x-3 text-xs items-center text-gray-200">
              <div className="flex space-x-1 items-center">
                <p>생성일 | </p>
                <DateText date={formatDate(data.createAt)} />
              </div>
              <div className="flex space-x-1 items-center">
                <p>수정일 | </p>
                <DateText date={formatDate(data.updateAt)} />
              </div>
            </div>
          </div>
          <hr />
          <div className="p-5 text-md flex flex-col gap-4 break-all">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {data.content}
            </ReactMarkdown>
            {isEventDetailPage &&
              data.fileInfo.length > 0 &&
              data.fileInfo.map((file, index) => (
                <img src={file.url} key={index} className="w-70" />
              ))}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">No data available</p>
      )}
      <hr />
      {!isEventDetailPage &&
        data?.fileInfo &&
        data?.fileInfo.map((file, index) => (
          <a
            className="flex flex-row items-center space-x-1 pt-2"
            href={file.url}
            download
            key={index}
          >
            <TbDownload size={16} color="#7B7B7B" />
            <p className=" text-sm">{file.fileName}</p>
          </a>
        ))}
      <div className="flex justify-end">
        <BackToListButton />
      </div>
    </div>
  );
};

export default CommonDetailComponent;
