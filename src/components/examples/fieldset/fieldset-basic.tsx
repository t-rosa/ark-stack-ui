import { Fieldset } from "@/components/ui/fieldset";
import { FieldsetRootProps } from "@ark-ui/react/fieldset";

export function FieldsetBasic(props: FieldsetRootProps) {
  return (
    <Fieldset.Root {...props}>
      <Fieldset.Legend>Legend</Fieldset.Legend>
      <Fieldset.HelperText>Helper text</Fieldset.HelperText>
      <Fieldset.ErrorText>Error text</Fieldset.ErrorText>
    </Fieldset.Root>
  );
}
