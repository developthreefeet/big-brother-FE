'use client';

import useRule from '@/features/contentList/model/useRule';
import ListLayoutComponent from '@/features/contentList/ui/ListLayoutComponent';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

const page = () => {
  const queryClient = useQueryClient();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useRule();

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
      title="학칙/회칙"
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isLoadingMore={isFetchingNextPage}
    />
  );
};

export default page;
