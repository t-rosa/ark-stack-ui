import { CollapsibleBasic } from "@/components/examples/collapsible/collapsible-basic";
import { CollapsibleLazyMount } from "@/components/examples/collapsible/collapsible-lazy-mount";
import { CollapsibleLazyMountAndUnmountOnExit } from "@/components/examples/collapsible/collapsible-lazy-mount-and-unmount-on-exit";
import { CollapsibleOnExitComplete } from "@/components/examples/collapsible/collapsible-on-exit-complete";
import { CollapsibleRootProvider } from "@/components/examples/collapsible/collapsible-root-provider";
import { CollapsibleUnmountOnExit } from "@/components/examples/collapsible/collapsible-unmount-on-exit";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/collapsible")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="collapsible">
      <CollapsibleBasic />
      <CollapsibleOnExitComplete />
      <CollapsibleLazyMount />
      <CollapsibleUnmountOnExit />
      <CollapsibleLazyMountAndUnmountOnExit />
      <CollapsibleRootProvider />
    </section>
  );
}
