'use client';

import useCommonDetail from '@/shared/hooks/useCommonDetail';
import { noticeItems } from '@/shared/mock/contentList';
import { NoticeItem } from '@/shared/types/type';
import CommonDetailComponent from '@/widgets/CommonDetailComponent';

const page = () => {
  const noticeItem = useCommonDetail(noticeItems);

  if (!noticeItem) {
    return null;
  }

  return <CommonDetailComponent content={noticeItem} />;
};

export default page;
