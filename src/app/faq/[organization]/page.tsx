'use client';

import OrganizationTitleSelectComponent from '@/widgets/OrganizationSelectComponent';
import Title from '@/widgets/Title';
import { faqItems } from '@/shared/mock/contentList';
import useOrganizationRouter from '@/features/contentList/model/useOrganizationRouter';
import AccordionComponent from '@/features/content/ui/AccordionComponent';
import { usePathname } from 'next/navigation';
import useDetail from '@/features/content/model/useDetail';

const Page = () => {
  useOrganizationRouter();
  const pathname = usePathname();
  const organization = pathname.split('/')[2];

  const { returnFaqDetailItem } = useDetail();

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
