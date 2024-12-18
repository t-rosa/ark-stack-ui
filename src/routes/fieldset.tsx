import { FieldsetBasic } from "@/components/examples/fieldset/fieldset-basic";
import { FieldsetWithCheckbox } from "@/components/examples/fieldset/fieldset-with-checkbox";
import { FieldsetWithField } from "@/components/examples/fieldset/fieldset-with-field";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/fieldset")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="fieldset">
      <FieldsetBasic />
      <FieldsetWithField />
      <FieldsetWithCheckbox />
    </section>
  );
}
