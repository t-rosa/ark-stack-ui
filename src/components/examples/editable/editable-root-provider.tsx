import { Editable } from "@/components/ui/editable";
import { useEditable } from "@ark-ui/react/editable";

export function EditableRootProvider() {
  const editable = useEditable({ placeholder: "Placeholder" });

  return (
    <>
      <button onClick={() => editable.edit()}>Edit</button>

      <Editable.RootProvider value={editable}>
        <Editable.Label>Label</Editable.Label>
        <Editable.Area>
          <Editable.Input />
          <Editable.Preview />
        </Editable.Area>
      </Editable.RootProvider>
    </>
  );
}
