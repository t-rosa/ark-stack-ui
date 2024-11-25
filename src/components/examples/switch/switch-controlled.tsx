import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function SwitchControlled() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch.Root
      checked={checked}
      onCheckedChange={(e) => setChecked(e.checked)}
    >
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Label</Switch.Label>
      <Switch.HiddenInput />
    </Switch.Root>
  );
}
