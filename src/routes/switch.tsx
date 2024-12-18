import { SwitchBasic } from "@/components/examples/switch/switch-basic";
import { SwitchControlled } from "@/components/examples/switch/switch-controlled";
import { SwitchRenderProp } from "@/components/examples/switch/switch-render-prop";
import { SwitchRootProvider } from "@/components/examples/switch/switch-root-provider";
import { SwitchWithField } from "@/components/examples/switch/switch-with-field";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/switch")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="switch">
      <SwitchBasic />
      <SwitchControlled />
      <SwitchRenderProp />
      <SwitchWithField />
      <SwitchRootProvider />
    </section>
  );
}
