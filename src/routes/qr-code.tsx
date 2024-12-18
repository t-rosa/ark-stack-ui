import { QrCodeBasic } from "@/components/examples/qr-code/qr-code-basic";
import { QrCodeErrorCorrection } from "@/components/examples/qr-code/qr-code-error-correction";
import { QrCodeRootProvider } from "@/components/examples/qr-code/qr-code-root-provider";
import { QrCodeWithOverlay } from "@/components/examples/qr-code/qr-code-with-overlay";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/qr-code")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="qr-code">
      <QrCodeBasic />
      <QrCodeWithOverlay />
      <QrCodeErrorCorrection />
      <QrCodeRootProvider />
    </section>
  );
}
