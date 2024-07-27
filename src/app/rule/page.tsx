import { ruleItems } from '@/shared/mock/contentList';
import ListLayoutComponent from '@/widgets/ListLayoutComponent';

const page = () => {
  return <ListLayoutComponent items={ruleItems} title="학칙/회칙" />;
};

export default page;
