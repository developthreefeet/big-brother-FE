import ListLayoutComponent from '@/features/contentList/ui/ListLayoutComponent';
import { noticeItems } from '@/shared/mock/contentList';

const page = () => {
  return <ListLayoutComponent items={noticeItems} title="공지사항" />;
};

export default page;
