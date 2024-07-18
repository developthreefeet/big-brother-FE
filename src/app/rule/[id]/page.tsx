import BackToListButton from '@/widgets/BackToListButton';
import DateText from '@/widgets/DateText';
import PdfViewer from '@/widgets/PdfViewer';
import Title from '@/widgets/Title';

const page = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-col space-y-1">
        <Title text="학칙1" />
        <DateText date="2024/07/18" />
      </div>
      <hr />
      <PdfViewer pdf="/static/test.pdf" />
      <div className="flex justify-end">
        <BackToListButton />
      </div>
    </div>
  );
};

export default page;
