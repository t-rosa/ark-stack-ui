import { ToggleGroup } from "@/components/ui/toggle-group";
import { useToggleGroup } from "@ark-ui/react/toggle-group";

export function ToggleGroupRootProvider() {
  const toggleGroup = useToggleGroup();

  return (
    <>
      <button onClick={() => toggleGroup.setValue(["b"])}>Set to B</button>

      <ToggleGroup.RootProvider value={toggleGroup}>
        <ToggleGroup.Item value="a">A</ToggleGroup.Item>
        <ToggleGroup.Item value="b">B</ToggleGroup.Item>
        <ToggleGroup.Item value="c">C</ToggleGroup.Item>
      </ToggleGroup.RootProvider>
    </>
  );
}
