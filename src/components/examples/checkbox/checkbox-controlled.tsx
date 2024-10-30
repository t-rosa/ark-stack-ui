import { Checkbox } from "@/components/ui/checkbox";
import { type CheckboxCheckedState } from "@ark-ui/react/checkbox";
import { CheckIcon } from "lucide-react";
import { useState } from "react";

export function CheckboxControlled() {
  const [checked, setChecked] = useState<CheckboxCheckedState>(true);

  return (
    <Checkbox.Root
      checked={checked}
      onCheckedChange={(e) => setChecked(e.checked)}
    >
      <Checkbox.Label>Checkbox</Checkbox.Label>
      <Checkbox.Control>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  );
}
