import { cn } from "@/lib/utils";
import { Select as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  clearTrigger: "",
  content: "",
  control: "",
  hiddenSelect: "",
  indicator: "",
  itemGroupLabel: "",
  itemGroup: "",
  itemIndicator: "",
  item: "",
  itemText: "",
  label: "",
  list: "",
  positioner: "",
  trigger: "",
  valueText: "",
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

const HiddenSelect = React.forwardRef<
  HTMLSelectElement,
  Primitive.HiddenSelectProps
>(({ ...props }, ref) => <Primitive.HiddenSelect ref={ref} {...props} />);

const Indicator = React.forwardRef<HTMLDivElement, Primitive.IndicatorProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Indicator
      ref={ref}
      className={cn(styles.indicator, className)}
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

const Trigger = React.forwardRef<HTMLButtonElement, Primitive.TriggerProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Trigger
      ref={ref}
      className={cn(styles.trigger, className)}
      {...props}
    />
  )
);

const ValueText = React.forwardRef<HTMLSpanElement, Primitive.ValueTextProps>(
  ({ className, ...props }, ref) => (
    <Primitive.ValueText
      ref={ref}
      className={cn(styles.valueText, className)}
      {...props}
    />
  )
);

Root.displayName = "Root";
ClearTrigger.displayName = "ClearTrigger";
Content.displayName = "Content";
Control.displayName = "Control";
HiddenSelect.displayName = "HiddenSelect";
Indicator.displayName = "Indicator";
ItemGroupLabel.displayName = "ItemGroupLabel";
ItemGroup.displayName = "ItemGroup";
ItemIndicator.displayName = "ItemIndicator";
Item.displayName = "Item";
ItemText.displayName = "ItemText";
Label.displayName = "Label";
List.displayName = "List";
Positioner.displayName = "Positioner";
Trigger.displayName = "Trigger";
ValueText.displayName = "ValueText";

Select.Root = Root;
Select.ClearTrigger = ClearTrigger;
Select.Content = Content;
Select.Control = Control;
Select.HiddenSelect = HiddenSelect;
Select.Indicator = Indicator;
Select.ItemGroupLabel = ItemGroupLabel;
Select.ItemGroup = ItemGroup;
Select.ItemIndicator = ItemIndicator;
Select.Item = Item;
Select.ItemText = ItemText;
Select.Label = Label;
Select.List = List;
Select.Positioner = Positioner;
Select.Trigger = Trigger;
Select.ValueText = ValueText;
Select.RootProvider = Primitive.RootProvider;

export function Select(props: React.PropsWithChildren) {
  return props.children;
}
