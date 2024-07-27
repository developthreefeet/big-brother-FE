import { noticeItems } from '@/shared/mock/contentList';
import ListLayoutComponent from '@/widgets/ListLayoutComponent';

const page = () => {
  return <ListLayoutComponent items={noticeItems} title="공지사항" />;
};

export default page;
