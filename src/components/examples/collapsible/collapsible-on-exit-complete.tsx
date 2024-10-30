import { Collapsible } from "@/components/ui/collapsible";

export function CollapsibleOnExitComplete() {
  return (
    <Collapsible.Root onExitComplete={() => alert("on exit")}>
      <Collapsible.Trigger>Toggle</Collapsible.Trigger>
      <Collapsible.Content>Content</Collapsible.Content>
    </Collapsible.Root>
  );
}
