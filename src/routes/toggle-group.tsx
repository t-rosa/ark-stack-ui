import { ToggleGroupBasic } from "@/components/examples/toggle-group/toggle-group-basic";
import { ToggleGroupInitialValue } from "@/components/examples/toggle-group/toggle-group-initial-value";
import { ToggleGroupMultiple } from "@/components/examples/toggle-group/toggle-group-multiple";
import { ToggleGroupRootProvider } from "@/components/examples/toggle-group/toggle-group-root-provider";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/toggle-group")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="toggle-group">
      <ToggleGroupBasic />
      <ToggleGroupMultiple />
      <ToggleGroupInitialValue />
      <ToggleGroupRootProvider />
    </section>
  );
}
