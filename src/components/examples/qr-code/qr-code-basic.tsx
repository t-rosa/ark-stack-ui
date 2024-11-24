import { QrCode } from "@/components/ui/qr-code";

export function QrCodeBasic() {
  return (
    <QrCode.Root value="http://ark-ui.com">
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
    </QrCode.Root>
  );
}
