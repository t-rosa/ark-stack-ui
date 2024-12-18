import { RadioGroupBasic } from "@/components/examples/radio-group/radio-group-basic";
import { RadioGroupDisabled } from "@/components/examples/radio-group/radio-group-disabled";
import { RadioGroupInitialValue } from "@/components/examples/radio-group/radio-group-initial-value";
import { RadioGroupOnEvent } from "@/components/examples/radio-group/radio-group-on-event";
import { RadioGroupRootProvider } from "@/components/examples/radio-group/radio-group-root-provider";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/radio-group")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="radio-group">
      <RadioGroupBasic />
      <RadioGroupDisabled />
      <RadioGroupInitialValue />
      <RadioGroupOnEvent />
      <RadioGroupRootProvider />
    </section>
  );
}
