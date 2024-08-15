'use client';

import useDetail from '@/shared/hooks/useDetail';
import CommonDetailComponent from '@/widgets/CommonDetailComponent';
import { usePathname } from 'next/navigation';

const page = () => {
  const pathname = usePathname();
  const organization = pathname.split('/')[2];
  const id = pathname.split('/')[3];

  const { returnNoticeDetailItem } = useDetail();

  let noticeItem = returnNoticeDetailItem(organization, parseInt(id));

  return <CommonDetailComponent content={noticeItem} />;
};

export default page;
