import { Checkbox } from "@/components/ui/checkbox";
import { CheckIcon } from "lucide-react";

const items = [
  { label: "React", value: "react" },
  { label: "Solid", value: "solid" },
  { label: "Vue", value: "vue" },
];

export function CheckboxGroup() {
  return (
    <Checkbox.Group
      defaultValue={["react"]}
      name="framework"
      onValueChange={console.log}
    >
      {items.map((item) => (
        <Checkbox.Root value={item.value} key={item.value}>
          <Checkbox.Label>{item.label}</Checkbox.Label>
          <Checkbox.Control>
            <Checkbox.Indicator>
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Control>
          <Checkbox.HiddenInput />
        </Checkbox.Root>
      ))}
    </Checkbox.Group>
  );
}
