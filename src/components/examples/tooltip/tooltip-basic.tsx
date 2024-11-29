import { Tooltip } from "@/components/ui/tooltip";

export function TooltipBasic() {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger disabled>Hover Me</Tooltip.Trigger>
      <Tooltip.Positioner>
        <Tooltip.Content>I am a tooltip!</Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  );
}
