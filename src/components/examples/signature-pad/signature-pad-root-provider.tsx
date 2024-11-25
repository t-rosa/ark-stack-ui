import { SignaturePad } from "@/components/ui/signature-pad";
import { useSignaturePad } from "@ark-ui/react/signature-pad";

export function SignaturePadRootProvider() {
  const signaturePad = useSignaturePad();

  return (
    <>
      <button onClick={() => signaturePad.clear()}>Clear</button>

      <SignaturePad.RootProvider value={signaturePad}>
        <SignaturePad.Label>Sign below</SignaturePad.Label>
        <SignaturePad.Control>
          <SignaturePad.Segment />
          <SignaturePad.ClearTrigger>Clear</SignaturePad.ClearTrigger>
          <SignaturePad.Guide />
        </SignaturePad.Control>
      </SignaturePad.RootProvider>
    </>
  );
}
