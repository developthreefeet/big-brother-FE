'use client';

import OrganizationTitleSelectComponent from '@/widgets/OrganizationSelectComponent';
import Title from '@/widgets/Title';
import useOrganizationRouter from '@/features/contentList/model/useOrganizationRouter';
import AccordionComponent from '@/features/content/ui/AccordionComponent';
import { usePathname } from 'next/navigation';
import useCommonDetail from '@/features/content/model/useCommonDetail';
import { Skeleton } from '@/shared/ui/ui/skeleton';

const Page = () => {
  useOrganizationRouter();
  const pathname = usePathname();
  const organization = pathname.split('/')[2];

  const { returnFaqDetailItem } = useCommonDetail();

  const { data, isLoading } = returnFaqDetailItem(organization);
  const faqItem = data?.pages.flatMap((page) => page.content);

  return (
    <div className="flex flex-col space-y-3">
      <Title text="FAQ" />
      <OrganizationTitleSelectComponent />
      {isLoading ? (
        <div className="flex flex-col gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-7 w-80" />
          ))}
        </div>
      ) : (
        <AccordionComponent items={faqItem} />
      )}
    </div>
  );
};

export default Page;
