'use client';

import OrganizationTitleSelectComponent from '@/widgets/OrganizationSelectComponent';
import Title from '@/widgets/Title';
import { faqItems } from '@/shared/mock/contentList';
import useOrganizationRouter from '@/features/contentList/model/useOrganizationRouter';
import AccordionComponent from '@/features/content/ui/AccordionComponent';

const Page = () => {
  useOrganizationRouter();

  return (
    <div className="flex flex-col space-y-3">
      <Title text="FAQ" />
      <OrganizationTitleSelectComponent />
      <AccordionComponent items={faqItems} />
    </div>
  );
};

export default Page;
