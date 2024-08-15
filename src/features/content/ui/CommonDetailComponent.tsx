import DateText from '@/widgets/DateText';
import Title from '@/widgets/Title';
import { DetailItem } from '@/shared/types/type';
import { formatDate } from '@/shared/lib/utils';
import BackToListButton from '@/features/content/ui/BackToListButton';

const CommonDetailComponent = ({
  content: data,
}: {
  content: DetailItem | undefined;
}) => {
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
        <div className="p-2 text-md">{data.content}</div>
        <div className="flex justify-end">
          <BackToListButton />
        </div>
      </div>
    );
  }
};

export default CommonDetailComponent;
