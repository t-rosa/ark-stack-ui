import { cn } from "@/lib/utils";
import { RatingGroup as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  control: "",
  item: "",
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

const Control = React.forwardRef<HTMLDivElement, Primitive.ControlProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Control
      ref={ref}
      className={cn(styles.control, className)}
      {...props}
    />
  )
);

const HiddenInput = React.forwardRef<
  HTMLInputElement,
  Primitive.HiddenInputProps
>(({ ...props }, ref) => <Primitive.HiddenInput ref={ref} {...props} />);

const Item = React.forwardRef<HTMLLabelElement, Primitive.ItemProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Item
      ref={ref}
      className={cn(styles.item, className)}
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
Control.displayName = "Control";
HiddenInput.displayName = "HiddenInput";
Item.displayName = "Item";
Label.displayName = "Label";

RatingGroup.Root = Root;
RatingGroup.Control = Control;
RatingGroup.HiddenInput = HiddenInput;
RatingGroup.Item = Item;
RatingGroup.Label = Label;
RatingGroup.RootProvider = Primitive.RootProvider;
RatingGroup.Context = Primitive.Context;
RatingGroup.ItemContext = Primitive.ItemContext;

export function RatingGroup(props: React.PropsWithChildren) {
  return props.children;
}
