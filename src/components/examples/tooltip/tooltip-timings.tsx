import { Tooltip } from "@/components/ui/tooltip";

export function TooltipTimings() {
  return (
    <Tooltip.Root closeDelay={0} openDelay={0}>
      <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
      <Tooltip.Positioner>
        <Tooltip.Content>I am a tooltip!</Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  );
}
