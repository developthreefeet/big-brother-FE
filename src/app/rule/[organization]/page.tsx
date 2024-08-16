'use client';

import useNotice from '@/features/contentList/model/useNotice';
import useRule from '@/features/contentList/model/useRule';
import ListLayoutComponent from '@/features/contentList/ui/ListLayoutComponent';

const page = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useRule();

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
