'use client';

import useDetail from '@/features/content/model/useDetail';
import CommonDetailComponent from '@/features/content/ui/CommonDetailComponent';
import { usePathname } from 'next/navigation';

const page = () => {
  const pathname = usePathname();
  const organization = pathname.split('/')[2];
  const id = pathname.split('/')[3];

  const { returnEventDetailItem } = useDetail();

  let noticeItem = returnEventDetailItem(organization, parseInt(id));

  return <CommonDetailComponent content={noticeItem} />;
};

export default page;
