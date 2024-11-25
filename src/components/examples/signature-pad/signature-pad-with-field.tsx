import { Field } from "@/components/ui/field";
import { SignaturePad } from "@/components/ui/signature-pad";
import { type FieldRootProps } from "@ark-ui/react/field";
import { useState } from "react";

export function SignaturePadWithField(props: FieldRootProps) {
  const [value, setValue] = useState("");

  return (
    <Field.Root {...props}>
      <SignaturePad.Root
        onDrawEnd={(details) =>
          details.getDataUrl("image/png").then((url) => setValue(url))
        }
      >
        <SignaturePad.Label>Label</SignaturePad.Label>
        <SignaturePad.Control>
          <SignaturePad.Segment />
          <SignaturePad.ClearTrigger>Clear</SignaturePad.ClearTrigger>
          <SignaturePad.Guide />
        </SignaturePad.Control>
        <SignaturePad.HiddenInput value={value} />
      </SignaturePad.Root>
      <Field.HelperText>Additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  );
}
