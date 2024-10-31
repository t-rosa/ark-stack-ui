import { Field } from "@/components/ui/field";

export function FieldTextarea() {
  return (
    <Field.Root>
      <Field.Label>Label</Field.Label>
      <Field.Textarea />
      <Field.HelperText>Some additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  );
}
