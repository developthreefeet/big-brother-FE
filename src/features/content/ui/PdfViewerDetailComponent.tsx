import { formatDate } from '@/shared/lib/utils';
import BackToListButton from '@/features/content/ui/BackToListButton';
import DateText from '@/widgets/DateText';
import PdfViewer from './PdfViewer';
import { PdfDetailItem } from '../api/types';
import Title from '@/widgets/Title';

const PdfViewerDetailComponent = ({
  item,
}: {
  item: PdfDetailItem | undefined;
}) => {
  if (item) {
    return (
      <div className="flex flex-col space-y-3">
        <div className="flex flex-col space-y-1">
          <Title text={item.title} />
          <DateText date={formatDate(item.createAt)} />
        </div>
        <hr />
        <PdfViewer pdf="/static/test.pdf" />
        <hr />

        <div className="flex justify-end">
          <BackToListButton />
        </div>
      </div>
    );
  }
};

export default PdfViewerDetailComponent;
