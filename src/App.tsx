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
import { CheckboxBasic } from "./components/examples/checkbox/checkbox-basic";
import { CheckboxControlled } from "./components/examples/checkbox/checkbox-controlled";
import { CheckboxGroup } from "./components/examples/checkbox/checkbox-group";
import { CheckboxIndeterminate } from "./components/examples/checkbox/checkbox-indeterminate";
import { CheckboxRenderProp } from "./components/examples/checkbox/checkbox-render-props";
import { CheckboxRootProvider } from "./components/examples/checkbox/checkbox-root-provider";
import { CheckboxWithField } from "./components/examples/checkbox/checkbox-with-field";

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
      <section id="checkbox" className="max-w-7xl mx-auto">
        <CheckboxBasic />
        <CheckboxControlled />
        <CheckboxIndeterminate />
        <CheckboxGroup />
        <CheckboxRenderProp />
        <CheckboxWithField />
        <CheckboxRootProvider />
      </section>
    </main>
  );
}

export default App;
