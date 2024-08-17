'use client';

import useEvent from '@/features/contentList/model/useEvent';
import ListLayoutComponent from '@/features/contentList/ui/ListLayoutComponent';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

const page = () => {
  const queryClient = useQueryClient();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useEvent();

  useEffect(() => {
    return () => {
      queryClient.resetQueries();
    };
  }, [queryClient]);

  const allContent = data?.pages.flatMap((page) => page.content);
  return (
    <ListLayoutComponent
      items={allContent}
      isLoading={isLoading}
      title="행사"
      onLoadMore={fetchNextPage}
      hasMore={hasNextPage}
      isLoadingMore={isFetchingNextPage}
    />
  );
};

export default page;
