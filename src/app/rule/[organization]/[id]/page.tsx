'use client';

import useDetail from '@/features/content/model/useDetail';
import PdfViewerDetailComponent from '@/features/content/ui/PdfViewerDetailComponent';
import { ruleItems } from '@/shared/mock/contentList';

const page = () => {
  const ruleItem = useDetail(ruleItems);

  if (!ruleItem) {
    return null;
  }

  return <PdfViewerDetailComponent item={ruleItem} />;
};

export default page;
