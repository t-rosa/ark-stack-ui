import { TabsBasic } from "@/components/examples/tabs/tabs-basic";
import { TabsControlled } from "@/components/examples/tabs/tabs-controlled";
import { TabsDisabledTab } from "@/components/examples/tabs/tabs-disabled-tab";
import { TabsIndicator } from "@/components/examples/tabs/tabs-indicator";
import { TabsInitialTab } from "@/components/examples/tabs/tabs-initial-tab";
import { TabsLazyMount } from "@/components/examples/tabs/tabs-lazy-mount";
import { TabsManual } from "@/components/examples/tabs/tabs-manual";
import { TabsRootProvider } from "@/components/examples/tabs/tabs-root-provider";
import { TabsVertical } from "@/components/examples/tabs/tabs-vertical";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tabs")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="tabs">
      <TabsBasic />
      <TabsInitialTab />
      <TabsIndicator />
      <TabsLazyMount />
      <TabsDisabledTab />
      <TabsControlled />
      <TabsVertical />
      <TabsManual />
      <TabsRootProvider />
    </section>
  );
}
