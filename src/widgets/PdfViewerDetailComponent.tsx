import BackToListButton from './BackToListButton';
import DateText from './DateText';
import PdfViewer from './PdfViewer';
import Title from './Title';
import Preference from './Preference';
import CommentComponent from './CommentComponent';
import { ListItem } from '@/shared/types/type';
import { formatDate, getTitle } from '@/shared/lib/utils';

const PdfViewerDetailComponent = ({ item }: { item: ListItem }) => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-col space-y-1">
        <Title text={getTitle(item)} />
        <DateText date={formatDate(item.create_at)} />
      </div>
      <hr />
      <PdfViewer pdf="/static/test.pdf" />
      <hr />
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

export default PdfViewerDetailComponent;
