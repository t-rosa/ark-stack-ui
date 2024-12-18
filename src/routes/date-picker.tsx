import { DatePickerBasic } from "@/components/examples/date-picker/date-picker-basic";
import { DatePickerRange } from "@/components/examples/date-picker/date-picker-range";
import { DatePickerRootProvider } from "@/components/examples/date-picker/date-picker-root-provider";
import { DatePickerStandalone } from "@/components/examples/date-picker/date-picker-standalone";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/date-picker")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="date-picker">
      <DatePickerBasic />
      <DatePickerRange />
      <DatePickerStandalone />
      <DatePickerRootProvider />
    </section>
  );
}
