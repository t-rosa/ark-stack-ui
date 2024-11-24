import { Popover } from "@/components/ui/popover";

export function PopoverOnOpenChange() {
  return (
    <Popover.Root onOpenChange={(open) => alert(open ? "opened" : "closed")}>
      <Popover.Trigger>
        Click Me <Popover.Indicator>{">"}</Popover.Indicator>
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Title>Title</Popover.Title>
          <Popover.Description>Description</Popover.Description>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
}
