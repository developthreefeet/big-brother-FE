'use client';

import useNotice from '@/features/contentList/model/useNotice';
import ListLayoutComponent from '@/features/contentList/ui/ListLayoutComponent';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

const page = () => {
  const queryClient = useQueryClient();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useNotice();

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
      title="공지사항"
      onLoadMore={fetchNextPage}
      hasMore={hasNextPage}
      isLoadingMore={isFetchingNextPage}
    />
  );
};

export default page;
