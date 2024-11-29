import { Toggle } from "@/components/ui/toggle";
import { BoldIcon } from "lucide-react";

export function ToggleDisabled() {
  return (
    <Toggle.Root disabled>
      <BoldIcon />
    </Toggle.Root>
  );
}
