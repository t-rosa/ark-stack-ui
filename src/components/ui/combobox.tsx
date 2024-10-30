import { cn } from "@/lib/utils";
import { Combobox as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  clearTrigger: "",
  content: "",
  control: "",
  input: "",
  itemGroupLabel: "",
  itemGroup: "",
  itemIndicator: "",
  item: "",
  itemText: "",
  label: "",
  list: "",
  positioner: "",
  trigger: "",
};

const Root = React.forwardRef<
  HTMLDivElement,
  Primitive.RootProps<Primitive.CollectionItem>
>(({ className, ...props }, ref) => (
  <Primitive.Root ref={ref} className={cn(styles.root, className)} {...props} />
));

const ClearTrigger = React.forwardRef<
  HTMLButtonElement,
  Primitive.ClearTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.ClearTrigger
    ref={ref}
    className={cn(styles.clearTrigger, className)}
    {...props}
  />
));

const Content = React.forwardRef<HTMLDivElement, Primitive.ContentProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Content
      ref={ref}
      className={cn(styles.content, className)}
      {...props}
    />
  )
);

const Control = React.forwardRef<HTMLDivElement, Primitive.ControlProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Control
      ref={ref}
      className={cn(styles.control, className)}
      {...props}
    />
  )
);

const Input = React.forwardRef<HTMLInputElement, Primitive.InputProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Input
      ref={ref}
      className={cn(styles.input, className)}
      {...props}
    />
  )
);

const ItemGroupLabel = React.forwardRef<
  HTMLDivElement,
  Primitive.ItemGroupLabelProps
>(({ className, ...props }, ref) => (
  <Primitive.ItemGroupLabel
    ref={ref}
    className={cn(styles.itemGroupLabel, className)}
    {...props}
  />
));

const ItemGroup = React.forwardRef<HTMLDivElement, Primitive.ItemGroupProps>(
  ({ className, ...props }, ref) => (
    <Primitive.ItemGroup
      ref={ref}
      className={cn(styles.itemGroup, className)}
      {...props}
    />
  )
);

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

const Item = React.forwardRef<HTMLDivElement, Primitive.ItemProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Item
      ref={ref}
      className={cn(styles.item, className)}
      {...props}
    />
  )
);

const ItemText = React.forwardRef<HTMLDivElement, Primitive.ItemTextProps>(
  ({ className, ...props }, ref) => (
    <Primitive.ItemText
      ref={ref}
      className={cn(styles.itemText, className)}
      {...props}
    />
  )
);

const List = React.forwardRef<HTMLDivElement, Primitive.ListProps>(
  ({ className, ...props }, ref) => (
    <Primitive.List
      ref={ref}
      className={cn(styles.list, className)}
      {...props}
    />
  )
);

const Label = React.forwardRef<HTMLLabelElement, Primitive.LabelProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Label
      ref={ref}
      className={cn(styles.label, className)}
      {...props}
    />
  )
);

const Positioner = React.forwardRef<HTMLDivElement, Primitive.PositionerProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Positioner
      ref={ref}
      className={cn(styles.positioner, className)}
      {...props}
    />
  )
);

const RootProvider = React.forwardRef<
  HTMLDivElement,
  Primitive.RootProviderProps<Primitive.CollectionItem>
>(({ className, ...props }, ref) => (
  <Primitive.RootProvider
    ref={ref}
    className={cn(styles.root, className)}
    {...props}
  />
));

const Trigger = React.forwardRef<HTMLButtonElement, Primitive.TriggerProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Trigger
      ref={ref}
      className={cn(styles.trigger, className)}
      {...props}
    />
  )
);

Root.displayName = "Root";
ClearTrigger.displayName = "ClearTrigger";
Content.displayName = "Content";
Control.displayName = "Control";
Input.displayName = "Input";
ItemGroupLabel.displayName = "ItemGroupLabel";
ItemGroup.displayName = "ItemGroup";
ItemIndicator.displayName = "ItemIndicator";
Item.displayName = "Item";
ItemText.displayName = "ItemText";
Label.displayName = "Label";
List.displayName = "List";
Positioner.displayName = "Positioner";
RootProvider.displayName = "RootProvider";
Trigger.displayName = "Trigger";

Combobox.Root = Root;
Combobox.ClearTrigger = ClearTrigger;
Combobox.Content = Content;
Combobox.Control = Control;
Combobox.Input = Input;
Combobox.ItemGroupLabel = ItemGroupLabel;
Combobox.ItemGroup = ItemGroup;
Combobox.ItemIndicator = ItemIndicator;
Combobox.Item = Item;
Combobox.ItemText = ItemText;
Combobox.Label = Label;
Combobox.List = List;
Combobox.Positioner = Positioner;
Combobox.RootProvider = RootProvider;
Combobox.Trigger = Trigger;

export function Combobox(props: React.PropsWithChildren) {
  return props.children;
}
