import { FieldInput } from "@/components/examples/field/field-input";
import { FieldSelect } from "@/components/examples/field/field-select";
import { FieldTextarea } from "@/components/examples/field/field-textarea";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/field")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="field">
      <FieldInput />
      <FieldTextarea />
      <FieldSelect />
    </section>
  );
}
