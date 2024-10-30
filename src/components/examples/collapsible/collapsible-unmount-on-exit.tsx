import { Collapsible } from "@/components/ui/collapsible";

export function CollapsibleUnmountOnExit() {
  return (
    <Collapsible.Root unmountOnExit>
      <Collapsible.Trigger>Toggle</Collapsible.Trigger>
      <Collapsible.Content>Content</Collapsible.Content>
    </Collapsible.Root>
  );
}
