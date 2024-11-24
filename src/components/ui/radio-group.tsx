import { cn } from "@/lib/utils";
import { RadioGroup as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  indicator: "",
  itemControl: "",
  itemHiddenInput: "",
  item: "",
  itemText: "",
  label: "",
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

const Indicator = React.forwardRef<HTMLDivElement, Primitive.IndicatorProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Indicator
      ref={ref}
      className={cn(styles.indicator, className)}
      {...props}
    />
  )
);

const ItemControl = React.forwardRef<
  HTMLDivElement,
  Primitive.ItemControlProps
>(({ className, ...props }, ref) => (
  <Primitive.ItemControl
    ref={ref}
    className={cn(styles.itemControl, className)}
    {...props}
  />
));

const ItemHiddenInput = React.forwardRef<
  HTMLInputElement,
  Primitive.ItemHiddenInputProps
>(({ ...props }, ref) => <Primitive.ItemHiddenInput ref={ref} {...props} />);

const Item = React.forwardRef<HTMLLabelElement, Primitive.ItemProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Item
      ref={ref}
      className={cn(styles.item, className)}
      {...props}
    />
  )
);

const ItemText = React.forwardRef<HTMLSpanElement, Primitive.ItemTextProps>(
  ({ className, ...props }, ref) => (
    <Primitive.ItemText
      ref={ref}
      className={cn(styles.itemText, className)}
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

Root.displayName = "Root";
Indicator.displayName = "Indicator";
ItemControl.displayName = "ItemControl";
ItemHiddenInput.displayName = "ItemHiddenInput";
Item.displayName = "Item";
ItemText.displayName = "ItemText";
Label.displayName = "Label";

RadioGroup.Root = Root;
RadioGroup.Indicator = Indicator;
RadioGroup.ItemControl = ItemControl;
RadioGroup.ItemHiddenInput = ItemHiddenInput;
RadioGroup.Item = Item;
RadioGroup.ItemText = ItemText;
RadioGroup.Label = Label;
RadioGroup.RootProvider = Primitive.RootProvider;

export function RadioGroup(props: React.PropsWithChildren) {
  return props.children;
}
