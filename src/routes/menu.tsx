import { MenuBasic } from "@/components/examples/menu/menu-basic";
import { MenuCheckbox } from "@/components/examples/menu/menu-checkbox";
import { MenuContext } from "@/components/examples/menu/menu-context";
import { MenuControlled } from "@/components/examples/menu/menu-controlled";
import { MenuGroup } from "@/components/examples/menu/menu-group";
import { MenuNested } from "@/components/examples/menu/menu-nested";
import { MenuRadioGroup } from "@/components/examples/menu/menu-radio-group";
import { MenuRootProvider } from "@/components/examples/menu/menu-root-provider";
import { MenuSeparator } from "@/components/examples/menu/menu-separator";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/menu")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="menu">
      <MenuBasic />
      <MenuControlled />
      <MenuGroup />
      <MenuSeparator />
      <MenuContext />
      <MenuNested />
      <MenuCheckbox />
      <MenuRadioGroup />
      <MenuRootProvider />
    </section>
  );
}
