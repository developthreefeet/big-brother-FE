'use client';

import useEvent from '@/features/contentList/model/useEvent';
import useProceeding from '@/features/contentList/model/useProceeding';
import ListLayoutComponent from '@/features/contentList/ui/ListLayoutComponent';

const page = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useProceeding();

  const allContent = data?.pages.flatMap((page) => page.content);
  return (
    <ListLayoutComponent
      items={allContent}
      isLoading={isLoading}
      title="회의록"
      onLoadMore={fetchNextPage}
      hasMore={hasNextPage}
      isLoadingMore={isFetchingNextPage}
    />
  );
};

export default page;
