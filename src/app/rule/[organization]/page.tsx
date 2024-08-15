import ListLayoutComponent from '@/features/contentList/ui/ListLayoutComponent';
import { ruleItems } from '@/shared/mock/contentList';

const page = () => {
  return <ListLayoutComponent items={ruleItems} title="학칙/회칙" />;
};

export default page;
