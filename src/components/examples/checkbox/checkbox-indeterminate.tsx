import { Checkbox } from "@/components/ui/checkbox";
import { CheckIcon, MinusIcon } from "lucide-react";

export function CheckboxIndeterminate() {
  return (
    <Checkbox.Root checked="indeterminate">
      <Checkbox.Label>Checkbox</Checkbox.Label>
      <Checkbox.Control>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
        <Checkbox.Indicator indeterminate>
          <MinusIcon />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  );
}
