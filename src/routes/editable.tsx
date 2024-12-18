import { EditableBasic } from "@/components/examples/editable/editable-basic";
import { EditableCustomControls } from "@/components/examples/editable/editable-custom-controls";
import { EditableRootProvider } from "@/components/examples/editable/editable-root-provider";
import { EditableWithField } from "@/components/examples/editable/editable-with-field";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/editable")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="editable">
      <EditableBasic />
      <EditableCustomControls />
      <EditableWithField />
      <EditableRootProvider />
    </section>
  );
}
