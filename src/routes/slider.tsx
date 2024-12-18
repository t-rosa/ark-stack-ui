import { SliderBasic } from "@/components/examples/slider/slider-basic";
import { SliderCenterOrigin } from "@/components/examples/slider/slider-center-origin";
import { SliderInitialValue } from "@/components/examples/slider/slider-initial-value";
import { SliderMinMax } from "@/components/examples/slider/slider-min-max";
import { SliderOnEvent } from "@/components/examples/slider/slider-on-event";
import { SliderRange } from "@/components/examples/slider/slider-range";
import { SliderRootProvider } from "@/components/examples/slider/slider-root-provider";
import { SliderStep } from "@/components/examples/slider/slider-step";
import { SliderVertical } from "@/components/examples/slider/slider-vertical";
import { SliderWithMarks } from "@/components/examples/slider/slider-with-mark";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/slider")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="slider">
      <SliderBasic />
      <SliderRange />
      <SliderWithMarks />
      <SliderInitialValue />
      <SliderMinMax />
      <SliderStep />
      <SliderOnEvent />
      <SliderVertical />
      <SliderCenterOrigin />
      <SliderRootProvider />
    </section>
  );
}
