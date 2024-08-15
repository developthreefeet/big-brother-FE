import ListLayoutComponent from '@/features/contentList/ui/ListLayoutComponent';
import { eventItems } from '@/shared/mock/contentList';

const page = () => {
  return <ListLayoutComponent items={eventItems} title="행사" />;
};

export default page;
