'use client';

import OrganizationTitleSelectComponent from '@/widgets/OrganizationSelectComponent';
import Title from '@/widgets/Title';
import useOrganizationRouter from '@/features/contentList/model/useOrganizationRouter';
import AccordionComponent from '@/features/content/ui/AccordionComponent';
import { usePathname } from 'next/navigation';
import useCommonDetail from '@/features/content/model/useCommonDetail';

const Page = () => {
  useOrganizationRouter();
  const pathname = usePathname();
  const organization = pathname.split('/')[2];

  const { returnFaqDetailItem } = useCommonDetail();

  let faqData = returnFaqDetailItem(organization);
  const faqItem = faqData?.pages.flatMap((page) => page.content);

  return (
    <div className="flex flex-col space-y-3">
      <Title text="FAQ" />
      <OrganizationTitleSelectComponent />
      <AccordionComponent items={faqItem} />
    </div>
  );
};

export default Page;
