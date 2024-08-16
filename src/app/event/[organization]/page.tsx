'use client';

import useEvent from '@/features/contentList/model/useEvent';
import ListLayoutComponent from '@/features/contentList/ui/ListLayoutComponent';

const page = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useEvent();

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
