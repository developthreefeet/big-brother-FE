'use client';

import useProceeding from '@/features/contentList/model/useProceeding';
import ListLayoutComponent from '@/features/contentList/ui/ListLayoutComponent';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

const page = () => {
  const queryClient = useQueryClient();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useProceeding();

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
      title="회의록"
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isLoadingMore={isFetchingNextPage}
    />
  );
};

export default page;
