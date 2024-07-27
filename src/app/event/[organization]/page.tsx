import { eventItems } from '@/shared/mock/contentList';
import ListLayoutComponent from '@/widgets/ListLayoutComponent';

const page = () => {
  return <ListLayoutComponent items={eventItems} title="행사" />;
};

export default page;
