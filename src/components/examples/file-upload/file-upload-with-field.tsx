import { Field } from "@/components/ui/field";
import { FileUpload } from "@/components/ui/file-upload";
import { type FieldRootProps } from "@ark-ui/react/field";

export function FileUploadWithField(props: FieldRootProps) {
  return (
    <Field.Root {...props}>
      <FileUpload.Root maxFiles={5}>
        <FileUpload.Label>Label</FileUpload.Label>
        <FileUpload.Trigger>Select</FileUpload.Trigger>
        <FileUpload.ItemGroup />
        <FileUpload.HiddenInput data-testid="input" />
      </FileUpload.Root>
      <Field.HelperText>Additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  );
}
