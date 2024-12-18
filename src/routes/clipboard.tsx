import { ClipboardBasic } from "@/components/examples/clipboard/clipboard-basic";
import { ClipboardRootProvider } from "@/components/examples/clipboard/clipboard-root-provider";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/clipboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="clipboard">
      <ClipboardBasic />
      <ClipboardRootProvider />
    </section>
  );
}
