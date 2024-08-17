'use client';

import OrganizationSelectComponent from '@/widgets/OrganizationSelectComponent';
import Title from '@/widgets/Title';
import ListComponent from '@/features/contentList/ui/ListComponent';
import useOrganizationRouter from '../model/useOrganizationRouter';
import { ListLayoutItems } from '../api/types';
import { Button } from '@/shared/ui/ui/button';
import { IoIosArrowDown } from 'react-icons/io';

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
                  <Button
                    onClick={onLoadMore}
                    variant="outline"
                    disabled={isLoadingMore}
                    className="border-none"
                  >
                    {isLoadingMore ? (
                      '로딩중...'
                    ) : (
                      <>
                        <IoIosArrowDown /> 더보기
                      </>
                    )}
                  </Button>
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
