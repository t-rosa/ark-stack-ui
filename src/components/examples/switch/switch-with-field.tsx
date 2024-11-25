import { Field } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
import { type FieldRootProps } from "@ark-ui/react/field";

export const SwitchWithField = (props: FieldRootProps) => (
  <Field.Root {...props}>
    <Switch.Root>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Label</Switch.Label>
      <Switch.HiddenInput />
    </Switch.Root>
    <Field.HelperText>Additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
);
