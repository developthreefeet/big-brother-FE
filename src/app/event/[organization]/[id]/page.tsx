'use client';

import { eventItems } from '@/shared/mock/contentList';
import CommonDetailComponent from '@/widgets/CommonDetailComponent';
import useDetail from '@/shared/hooks/useDetail';

const page = () => {
  const eventItem = useDetail(eventItems);

  if (!eventItem) {
    return null;
  }

  return <CommonDetailComponent content={eventItem} />;
};

export default page;
