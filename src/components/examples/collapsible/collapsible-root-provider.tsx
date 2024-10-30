import { Collapsible } from "@/components/ui/collapsible";
import { useCollapsible } from "@ark-ui/react/collapsible";

export function CollapsibleRootProvider() {
  const collapsible = useCollapsible();

  return (
    <>
      <span>{collapsible.visible ? "Visible" : "Hidden"}</span>

      <Collapsible.RootProvider value={collapsible}>
        <Collapsible.Trigger>Toggle</Collapsible.Trigger>
        <Collapsible.Content>Content</Collapsible.Content>
      </Collapsible.RootProvider>
    </>
  );
}
