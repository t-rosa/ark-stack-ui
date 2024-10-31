import { Editable } from "@/components/ui/editable";

export function EditableBasic() {
  return (
    <Editable.Root placeholder="Placeholder">
      <Editable.Label>Label</Editable.Label>
      <Editable.Area>
        <Editable.Input />
        <Editable.Preview />
      </Editable.Area>
    </Editable.Root>
  );
}
