import { Editable } from "@/components/ui/editable";

export function EditableCustomControls() {
  return (
    <Editable.Root placeholder="enter a value" defaultValue="Chakra">
      <Editable.Label>Label</Editable.Label>
      <Editable.Area>
        <Editable.Input />
        <Editable.Preview />
      </Editable.Area>
      <Editable.Context>
        {(editable) => (
          <Editable.Control>
            {editable.editing ? (
              <>
                <Editable.SubmitTrigger>Save</Editable.SubmitTrigger>
                <Editable.CancelTrigger>Cancel</Editable.CancelTrigger>
              </>
            ) : (
              <Editable.EditTrigger>Edit</Editable.EditTrigger>
            )}
          </Editable.Control>
        )}
      </Editable.Context>
    </Editable.Root>
  );
}
