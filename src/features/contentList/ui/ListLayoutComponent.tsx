'use client';

import OrganizationSelectComponent from '@/widgets/OrganizationSelectComponent';
import Title from '@/widgets/Title';
import ListComponent from '@/features/contentList/ui/ListComponent';
import useOrganizationRouter from '../model/useOrganizationRouter';
import { ListLayoutItems } from '../api/types';
import { Button } from '@/shared/ui/ui/button';
import { IoIosArrowDown } from 'react-icons/io';
import { Skeleton } from '@/shared/ui/ui/skeleton';
import { useIntersectionObserver } from '../model/useIntersectionObserver';
import { InfiniteQueryObserverResult } from '@tanstack/react-query';

interface ListLayoutComponentProps {
  items: ListLayoutItems;
  title: string;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
  hasNextPage: boolean;
  isLoadingMore: boolean;
  isLoading: boolean;
}

const ListLayoutComponent = ({
  items,
  title,
  fetchNextPage,
  hasNextPage,
  isLoadingMore,
  isLoading,
}: ListLayoutComponentProps) => {
  useOrganizationRouter();
  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col space-y-3">
        <Title text={title} />
        <OrganizationSelectComponent />
        {isLoading ? (
          <div className="flex flex-col gap-8">
            {Array.from({ length: 7 }).map((_, index) => (
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
                <div ref={setTarget} />
                {isLoadingMore ? (
                  <p className="text-sm text-gray-300">로딩중...</p>
                ) : (
                  <p className="text-xs text-gray-300">페이지의 끝입니다.</p>
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
