'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/ui/accordion';
import OrganizationTitleSelectComponent from '@/widgets/OrganizationSelectComponent';
import Title from '@/widgets/Title';
import { faqItems } from '@/shared/mock/contentList';
import useOrganizationRouter from '@/shared/hooks/useOrganizationRouter';

const Page = () => {
  useOrganizationRouter();

  return (
    <div className="flex flex-col space-y-3">
      <Title text="FAQ" />
      <OrganizationTitleSelectComponent />
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((faq) => (
          <AccordionItem key={faq.faq_id} value={faq.faq_id}>
            <AccordionTrigger className="text-left text-sm">
              {faq.faq_name}
            </AccordionTrigger>
            <AccordionContent>{faq.faq_content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Page;
