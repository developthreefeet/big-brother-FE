'use client';

import OrganizationSelectComponent from '@/widgets/OrganizationSelectComponent';
import Title from '@/widgets/Title';
import ListComponent from '@/features/contentList/ui/ListComponent';
import useOrganizationRouter from '../model/useOrganizationRouter';
import { ListLayoutItems } from '../api/types';

interface ListLayoutComponentProps {
  items: ListLayoutItems;
  title: string;
  onLoadMore: () => void;
  hasMore: boolean;
  isLoadingMore: boolean;
  isLoading: boolean;
}

const ListLayoutComponent = ({
  items,
  title,
  onLoadMore,
  hasMore,
  isLoadingMore,
  isLoading,
}: ListLayoutComponentProps) => {
  useOrganizationRouter();

  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col space-y-3">
        <Title text={title} />
        <OrganizationSelectComponent />
        {isLoading ? (
          <div>로딩중...</div>
        ) : (
          <>
            {items && (
              <>
                <ListComponent list={items} />
                {hasMore && (
                  <button onClick={onLoadMore} disabled={isLoadingMore}>
                    {isLoadingMore ? 'Loading...' : 'Load More'}
                  </button>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ListLayoutComponent;
