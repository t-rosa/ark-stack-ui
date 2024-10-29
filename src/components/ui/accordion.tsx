import { cn } from "@/lib/utils";
import { Accordion as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  itemContent: "",
  itemIndicator: "",
  item: "",
  itemTrigger: "",
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

const Item = React.forwardRef<HTMLDivElement, Primitive.ItemProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Item
      ref={ref}
      className={cn(styles.item, className)}
      {...props}
    />
  )
);

const ItemContent = React.forwardRef<
  HTMLDivElement,
  Primitive.ItemContentProps
>(({ className, ...props }, ref) => (
  <Primitive.ItemContent
    ref={ref}
    className={cn(styles.itemContent, className)}
    {...props}
  />
));

const ItemTrigger = React.forwardRef<
  HTMLButtonElement,
  Primitive.ItemTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.ItemTrigger
    ref={ref}
    className={cn(styles.itemTrigger, className)}
    {...props}
  />
));

const ItemIndicator = React.forwardRef<
  HTMLDivElement,
  Primitive.ItemIndicatorProps
>(({ className, ...props }, ref) => (
  <Primitive.ItemIndicator
    ref={ref}
    className={cn(styles.itemIndicator, className)}
    {...props}
  />
));

const RootProvider = React.forwardRef<
  HTMLDivElement,
  Primitive.RootProviderProps
>(({ className, ...props }, ref) => (
  <Primitive.RootProvider
    ref={ref}
    className={cn(styles.root, className)}
    {...props}
  />
));

Root.displayName = "Root";
ItemContent.displayName = "ItemContent";
ItemIndicator.displayName = "ItemIndicator";
Item.displayName = "Item";
ItemTrigger.displayName = "ItemTrigger";
RootProvider.displayName = "RootProvider";

Accordion.Root = Root;
Accordion.ItemContent = ItemContent;
Accordion.ItemIndicator = ItemIndicator;
Accordion.Item = Item;
Accordion.ItemTrigger = ItemTrigger;
Accordion.RootProvider = RootProvider;

export function Accordion(props: React.PropsWithChildren) {
  return props.children;
}
