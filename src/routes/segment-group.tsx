import { SegmentGroupDisabled } from "@/components/examples/segment-group/segment-gorup-disabled";
import { SegmentGroupBasic } from "@/components/examples/segment-group/segment-group-basic";
import { SegmentGroupControlled } from "@/components/examples/segment-group/segment-group-controlled";
import { SegmentGroupInitialValue } from "@/components/examples/segment-group/segment-group-initial-value";
import { SegmentGroupRootProvider } from "@/components/examples/segment-group/segment-group-root-provider";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/segment-group")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="segment-group">
      <SegmentGroupBasic />
      <SegmentGroupInitialValue />
      <SegmentGroupControlled />
      <SegmentGroupDisabled />
      <SegmentGroupRootProvider />
    </section>
  );
}
