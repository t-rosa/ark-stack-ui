import { Clipboard } from "@/components/ui/clipboard";
import { useClipboard } from "@ark-ui/react/clipboard";
import { CheckIcon, ClipboardCopyIcon } from "lucide-react";

export function ClipboardRootProvider() {
  const clipboard = useClipboard({ value: "https://ark-ui.com" });

  return (
    <>
      <button onClick={() => clipboard.copy()}>Copy</button>

      <Clipboard.RootProvider value={clipboard}>
        <Clipboard.Label>Copy this link</Clipboard.Label>
        <Clipboard.Control>
          <Clipboard.Input />
          <Clipboard.Trigger>
            <Clipboard.Indicator copied={<CheckIcon />}>
              <ClipboardCopyIcon />
            </Clipboard.Indicator>
          </Clipboard.Trigger>
        </Clipboard.Control>
      </Clipboard.RootProvider>
    </>
  );
}
