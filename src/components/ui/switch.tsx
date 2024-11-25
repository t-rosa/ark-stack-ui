import { cn } from "@/lib/utils";
import { Switch as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  control: "",
  label: "",
  thumb: "",
};

const Root = React.forwardRef<HTMLLabelElement, Primitive.RootProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Root
      ref={ref}
      className={cn(styles.root, className)}
      {...props}
    />
  )
);

const Control = React.forwardRef<HTMLSpanElement, Primitive.ControlProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Control
      ref={ref}
      className={cn(styles.control, className)}
      {...props}
    />
  )
);

const Label = React.forwardRef<HTMLSpanElement, Primitive.LabelProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Label
      ref={ref}
      className={cn(styles.label, className)}
      {...props}
    />
  )
);

const Thumb = React.forwardRef<HTMLSpanElement, Primitive.ThumbProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Thumb
      ref={ref}
      className={cn(styles.thumb, className)}
      {...props}
    />
  )
);

Root.displayName = "Root";
Control.displayName = "Control";
Label.displayName = "Label";
Thumb.displayName = "Thumb";

Switch.Root = Root;
Switch.Control = Control;
Switch.Label = Label;
Switch.Thumb = Thumb;

Switch.RootProvider = Primitive.RootProvider;
Switch.HiddenInput = Primitive.HiddenInput;
Switch.Context = Primitive.Context;

export function Switch(props: React.PropsWithChildren) {
  return props.children;
}
