import { Checkbox } from "@/components/ui/checkbox";
import { CheckIcon } from "lucide-react";

export function CheckboxBasic() {
  return (
    <Checkbox.Root>
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
