import { Carousel } from "@/components/ui/carousel";
import { useCarousel } from "@ark-ui/react/carousel";

export function CarouselRootProvider() {
  const images = [
    "https://tinyurl.com/5b6ka8jd",
    "https://tinyurl.com/7rmccdn5",
    "https://tinyurl.com/59jxz9uu",
  ];
  const carousel = useCarousel();

  return (
    <>
      <button onClick={() => carousel.scrollToNext()}>Next</button>

      <Carousel.RootProvider value={carousel}>
        <Carousel.Control>
          <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
          <Carousel.NextTrigger>Next</Carousel.NextTrigger>
        </Carousel.Control>
        <Carousel.IndicatorGroup>
          {images.map((_, index) => (
            <Carousel.Indicator key={index} index={index}>
              {index + 1}
            </Carousel.Indicator>
          ))}
        </Carousel.IndicatorGroup>
        <Carousel.Viewport>
          <Carousel.ItemGroup>
            {images.map((image, index) => (
              <Carousel.Item key={index} index={index}>
                <img src={image} alt={`Slide ${index}`} />
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>
        </Carousel.Viewport>
      </Carousel.RootProvider>
    </>
  );
}
