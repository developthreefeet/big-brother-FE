'use client';

import useDetail from '@/shared/hooks/useDetail';
import { proceedingItems } from '@/shared/mock/contentList';
import PdfViewerDetailComponent from '@/widgets/PdfViewerDetailComponent';

const page = () => {
  const proceedingItem = useDetail(proceedingItems);

  if (!proceedingItem) {
    return null;
  }

  return <PdfViewerDetailComponent item={proceedingItem} />;
};

export default page;
