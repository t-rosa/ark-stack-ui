import { cn } from "@/lib/utils";
import { PinInput as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  control: "",
  input: "",
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

const Input = React.forwardRef<HTMLInputElement, Primitive.InputProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Input
      ref={ref}
      className={cn(styles.input, className)}
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
Input.displayName = "Input";
Label.displayName = "Label";

PinInput.Root = Root;
PinInput.Control = Control;
PinInput.HiddenInput = HiddenInput;
PinInput.Input = Input;
PinInput.Label = Label;
PinInput.RootProvider = Primitive.RootProvider;

export function PinInput(props: React.PropsWithChildren) {
  return props.children;
}
