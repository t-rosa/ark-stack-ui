import { Editable } from "@/components/ui/editable";
import { Field } from "@/components/ui/field";
import { FieldRootProps } from "@ark-ui/react/field";

export function EditableWithField(props: FieldRootProps) {
  return (
    <Field.Root {...props}>
      <Editable.Root placeholder="Placeholder" activationMode="dblclick">
        <Editable.Label>Label</Editable.Label>
        <Editable.Area>
          <Editable.Input />
          <Editable.Preview />
        </Editable.Area>
      </Editable.Root>
      <Field.HelperText>Additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  );
}
