import { PopoverArrow } from "@/components/examples/popover/popover-arrow";
import { PopoverBasic } from "@/components/examples/popover/popover-basic";
import { PopoverCloseBehavior } from "@/components/examples/popover/popover-close-behavior";
import { PopoverControlled } from "@/components/examples/popover/popover-controlled";
import { PopoverModal } from "@/components/examples/popover/popover-modal";
import { PopoverOnOpenChange } from "@/components/examples/popover/popover-on-open-change";
import { PopoverPortalled } from "@/components/examples/popover/popover-portalled";
import { PopoverPositioning } from "@/components/examples/popover/popover-positioning";
import { PopoverRootProvider } from "@/components/examples/popover/popover-root-provider";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/popover")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="popover">
      <PopoverBasic />
      <PopoverPortalled />
      <PopoverArrow />
      <PopoverOnOpenChange />
      <PopoverControlled />
      <PopoverCloseBehavior />
      <PopoverPositioning />
      <PopoverModal />
      <PopoverRootProvider />
    </section>
  );
}
