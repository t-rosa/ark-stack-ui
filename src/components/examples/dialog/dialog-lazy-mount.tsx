import { Dialog } from "@/components/ui/dialog";
import { Portal } from "@ark-ui/react/portal";

export function DialogLazyMount() {
  return (
    <Dialog.Root
      lazyMount
      unmountOnExit
      onExitComplete={() => console.log("onExitComplete invoked")}
    >
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>Dialog Description</Dialog.Description>
            <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
