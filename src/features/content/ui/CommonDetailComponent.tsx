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

const CommonDetailComponent = ({
  content: data,
}: {
  content: CommonDetailItem | undefined;
}) => {
  const pathname = usePathname();
  const isEventDetailPage = pathname.includes('event');

  if (data) {
    return (
      <div className="flex flex-col space-y-3">
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
        <div className="p-5 text-md">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {data.content}
          </ReactMarkdown>
          {isEventDetailPage &&
            data.fileInfo.length > 0 &&
            data.fileInfo.map((data, index) => (
              <img key={index} src={data.url} />
            ))}
        </div>
        <hr />
        {!isEventDetailPage &&
          data.fileInfo.length > 0 &&
          data.fileInfo.map((data, index) => (
            <a
              className="flex flex-row items-center gap-1 pt-2 text-sm"
              href={data.url}
              download
              key={index}
            >
              <TbDownload size={16} color="#7B7B7B" />
              {data.fileName}
            </a>
          ))}
        <div className="flex justify-end">
          <BackToListButton />
        </div>
      </div>
    );
  }
};

export default CommonDetailComponent;
