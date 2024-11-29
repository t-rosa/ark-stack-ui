import { Toggle } from "@/components/ui/toggle";
import { Volume, VolumeOff } from "lucide-react";

export function ToggleIndicator() {
  return (
    <Toggle.Root>
      <Toggle.Indicator fallback={<Volume />}>
        <VolumeOff />
      </Toggle.Indicator>
    </Toggle.Root>
  );
}
