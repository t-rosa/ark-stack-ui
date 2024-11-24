import { PinInput } from "@/components/ui/pin-input";

export function PinInpuWithMask() {
  return (
    <PinInput.Root mask>
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
