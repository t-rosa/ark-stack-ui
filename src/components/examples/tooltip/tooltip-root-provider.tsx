import { Tooltip } from "@/components/ui/tooltip";
import { useTooltip } from "@ark-ui/react/tooltip";

export function TooltipRootProvider() {
  const tooltip = useTooltip();

  return (
    <>
      <button onClick={() => tooltip.setOpen(true)}>Open</button>

      <Tooltip.RootProvider value={tooltip}>
        <Tooltip.Trigger disabled>Hover Me</Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content>I am a tooltip!</Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.RootProvider>
    </>
  );
}
