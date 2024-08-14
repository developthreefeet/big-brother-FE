import BackToListButton from '@/widgets/BackToListButton';
import DateText from '@/widgets/DateText';
import Title from '@/widgets/Title';
import Preference from './Preference';
import CommentComponent from './CommentComponent';
import { ListItem } from '@/shared/types/type';
import { formatDate, getContent, getTitle } from '@/shared/lib/utils';

const CommonDetailComponent = ({ content }: { content: ListItem }) => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-col space-y-1">
        <Title text={getTitle(content)} />
        <div className="flex space-x-3 text-xs items-center text-gray-200">
          <div className="flex space-x-1 items-center">
            <p>생성일 | </p>
            <DateText date={formatDate(content.create_at)} />
          </div>
          <div className="flex space-x-1 items-center">
            <p>수정일 | </p>
            <DateText date={formatDate(content.update_at)} />
          </div>
        </div>
      </div>
      <hr />
      <div className="p-2 text-md">{getContent(content)}</div>
      {/*<div className="flex justify-center">
        <Preference />
      </div>
      <CommentComponent />*/}
      <div className="flex justify-end">
        <BackToListButton />
      </div>
    </div>
  );
};

export default CommonDetailComponent;
