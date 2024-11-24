import { PinInput } from "@/components/ui/pin-input";

export function PinInputInitialValue() {
  return (
    <PinInput.Root defaultValue={["1", "2", "3"]}>
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
