import { Collapsible } from "@/components/ui/collapsible";

export function CollapsibleBasic() {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger>Toggle</Collapsible.Trigger>
      <Collapsible.Content>Content</Collapsible.Content>
    </Collapsible.Root>
  );
}
