import { PinInput } from "@/components/ui/pin-input";

export function PinInputBlurred() {
  return (
    <PinInput.Root blurOnComplete>
      <PinInput.Label>Label</PinInput.Label>
      <PinInput.Control>
        {[0, 1, 2].map((id, index) => (
          <PinInput.Input key={id} index={index} />
        ))}
      </PinInput.Control>
      <PinInput.HiddenInput />
    </PinInput.Root>
  );
}
