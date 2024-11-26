import { cn } from "@/lib/utils";
import { TagsInput as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  clearTrigger: "",
  control: "",
  input: "",
  itemDeleteTrigger: "",
  itemInput: "",
  itemPreview: "",
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

const ItemDeleteTrigger = React.forwardRef<
  HTMLButtonElement,
  Primitive.ItemDeleteTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.ItemDeleteTrigger
    ref={ref}
    className={cn(styles.itemDeleteTrigger, className)}
    {...props}
  />
));

const ItemInput = React.forwardRef<HTMLInputElement, Primitive.ItemInputProps>(
  ({ className, ...props }, ref) => (
    <Primitive.ItemInput
      ref={ref}
      className={cn(styles.itemDeleteTrigger, className)}
      {...props}
    />
  )
);

const ItemPreview = React.forwardRef<
  HTMLDivElement,
  Primitive.ItemPreviewProps
>(({ className, ...props }, ref) => (
  <Primitive.ItemPreview
    ref={ref}
    className={cn(styles.itemDeleteTrigger, className)}
    {...props}
  />
));

const Item = React.forwardRef<HTMLDivElement, Primitive.ItemProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Item
      ref={ref}
      className={cn(styles.itemDeleteTrigger, className)}
      {...props}
    />
  )
);

const ItemText = React.forwardRef<HTMLSpanElement, Primitive.ItemTextProps>(
  ({ className, ...props }, ref) => (
    <Primitive.ItemText
      ref={ref}
      className={cn(styles.itemDeleteTrigger, className)}
      {...props}
    />
  )
);

const Label = React.forwardRef<HTMLLabelElement, Primitive.LabelProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Label
      ref={ref}
      className={cn(styles.itemDeleteTrigger, className)}
      {...props}
    />
  )
);

Root.displayName = "Root";
ClearTrigger.displayName = "ClearTrigger";
Control.displayName = "Control";
Input.displayName = "Input";
ItemDeleteTrigger.displayName = "ItemDeleteTrigger";
ItemInput.displayName = "ItemInput";
ItemPreview.displayName = "ItemPreview";
Item.displayName = "Item";
ItemText.displayName = "ItemText";
Label.displayName = "Label";

TagsInput.Root = Root;
TagsInput.ClearTrigger = ClearTrigger;
TagsInput.Control = Control;
TagsInput.Input = Input;
TagsInput.ItemDeleteTrigger = ItemDeleteTrigger;
TagsInput.ItemInput = ItemInput;
TagsInput.ItemPreview = ItemPreview;
TagsInput.Item = Item;
TagsInput.ItemText = ItemText;
TagsInput.Label = Label;

TagsInput.RootProvider = Primitive.RootProvider;
TagsInput.HiddenInput = Primitive.HiddenInput;
TagsInput.Context = Primitive.Context;

export function TagsInput(props: React.PropsWithChildren) {
  return props.children;
}
