'use client';

import usePdfDetail from '@/features/content/model/usePdfDetail';
import PdfViewerDetailComponent from '@/features/content/ui/PdfViewerDetailComponent';
import { usePathname } from 'next/navigation';

const page = () => {
  const pathname = usePathname();
  const id = pathname.split('/')[3];

  const { returnProceedingDetailItem } = usePdfDetail();
  const { data: ruleItem, isLoading } = returnProceedingDetailItem(
    parseInt(id),
  );

  return <PdfViewerDetailComponent item={ruleItem} isLoading={isLoading} />;
};

export default page;
