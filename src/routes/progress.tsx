import { ProgressCircularBasic } from "@/components/examples/progress/progress-circular-basic";
import { ProgressCircularIndeterminate } from "@/components/examples/progress/progress-circular-indeterminate";
import { ProgressCircularInitialValue } from "@/components/examples/progress/progress-circular-initial-value";
import { ProgressCircularMinMax } from "@/components/examples/progress/progress-circular-min-max";
import { ProgressCircularRootProvider } from "@/components/examples/progress/progress-circular-root-provider";
import { ProgressCircularValueText } from "@/components/examples/progress/progress-circular-value-text";
import { ProgressLinearBasic } from "@/components/examples/progress/progress-linear-basic";
import { ProgressLinearIndeterminate } from "@/components/examples/progress/progress-linear-indeterminate";
import { ProgressLinearInitialValue } from "@/components/examples/progress/progress-linear-initial-value";
import { ProgressLinearMinMax } from "@/components/examples/progress/progress-linear-min-max";
import { ProgressLinearRootProvider } from "@/components/examples/progress/progress-linear-root-provider";
import { ProgressLinearValueText } from "@/components/examples/progress/progress-linear-value-text";
import { ProgressLinearVertical } from "@/components/examples/progress/progress-linear-vertical";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/progress")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <section id="progress-circular">
        <ProgressCircularBasic />
        <ProgressCircularInitialValue />
        <ProgressCircularMinMax />
        <ProgressCircularIndeterminate />
        <ProgressCircularValueText />
        <ProgressCircularRootProvider />
      </section>
      <section id="progress-linear">
        <ProgressLinearBasic />
        <ProgressLinearInitialValue />
        <ProgressLinearMinMax />
        <ProgressLinearIndeterminate />
        <ProgressLinearValueText />
        <ProgressLinearVertical />
        <ProgressLinearRootProvider />
      </section>
    </div>
  );
}
