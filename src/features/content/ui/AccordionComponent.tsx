import { FaqContent } from '@/features/contentList/api/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/ui/accordion';
import { TbDownload } from 'react-icons/tb';

const AccordionComponent = ({ items }: { items: FaqContent[] | undefined }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items?.map((item, index) => (
        <AccordionItem key={item.id} value={index.toString()}>
          <AccordionTrigger className="text-left text-sm font-bold">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            {item.content}
            {item.files.length > 0 &&
              item.files.map((item, index) => (
                <a
                  href={item.url}
                  download
                  key={index}
                  className="flex gap-1 items-center"
                >
                  <TbDownload size={16} color="#7B7B7B" />
                  {item.fileName}
                </a>
              ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
