'use client';

import OrganizationSelectComponent from '@/widgets/OrganizationSelectComponent';
import Title from '@/widgets/Title';
import ListComponent from '@/features/contentList/ui/ListComponent';
import useOrganizationRouter from '../model/useOrganizationRouter';
import { ListLayoutItems } from '../api/types';
import { Button } from '@/shared/ui/ui/button';
import { IoIosArrowDown } from 'react-icons/io';
import { Skeleton } from '@/shared/ui/ui/skeleton';

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
          <div className="flex flex-col gap-10">
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="flex flex-col gap-2">
                <Skeleton key={index} className="h-5 w-72" />
                <Skeleton key={index} className="h-3 w-20" />
              </div>
            ))}
          </div>
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
