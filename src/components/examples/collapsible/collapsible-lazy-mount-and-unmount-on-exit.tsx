import { Collapsible } from "@/components/ui/collapsible";

export function CollapsibleLazyMountAndUnmountOnExit() {
  return (
    <Collapsible.Root lazyMount unmountOnExit>
      <Collapsible.Trigger>Toggle</Collapsible.Trigger>
      <Collapsible.Content>Content</Collapsible.Content>
    </Collapsible.Root>
  );
}
