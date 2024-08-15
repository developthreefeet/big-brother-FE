import ListLayoutComponent from '@/features/contentList/ui/ListLayoutComponent';
import { proceedingItems } from '@/shared/mock/contentList';

const page = () => {
  return <ListLayoutComponent items={proceedingItems} title="회의록" />;
};

export default page;
