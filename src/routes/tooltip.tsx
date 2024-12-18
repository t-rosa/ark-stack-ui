import { TooltipArrow } from "@/components/examples/tooltip/tooltip-arrow";
import { TooltipBasic } from "@/components/examples/tooltip/tooltip-basic";
import { TooltipControlled } from "@/components/examples/tooltip/tooltip-controlled";
import { TooltipPositioning } from "@/components/examples/tooltip/tooltip-positioning";
import { TooltipRenderFn } from "@/components/examples/tooltip/tooltip-render-fn";
import { TooltipRootProvider } from "@/components/examples/tooltip/tooltip-root-provider";
import { TooltipTimings } from "@/components/examples/tooltip/tooltip-timings";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tooltip")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="tooltip">
      <TooltipBasic />
      <TooltipControlled />
      <TooltipRenderFn />
      <TooltipArrow />
      <TooltipTimings />
      <TooltipPositioning />
      <TooltipRootProvider />
    </section>
  );
}
