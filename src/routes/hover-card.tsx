import { HoverCardBasic } from "@/components/examples/hover-card/hover-card-basic";
import { HoverCardControlled } from "@/components/examples/hover-card/hover-card-controlled";
import { HoverCardPositioning } from "@/components/examples/hover-card/hover-card-positioning";
import { HoverCardRootProvider } from "@/components/examples/hover-card/hover-card-root-provider";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/hover-card")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="hover-card">
      <HoverCardBasic />
      <HoverCardControlled />
      <HoverCardPositioning />
      <HoverCardRootProvider />
    </section>
  );
}
