import { Toggle } from "@/components/ui/toggle";
import { Volume, VolumeOff } from "lucide-react";
import { useState } from "react";

export function ToggleControlled() {
  const [pressed, setPressed] = useState(false);
  return (
    <div>
      <Toggle.Root pressed={pressed} onPressedChange={setPressed}>
        {pressed ? <Volume /> : <VolumeOff />}
      </Toggle.Root>
      <p>Volume is {pressed ? "unmuted" : "muted"}</p>
    </div>
  );
}
