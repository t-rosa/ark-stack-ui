import { cn } from "@/lib/utils";
import { ToggleGroup as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  item: "",
};

const Root = React.forwardRef<HTMLDivElement, Primitive.RootProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Root
      ref={ref}
      className={cn(styles.root, className)}
      {...props}
    />
  )
);

const Item = React.forwardRef<HTMLButtonElement, Primitive.ItemProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Item
      ref={ref}
      className={cn(styles.item, className)}
      {...props}
    />
  )
);

Root.displayName = "Root";
Item.displayName = "Item";

ToggleGroup.Root = Root;
ToggleGroup.Item = Item;

ToggleGroup.RootProvider = Primitive.RootProvider;
ToggleGroup.Context = Primitive.Context;

export function ToggleGroup(props: React.PropsWithChildren) {
  return props.children;
}
