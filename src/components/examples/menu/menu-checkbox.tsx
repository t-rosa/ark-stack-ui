import { Menu } from "@/components/ui/menu";
import { useState } from "react";

export function MenuCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <Menu.Root>
      <Menu.Trigger>Open menu</Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.CheckboxItem
            checked={checked}
            onCheckedChange={setChecked}
            value="checked"
          >
            <Menu.ItemIndicator>✅</Menu.ItemIndicator>
            <Menu.ItemText>Check me</Menu.ItemText>
          </Menu.CheckboxItem>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
}
