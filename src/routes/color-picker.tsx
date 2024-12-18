import { ColorPickerBasic } from "@/components/examples/color-picker/color-picker-basic";
import { ColorPickerControlled } from "@/components/examples/color-picker/color-picker-controlled";
import { ColorPickerRootProvider } from "@/components/examples/color-picker/color-picker-root-provider";
import { ColorPickerWithField } from "@/components/examples/color-picker/color-picker-with-field";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/color-picker")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="color-picker">
      <ColorPickerBasic />
      <ColorPickerControlled />
      <ColorPickerWithField />
      <ColorPickerRootProvider />
    </section>
  );
}
