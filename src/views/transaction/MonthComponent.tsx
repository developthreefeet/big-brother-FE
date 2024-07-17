import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/shared/ui/ui/carousel';

const MonthComponent = () => {
  const months = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];
  const currentMonthIndex = new Date().getMonth();
  return (
    <div className="mx-auto">
      <Carousel opts={{ loop: false, watchDrag: false }}>
        <CarouselContent className=" w-16 -ml-0">
          {months.slice(0, currentMonthIndex + 1).map((month, index) => (
            <CarouselItem key={index}>{month}</CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MonthComponent;
