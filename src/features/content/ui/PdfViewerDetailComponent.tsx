import { ListItem } from '@/shared/types/type';
import { formatDate, getTitle } from '@/shared/lib/utils';
import BackToListButton from '@/features/content/ui/BackToListButton';
import DateText from '@/widgets/DateText';
import PdfViewer from '@/widgets/PdfViewer';
import { Title } from '@radix-ui/react-toast';

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

      <div className="flex justify-end">
        <BackToListButton />
      </div>
    </div>
  );
};

export default PdfViewerDetailComponent;
