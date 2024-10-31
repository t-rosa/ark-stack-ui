import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import { Fieldset } from "@/components/ui/fieldset";
import { type FieldsetRootProps } from "@ark-ui/react/fieldset";

export function FieldsetWithCheckbox(props: FieldsetRootProps) {
  return (
    <Fieldset.Root {...props}>
      <Fieldset.Legend>Legend</Fieldset.Legend>
      <Fieldset.HelperText>Fieldset Helper Text</Fieldset.HelperText>
      <Fieldset.ErrorText>Fieldset Error Text</Fieldset.ErrorText>
      <Field.Root>
        <Checkbox.Root>
          <Checkbox.Label>Label</Checkbox.Label>
          <Checkbox.Control>
            <Checkbox.Indicator>✔️</Checkbox.Indicator>
          </Checkbox.Control>
          <Checkbox.HiddenInput />
        </Checkbox.Root>
        <Field.HelperText>Field Heler Text</Field.HelperText>
        <Field.ErrorText>Field Error Text</Field.ErrorText>
      </Field.Root>
    </Fieldset.Root>
  );
}
