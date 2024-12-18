import { CheckboxBasic } from "@/components/examples/checkbox/checkbox-basic";
import { CheckboxControlled } from "@/components/examples/checkbox/checkbox-controlled";
import { CheckboxGroup } from "@/components/examples/checkbox/checkbox-group";
import { CheckboxIndeterminate } from "@/components/examples/checkbox/checkbox-indeterminate";
import { CheckboxRenderProp } from "@/components/examples/checkbox/checkbox-render-props";
import { CheckboxRootProvider } from "@/components/examples/checkbox/checkbox-root-provider";
import { CheckboxWithField } from "@/components/examples/checkbox/checkbox-with-field";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/checkbox")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="checkbox">
      <CheckboxBasic />
      <CheckboxControlled />
      <CheckboxIndeterminate />
      <CheckboxGroup />
      <CheckboxRenderProp />
      <CheckboxWithField />
      <CheckboxRootProvider />
    </section>
  );
}
