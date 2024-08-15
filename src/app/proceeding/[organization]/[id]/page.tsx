'use client';
import useDetail from '@/features/content/model/useDetail';
import PdfViewerDetailComponent from '@/features/content/ui/PdfViewerDetailComponent';
import { proceedingItems } from '@/shared/mock/contentList';

const page = () => {
  const proceedingItem = useDetail(proceedingItems);

  if (!proceedingItem) {
    return null;
  }

  return <PdfViewerDetailComponent item={proceedingItem} />;
};

export default page;
