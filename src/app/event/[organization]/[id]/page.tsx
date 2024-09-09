'use client';

import useCommonDetail from '@/features/content/model/useCommonDetail';
import CommonDetailComponent from '@/features/content/ui/CommonDetailComponent';
import { usePathname } from 'next/navigation';

const page = () => {
  const pathname = usePathname();
  const id = pathname.split('/')[3];

  const { returnEventDetailItem } = useCommonDetail();

  let { data: noticeItem, isLoading } = returnEventDetailItem(parseInt(id));

  return <CommonDetailComponent content={noticeItem} isLoading={isLoading} />;
};

export default page;
