import { Popover } from "@/components/ui/popover";
import { Portal } from "@ark-ui/react/portal";

export function PopoverPortalled() {
  return (
    <Popover.Root portalled>
      <Popover.Trigger>
        Click Me <Popover.Indicator>{">"}</Popover.Indicator>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Title>Title</Popover.Title>
            <Popover.Description>Description</Popover.Description>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}
