import { SelectAdvanced } from "@/components/examples/select/select-advanced";
import { SelectBasic } from "@/components/examples/select/select-basic";
import { SelectControlled } from "@/components/examples/select/select-controlled";
import { SelectFormLibrary } from "@/components/examples/select/select-form-library";
import { SelectMultiple } from "@/components/examples/select/select-multiple";
import { SelectWithField } from "@/components/examples/select/select-with-field";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/select")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="select">
      <SelectBasic />
      <SelectAdvanced />
      <SelectMultiple />
      <SelectControlled />
      <SelectFormLibrary />
      <SelectWithField />
      {/* <SelectRootProvider /> */}
    </section>
  );
}
