'use client';

import useDetail from '@/shared/hooks/useDetail';
import { noticeItems } from '@/shared/mock/contentList';
import CommonDetailComponent from '@/widgets/CommonDetailComponent';

const page = () => {
  const noticeItem = useDetail(noticeItems);

  if (!noticeItem) {
    return null;
  }

  return <CommonDetailComponent content={noticeItem} />;
};

export default page;
