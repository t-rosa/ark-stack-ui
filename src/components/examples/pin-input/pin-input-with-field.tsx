import { Field } from "@/components/ui/field";
import { PinInput } from "@/components/ui/pin-input";
import { type FieldRootProps } from "@ark-ui/react/field";

export function PinInputWithField(props: FieldRootProps) {
  return (
    <Field.Root {...props}>
      <PinInput.Root>
        <PinInput.Label>Label</PinInput.Label>
        <PinInput.Control>
          {[0, 1, 2].map((id, index) => (
            <PinInput.Input key={id} index={index} />
          ))}
        </PinInput.Control>
        <PinInput.HiddenInput />
      </PinInput.Root>
      <Field.HelperText>Additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  );
}
