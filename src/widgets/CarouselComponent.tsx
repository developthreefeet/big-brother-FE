import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/ui/carousel';

const CarouselComponent = () => {
  return (
    <Carousel className="w-full " opts={{ loop: true }}>
      <CarouselContent>
        <CarouselItem key="1">
          <img
            src="/static/carousel-first.svg"
            className="w-full h-[240px] object-cover rounded-xl"
          />
        </CarouselItem>
        <CarouselItem key="2">
          <img
            src="/static/carousel-second.svg"
            className="w-full h-[240px] object-cover rounded-xl"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  );
};

export default CarouselComponent;
