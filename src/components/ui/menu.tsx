import { cn } from "@/lib/utils";
import { Menu as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  arrow: "",
  arrowTip: "",
  checkboxItem: "",
  content: "",
  contextTrigger: "",
  indicator: "",
  itemGroupLabel: "",
  itemGroup: "",
  itemIndicator: "",
  item: "",
  itemText: "",
  positioner: "",
  radioItemGroup: "",
  radioItem: "",
  separator: "",
  triggerItem: "",
  trigger: "",
};

const Arrow = React.forwardRef<HTMLDivElement, Primitive.ArrowProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Arrow
      ref={ref}
      className={cn(styles.arrow, className)}
      {...props}
    />
  )
);

const ArrowTip = React.forwardRef<HTMLDivElement, Primitive.ArrowTipProps>(
  ({ className, ...props }, ref) => (
    <Primitive.ArrowTip
      ref={ref}
      className={cn(styles.arrowTip, className)}
      {...props}
    />
  )
);

const CheckboxItem = React.forwardRef<
  HTMLDivElement,
  Primitive.CheckboxItemProps
>(({ className, ...props }, ref) => (
  <Primitive.CheckboxItem
    ref={ref}
    className={cn(styles.checkboxItem, className)}
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

const ContextTrigger = React.forwardRef<
  HTMLButtonElement,
  Primitive.ContextTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.ContextTrigger
    ref={ref}
    className={cn(styles.contextTrigger, className)}
    {...props}
  />
));

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

const Positioner = React.forwardRef<HTMLDivElement, Primitive.PositionerProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Positioner
      ref={ref}
      className={cn(styles.positioner, className)}
      {...props}
    />
  )
);

const RadioItemGroup = React.forwardRef<
  HTMLDivElement,
  Primitive.RadioItemGroupProps
>(({ className, ...props }, ref) => (
  <Primitive.RadioItemGroup
    ref={ref}
    className={cn(styles.radioItemGroup, className)}
    {...props}
  />
));

const RadioItem = React.forwardRef<HTMLDivElement, Primitive.RadioItemProps>(
  ({ className, ...props }, ref) => (
    <Primitive.RadioItem
      ref={ref}
      className={cn(styles.radioItem, className)}
      {...props}
    />
  )
);

const Separator = React.forwardRef<HTMLHRElement, Primitive.SeparatorProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Separator
      ref={ref}
      className={cn(styles.separator, className)}
      {...props}
    />
  )
);

const TriggerItem = React.forwardRef<
  HTMLDivElement,
  Primitive.TriggerItemProps
>(({ className, ...props }, ref) => (
  <Primitive.TriggerItem
    ref={ref}
    className={cn(styles.triggerItem, className)}
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

Arrow.displayName = "Arrow";
ArrowTip.displayName = "ArrowTip";
CheckboxItem.displayName = "CheckboxItem";
Content.displayName = "Content";
ContextTrigger.displayName = "ContextTrigger";
Indicator.displayName = "Indicator";
ItemGroupLabel.displayName = "ItemGroupLabel";
ItemGroup.displayName = "ItemGroup";
ItemIndicator.displayName = "ItemIndicator";
Item.displayName = "Item";
ItemText.displayName = "ItemText";
Positioner.displayName = "Positioner";
RadioItemGroup.displayName = "RadioItemGroup";
RadioItem.displayName = "RadioItem";
Separator.displayName = "Separator";
TriggerItem.displayName = "TriggerItem";
Trigger.displayName = "Trigger";

Menu.Root = Primitive.Root;
Menu.Arrow = Arrow;
Menu.ArrowTip = ArrowTip;
Menu.CheckboxItem = CheckboxItem;
Menu.Content = Content;
Menu.ContextTrigger = ContextTrigger;
Menu.Indicator = Indicator;
Menu.ItemGroupLabel = ItemGroupLabel;
Menu.ItemGroup = ItemGroup;
Menu.ItemIndicator = ItemIndicator;
Menu.Item = Item;
Menu.ItemText = ItemText;
Menu.Positioner = Positioner;
Menu.RadioItemGroup = RadioItemGroup;
Menu.RadioItem = RadioItem;
Menu.RootProvider = Primitive.RootProvider;
Menu.Separator = Separator;
Menu.TriggerItem = TriggerItem;
Menu.Trigger = Trigger;

export function Menu(props: React.PropsWithChildren) {
  return props.children;
}
