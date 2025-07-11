import { QrCode } from "@/components/ui/qr-code";

export function QrCodeErrorCorrection() {
  return (
    <QrCode.Root value="http://ark-ui.com" encoding={{ ecc: "H" }}>
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
    </QrCode.Root>
  );
}
