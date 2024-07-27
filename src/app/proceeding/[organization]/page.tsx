import { proceedingItems } from '@/shared/mock/contentList';
import ListLayoutComponent from '@/widgets/ListLayoutComponent';

const page = () => {
  return <ListLayoutComponent items={proceedingItems} title="회의록" />;
};

export default page;
