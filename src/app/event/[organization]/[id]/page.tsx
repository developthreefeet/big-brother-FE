'use client';

import useDetail from '@/features/content/model/useDetail';
import CommonDetailComponent from '@/features/content/ui/CommonDetailComponent';
import { eventItems } from '@/shared/mock/contentList';

const page = () => {
  const eventItem = useDetail(eventItems);

  if (!eventItem) {
    return null;
  }

  return <CommonDetailComponent content={eventItem} />;
};

export default page;
