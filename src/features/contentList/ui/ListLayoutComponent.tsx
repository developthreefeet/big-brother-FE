import OrganizationSelectComponent from '@/widgets/OrganizationSelectComponent';
import Title from '@/widgets/Title';
import ListComponent from '@/features/contentList/ui/ListComponent';
import useOrganizationRouter from '../model/useOrganizationRouter';
import { NoticeContent } from '../api/types';

interface ListLayoutComponentProps {
  items: NoticeContent[];
  title: string;
  onLoadMore: () => void;
  hasMore: boolean;
  isLoadingMore: boolean;
}

const ListLayoutComponent = ({
  items,
  title,
  onLoadMore,
  hasMore,
  isLoadingMore,
}: ListLayoutComponentProps) => {
  useOrganizationRouter();

  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col space-y-3">
        <Title text={title} />
        <OrganizationSelectComponent />
        <ListComponent list={items} />
        {hasMore && (
          <button onClick={onLoadMore} disabled={isLoadingMore}>
            {isLoadingMore ? 'Loading...' : 'Load More'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ListLayoutComponent;
