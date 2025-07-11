import { ColorPicker } from "@/components/ui/color-picker";
import { Field } from "@/components/ui/field";
import { parseColor } from "@ark-ui/react/color-picker";
import { FieldRootProps } from "@ark-ui/react/field";

export function ColorPickerWithField(props: FieldRootProps) {
  return (
    <Field.Root {...props}>
      <ColorPicker.Root defaultValue={parseColor("#eb5e41")}>
        <ColorPicker.Label>Label</ColorPicker.Label>
        <ColorPicker.Control>
          <ColorPicker.ChannelInput channel="hex" />
          <ColorPicker.ChannelInput channel="alpha" />
          <ColorPicker.ValueText />
          <ColorPicker.Trigger>
            <ColorPicker.TransparencyGrid />
            <ColorPicker.ValueSwatch />
          </ColorPicker.Trigger>
        </ColorPicker.Control>
        <ColorPicker.Positioner>
          <ColorPicker.Content />
        </ColorPicker.Positioner>
        <ColorPicker.HiddenInput />
      </ColorPicker.Root>
      <Field.HelperText>Additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  );
}
