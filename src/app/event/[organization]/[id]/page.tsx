'use client';

import { eventItems } from '@/shared/mock/contentList';
import CommonDetailComponent from '@/widgets/CommonDetailComponent';
import useCommonDetail from '@/shared/hooks/useCommonDetail';

const page = () => {
  const eventItem = useCommonDetail(eventItems);

  if (!eventItem) {
    return null;
  }

  return <CommonDetailComponent content={eventItem} />;
};

export default page;
