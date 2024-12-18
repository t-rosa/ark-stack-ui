import { ToggleBasic } from "@/components/examples/toggle/toggle-basic";
import { ToggleControlled } from "@/components/examples/toggle/toggle-controlled";
import { ToggleDisabled } from "@/components/examples/toggle/toggle-disabled";
import { ToggleIndicator } from "@/components/examples/toggle/toggle-indicator";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/toggle")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="toggle">
      <ToggleBasic />
      <ToggleControlled />
      <ToggleDisabled />
      <ToggleIndicator />
    </section>
  );
}
