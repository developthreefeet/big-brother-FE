'use client';

import useDetail from '@/shared/hooks/useDetail';
import { ruleItems } from '@/shared/mock/contentList';
import PdfViewerDetailComponent from '@/widgets/PdfViewerDetailComponent';

const page = () => {
  const ruleItem = useDetail(ruleItems);

  if (!ruleItem) {
    return null;
  }

  return <PdfViewerDetailComponent item={ruleItem} />;
};

export default page;
