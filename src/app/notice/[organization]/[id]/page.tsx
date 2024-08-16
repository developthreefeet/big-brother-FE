'use client';

import useCommonDetail from '@/features/content/model/useCommonDetail';
import CommonDetailComponent from '@/features/content/ui/CommonDetailComponent';
import { usePathname } from 'next/navigation';

const page = () => {
  const pathname = usePathname();
  const organization = pathname.split('/')[2];
  const id = pathname.split('/')[3];

  const { returnNoticeDetailItem } = useCommonDetail();

  let noticeItem = returnNoticeDetailItem(organization, parseInt(id));

  return <CommonDetailComponent content={noticeItem} />;
};

export default page;
