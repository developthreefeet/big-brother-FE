import MiniNoticeList from '@/features/contentList/ui/MiniNoticeList';
import CarouselComponent from '@/widgets/CarouselComponent';
import IconContainer from '@/views/main/IconContainer';

const page = () => {
  return (
    <div className="space-y-8 flex flex-col justify-center items-center">
      <CarouselComponent />
      <MiniNoticeList />
      <IconContainer />
    </div>
  );
};

export default page;
