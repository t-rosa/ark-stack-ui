import { Select } from "@/components/ui/select";
import { Portal } from "@ark-ui/react/portal";
import { createListCollection } from "@ark-ui/react/select";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

interface Item {
  label: string;
  value: string;
  disabled?: boolean;
}

export function SelectControlled() {
  const [, setSelectedItems] = useState<Item[]>([]);

  const collection = createListCollection<Item>({
    items: [
      { label: "React", value: "react" },
      { label: "Solid", value: "solid" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte", disabled: true },
    ],
  });

  return (
    <Select.Root
      collection={collection}
      onValueChange={(e) => setSelectedItems(e.items)}
    >
      <Select.Label>Framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a Framework" />
          <Select.Indicator>
            <ChevronDownIcon />
          </Select.Indicator>
        </Select.Trigger>
        <Select.ClearTrigger>Clear</Select.ClearTrigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            <Select.ItemGroup>
              <Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
              {collection.items.map((item) => (
                <Select.Item key={item.value} item={item}>
                  <Select.ItemText>{item.label}</Select.ItemText>
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  );
}
