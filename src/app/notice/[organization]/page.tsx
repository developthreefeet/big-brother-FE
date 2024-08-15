'use client';

import useNotice from '@/features/contentList/model/useNotice';
import ListLayoutComponent from '@/features/contentList/ui/ListLayoutComponent';

const page = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useNotice();

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
