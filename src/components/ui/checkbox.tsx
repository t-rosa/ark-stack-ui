import { cn } from "@/lib/utils";
import { Checkbox as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  control: "",
  group: "",
  hiddenInput: "",
  indicator: "",
  label: "",
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

const Control = React.forwardRef<HTMLDivElement, Primitive.ControlProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Control
      ref={ref}
      className={cn(styles.control, className)}
      {...props}
    />
  )
);

const Group = React.forwardRef<HTMLDivElement, Primitive.GroupProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Group
      ref={ref}
      className={cn(styles.group, className)}
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

const HiddenInput = React.forwardRef<
  HTMLInputElement,
  Primitive.HiddenInputProps
>(({ className, ...props }, ref) => (
  <Primitive.HiddenInput
    ref={ref}
    className={cn(styles.hiddenInput, className)}
    {...props}
  />
));

const Label = React.forwardRef<HTMLSpanElement, Primitive.LabelProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Label
      ref={ref}
      className={cn(styles.label, className)}
      {...props}
    />
  )
);

const RootProvider = React.forwardRef<
  HTMLLabelElement,
  Primitive.RootProviderProps
>(({ className, ...props }, ref) => (
  <Primitive.RootProvider
    ref={ref}
    className={cn(styles.root, className)}
    {...props}
  />
));

Root.displayName = "Root";
Control.displayName = "Control";
Group.displayName = "Group";
Indicator.displayName = "Indicator";
HiddenInput.displayName = "HiddenInput";
Label.displayName = "Label";
RootProvider.displayName = "RootProvider";

Checkbox.Root = Root;
Checkbox.Control = Control;
Checkbox.Group = Group;
Checkbox.Indicator = Indicator;
Checkbox.HiddenInput = HiddenInput;
Checkbox.Label = Label;
Checkbox.RootProvider = RootProvider;
Checkbox.Context = Primitive.Context;

export function Checkbox(props: React.PropsWithChildren) {
  return props.children;
}
