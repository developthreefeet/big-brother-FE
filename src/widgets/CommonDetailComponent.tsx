import BackToListButton from '@/widgets/BackToListButton';
import DateText from '@/widgets/DateText';
import Title from '@/widgets/Title';
import Preference from './Preference';
import CommentComponent from './CommentComponent';

const CommonDetailComponent = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-col space-y-1">
        <Title text="제목이 존나 길면 어떻게 되는지 보자 디자인이" />
        <div className="flex space-x-3 text-xs items-center text-gray-200">
          <div className="flex space-x-1 items-center">
            <p>생성일 | </p>
            <DateText date="2024/07/17" />
          </div>
          <div className="flex space-x-1 items-center">
            <p>수정일 | </p>
            <DateText date="2024/07/17" />
          </div>
        </div>
      </div>
      <hr />
      <div className="p-2 text-md">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi obcaecati
      </div>
      <div className="flex justify-center">
        <Preference />
      </div>
      <CommentComponent />
      <div className="flex justify-end">
        <BackToListButton />
      </div>
    </div>
  );
};

export default CommonDetailComponent;
