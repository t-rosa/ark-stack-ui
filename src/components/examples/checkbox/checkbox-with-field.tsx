import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import { FieldRootProps } from "@ark-ui/react/field";
import { CheckIcon, MinusIcon } from "lucide-react";

export function CheckboxWithField(props: FieldRootProps) {
  return (
    <Field.Root {...props}>
      <Checkbox.Root>
        <Checkbox.Label>Label</Checkbox.Label>
        <Checkbox.Control>
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
          <Checkbox.Indicator indeterminate>
            <MinusIcon />
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.HiddenInput />
      </Checkbox.Root>
      <Field.HelperText>Additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  );
}
