'use client';

import usePdfDetail from '@/features/content/model/usePdfDetail';
import PdfViewerDetailComponent from '@/features/content/ui/PdfViewerDetailComponent';
import { ruleItems } from '@/shared/mock/contentList';
import { usePathname } from 'next/navigation';

const page = () => {
  const pathname = usePathname();
  const organization = pathname.split('/')[2];
  const id = pathname.split('/')[3];

  const { returnRuleDetailItem } = usePdfDetail();
  const ruleItem = returnRuleDetailItem(organization, parseInt(id));

  return <PdfViewerDetailComponent item={ruleItem} />;
};

export default page;
