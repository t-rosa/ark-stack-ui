import { SignaturePad } from "@/components/ui/signature-pad";

export function SignaturePadBasic() {
  return (
    <SignaturePad.Root>
      <SignaturePad.Label>Sign below</SignaturePad.Label>
      <SignaturePad.Control>
        <SignaturePad.Segment />
        <SignaturePad.ClearTrigger>Clear</SignaturePad.ClearTrigger>
        <SignaturePad.Guide />
      </SignaturePad.Control>
    </SignaturePad.Root>
  );
}
