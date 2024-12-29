import { AccordionBasic } from "@/components/examples/accordion/accordion-basic";
import { AccordionCollapsible } from "@/components/examples/accordion/accordion-collapsible";
import { AccordionHorizontal } from "@/components/examples/accordion/accordion-horizontal";
import { AccordionMultiple } from "@/components/examples/accordion/accordion-multiple";
import { AccordionRootProvider } from "@/components/examples/accordion/accordion-root-provider";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/accordion")({
  component: AccordionPage,
});

function AccordionPage() {
  return (
    <section id="accordion" className="max-w-xl grid gap-3">
      <div className="border p-3">
        <AccordionBasic />
      </div>
      <div className="border p-3">
        <AccordionCollapsible />
      </div>
      <div className="border p-3">
        <AccordionHorizontal />
      </div>
      <div className="border p-3">
        <AccordionMultiple />
      </div>
      <div className="border p-3">
        <AccordionRootProvider />
      </div>
    </section>
  );
}
