import { Field } from "@/components/ui/field";
import { NumberInput } from "@/components/ui/number-input";
import { FieldRootProps } from "@ark-ui/react/field";

export function NumberInputWithField(props: FieldRootProps) {
  return (
    <Field.Root {...props}>
      <NumberInput.Root>
        <NumberInput.Label>Label</NumberInput.Label>
        <NumberInput.Input />
        <NumberInput.Control>
          <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
          <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
        </NumberInput.Control>
      </NumberInput.Root>
      <Field.HelperText>Additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  );
}
