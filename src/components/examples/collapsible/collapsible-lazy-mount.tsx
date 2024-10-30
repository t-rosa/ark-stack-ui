import { Collapsible } from "@/components/ui/collapsible";

export function CollapsibleLazyMount() {
  return (
    <Collapsible.Root lazyMount>
      <Collapsible.Trigger>Toggle</Collapsible.Trigger>
      <Collapsible.Content>Content</Collapsible.Content>
    </Collapsible.Root>
  );
}
