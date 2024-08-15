import { FaqItem } from '@/shared/types/type';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/ui/accordion';

const AccordionComponent = ({ items }: { items: FaqItem[] }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item) => (
        <AccordionItem key={item.faq_id} value={item.faq_id}>
          <AccordionTrigger className="text-left text-sm">
            {item.faq_name}
          </AccordionTrigger>
          <AccordionContent>{item.faq_content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
