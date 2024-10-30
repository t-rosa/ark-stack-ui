import { Checkbox } from "@/components/ui/checkbox";
import { CheckIcon } from "lucide-react";

export function CheckboxRenderProp() {
  return (
    <Checkbox.Root>
      <Checkbox.Control>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Context>
        {(checkbox) => (
          <Checkbox.Label>
            Checkbox {checkbox.checked.toString()}
          </Checkbox.Label>
        )}
      </Checkbox.Context>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  );
}
