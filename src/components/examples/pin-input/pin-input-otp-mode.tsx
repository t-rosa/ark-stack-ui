import { PinInput } from "@/components/ui/pin-input";

export function PinInputOTPMode() {
  return (
    <PinInput.Root otp>
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
