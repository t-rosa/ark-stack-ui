import { SignaturePadBasic } from "@/components/examples/signature-pad/signature-pad-basic";
import { SignaturePadImagePreview } from "@/components/examples/signature-pad/signature-pad-image-preview";
import { SignaturePadRootProvider } from "@/components/examples/signature-pad/signature-pad-root-provider";
import { SignaturePadWithField } from "@/components/examples/signature-pad/signature-pad-with-field";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/signature-pad")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="signature-pad">
      <SignaturePadBasic />
      <SignaturePadImagePreview />
      <SignaturePadWithField />
      <SignaturePadRootProvider />
    </section>
  );
}
