import { CarouselBasic } from "@/components/examples/carousel/carousel-basic";
import { CarouselControlled } from "@/components/examples/carousel/carousel-controlled";
import { CarouselCustomized } from "@/components/examples/carousel/carousel-customized";
import { CarouselRootProvider } from "@/components/examples/carousel/carousel-root-provider";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/carousel")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="carousel">
      <CarouselBasic />
      <CarouselControlled />
      <CarouselCustomized />
      <CarouselRootProvider />
    </section>
  );
}
