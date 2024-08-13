import MiniNoticeList from '@/features/contentList/ui/MiniNoticeList';
import { noticeItems } from '@/shared/mock/contentList';
import CarouselComponent from '@/widgets/CarouselComponent';
import IconContainer from '@/views/main/IconContainer';

const page = () => {
  return (
    <div className="space-y-8 flex flex-col justify-center items-center">
      <CarouselComponent />
      <MiniNoticeList noticeContents={noticeItems} />
      <IconContainer />
    </div>
  );
};

export default page;
