import BackToListButton from './BackToListButton';
import DateText from './DateText';
import PdfViewer from './PdfViewer';
import Title from './Title';
import Preference from './Preference';
import CommentComponent from './CommentComponent';

const PdfViewerDetailComponent = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-col space-y-1">
        <Title text="제목" />
        <DateText date="2024/07/18" />
      </div>
      <hr />
      <PdfViewer pdf="/static/test.pdf" />
      <hr />
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

export default PdfViewerDetailComponent;
