import { StepsBasic } from "@/components/examples/steps/steps-basic";
import { StepsRootProvider } from "@/components/examples/steps/steps-root-provider";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/steps")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="steps">
      <StepsBasic />
      <StepsRootProvider />
    </section>
  );
}
