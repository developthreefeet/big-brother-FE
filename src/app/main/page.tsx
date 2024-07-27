import MiniNoticeList from '@/features/contentList/ui/MiniNoticeList';
import { noticeItems } from '@/shared/mock/contentList';
import { imageUrls } from '@/shared/mock/images';
import CarouselComponent from '@/views/main/CarouselComponent';
import IconContainer from '@/views/main/IconContainer';

const page = () => {
  return (
    <div className="space-y-8 flex flex-col justify-center items-center">
      <CarouselComponent imageUrls={imageUrls} />
      <MiniNoticeList noticeContents={noticeItems} />
      <IconContainer />
    </div>
  );
};

export default page;
