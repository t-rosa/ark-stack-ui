import { AccordionBasic } from "./components/examples/accordion/accordion-basic";
import { AccordionCollapsible } from "./components/examples/accordion/accordion-collapsible";
import { AccordionHorizontal } from "./components/examples/accordion/accordion-horizontal";
import { AccordionMultiple } from "./components/examples/accordion/accordion-multiple";
import { AccordionRootProvider } from "./components/examples/accordion/accordion-root-provider";

function App() {
  return (
    <>
      <AccordionBasic />
      <AccordionCollapsible />
      <AccordionHorizontal />
      <AccordionMultiple />
      <AccordionRootProvider />
    </>
  );
}

export default App;
