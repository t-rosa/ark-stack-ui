import { ComboboxAdvanced } from "@/components/examples/combobox/combobox-advanced";
import { ComboboxBasic } from "@/components/examples/combobox/combobox-basic";
import { ComboboxRootProvider } from "@/components/examples/combobox/combobox-root-provider";
import { ComboboxWithField } from "@/components/examples/combobox/combobox-with-field";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/combobox")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="combobox">
      <ComboboxBasic />
      <ComboboxAdvanced />
      <ComboboxWithField />
      <ComboboxRootProvider />
    </section>
  );
}
