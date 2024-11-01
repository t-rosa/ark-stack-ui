import { HoverCard } from "@/components/ui/hover-card";
import { Portal } from "@ark-ui/react/portal";

export function HoverCardRenderProp() {
  return (
    <HoverCard.Root>
      <HoverCard.Context>
        {(hoverCard) => (
          <HoverCard.Trigger>
            Hover me {hoverCard.open ? "▲" : "▼"}{" "}
          </HoverCard.Trigger>
        )}
      </HoverCard.Context>
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
