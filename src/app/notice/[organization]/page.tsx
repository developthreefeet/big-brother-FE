'use client';

import { useGetInfiniteCampusNotice } from '@/features/contentList/api/queries';
import ListLayoutComponent from '@/features/contentList/ui/ListLayoutComponent';

const page = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetInfiniteCampusNotice('일반공지');

  if (data) {
    const allContent = data.pages.flatMap((page) => page.content);
    return (
      <ListLayoutComponent
        items={allContent}
        title="공지사항"
        onLoadMore={fetchNextPage}
        hasMore={hasNextPage}
        isLoadingMore={isFetchingNextPage}
      />
    );
  }
};

export default page;
