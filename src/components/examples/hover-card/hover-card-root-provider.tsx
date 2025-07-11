import { HoverCard } from "@/components/ui/hover-card";
import { useHoverCard } from "@ark-ui/react/hover-card";
import { Portal } from "@ark-ui/react/portal";

export function HoverCardRootProvider() {
  const hoverCard = useHoverCard();

  return (
    <>
      <button onClick={() => hoverCard.setOpen(true)}>Open</button>

      <HoverCard.RootProvider value={hoverCard}>
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
      </HoverCard.RootProvider>
    </>
  );
}
