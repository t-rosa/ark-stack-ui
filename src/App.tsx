import { AccordionBasic } from "./components/examples/accordion/accordion-basic";
import { AccordionCollapsible } from "./components/examples/accordion/accordion-collapsible";
import { AccordionHorizontal } from "./components/examples/accordion/accordion-horizontal";
import { AccordionMultiple } from "./components/examples/accordion/accordion-multiple";
import { AccordionRootProvider } from "./components/examples/accordion/accordion-root-provider";
import { AvatarBasic } from "./components/examples/avatar/avatar-basic";
import { AvatarEvents } from "./components/examples/avatar/avatar-events";
import { AvatarRootProvider } from "./components/examples/avatar/avatar-root-provider";
import { CarouselBasic } from "./components/examples/carousel/carousel-basic";
import { CarouselControlled } from "./components/examples/carousel/carousel-controlled";
import { CarouselCustomized } from "./components/examples/carousel/carousel-customized";
import { CarouselRootProvider } from "./components/examples/carousel/carousel-root-provider";

function App() {
  return (
    <main className="space-y-3">
      <section id="accordion" className="max-w-7xl mx-auto">
        <AccordionBasic />
        <AccordionCollapsible />
        <AccordionHorizontal />
        <AccordionMultiple />
        <AccordionRootProvider />
      </section>
      <section id="avatar" className="max-w-7xl mx-auto">
        <AvatarBasic />
        <AvatarEvents />
        <AvatarRootProvider />
      </section>
      <section id="carousel" className="max-w-7xl mx-auto">
        <CarouselBasic />
        <CarouselControlled />
        <CarouselCustomized />
        <CarouselRootProvider />
      </section>
    </main>
  );
}

export default App;
