import { QrCode } from "@/components/ui/qr-code";
import { useQrCode } from "@ark-ui/react/qr-code";

export function QrCodeRootProvider() {
  const qrCode = useQrCode({ value: "http://ark-ui.com" });

  return (
    <>
      <button onClick={() => qrCode.setValue("https://ark-ui.com")}>
        Set Value
      </button>

      <QrCode.RootProvider value={qrCode}>
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.RootProvider>
    </>
  );
}
