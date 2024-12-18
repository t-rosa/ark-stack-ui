import { DialogBasic } from "@/components/examples/dialog/dialog-basic";
import { DialogControlled } from "@/components/examples/dialog/dialog-controlled";
import { DialogLazyMount } from "@/components/examples/dialog/dialog-lazy-mount";
import { DialogRenderFn } from "@/components/examples/dialog/dialog-render-fn";
import { DialogRootProvider } from "@/components/examples/dialog/dialog-root-provider";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dialog")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="dialog">
      <DialogBasic />
      <DialogControlled />
      <DialogLazyMount />
      <DialogRenderFn />
      <DialogRootProvider />
    </section>
  );
}
