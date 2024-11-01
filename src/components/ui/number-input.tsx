import { cn } from "@/lib/utils";
import { NumberInput as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  control: "",
  decrementTrigger: "",
  incrementTrigger: "",
  input: "",
  label: "",
  scrubber: "",
  valueText: "",
};

const Root = React.forwardRef<HTMLDivElement, Primitive.RootProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Root
      ref={ref}
      className={cn(styles.control, className)}
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

const DecrementTrigger = React.forwardRef<
  HTMLButtonElement,
  Primitive.DecrementTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.DecrementTrigger
    ref={ref}
    className={cn(styles.decrementTrigger, className)}
    {...props}
  />
));

const IncrementTrigger = React.forwardRef<
  HTMLButtonElement,
  Primitive.IncrementTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.IncrementTrigger
    ref={ref}
    className={cn(styles.incrementTrigger, className)}
    {...props}
  />
));

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

const Scrubber = React.forwardRef<HTMLDivElement, Primitive.ScrubberProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Scrubber
      ref={ref}
      className={cn(styles.label, className)}
      {...props}
    />
  )
);

const ValueText = React.forwardRef<HTMLSpanElement, Primitive.ValueTextProps>(
  ({ className, ...props }, ref) => (
    <Primitive.ValueText
      ref={ref}
      className={cn(styles.label, className)}
      {...props}
    />
  )
);

Root.displayName = "Root";
Control.displayName = "Control";
DecrementTrigger.displayName = "DecrementTrigger";
IncrementTrigger.displayName = "IncrementTrigger";
Input.displayName = "Input";
Label.displayName = "Label";
Scrubber.displayName = "Scrubber";
ValueText.displayName = "ValueText";

NumberInput.Root = Root;
NumberInput.Control = Control;
NumberInput.DecrementTrigger = DecrementTrigger;
NumberInput.IncrementTrigger = IncrementTrigger;
NumberInput.Input = Input;
NumberInput.Label = Label;
NumberInput.RootProvider = Primitive.RootProvider;
NumberInput.Scrubber = Scrubber;
NumberInput.ValueText = ValueText;

export function NumberInput(props: React.PropsWithChildren) {
  return props.children;
}
