import { HoverCard } from "@/components/ui/hover-card";
import { Portal } from "@ark-ui/react/portal";

export function HoverCardPositioning() {
  return (
    <HoverCard.Root positioning={{ placement: "right", gutter: 12 }}>
      <HoverCard.Trigger>Hover me</HoverCard.Trigger>
      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content>
            <HoverCard.Arrow>
              <HoverCard.ArrowTip />
            </HoverCard.Arrow>
            Content
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  );
}
