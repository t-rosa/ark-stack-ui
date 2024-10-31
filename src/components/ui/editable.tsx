import { cn } from "@/lib/utils";
import { Editable as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  area: "",
  cancelTrigger: "",
  control: "",
  editTrigger: "",
  input: "",
  label: "",
  preview: "",
  submitTrigger: "",
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

const Area = React.forwardRef<HTMLDivElement, Primitive.AreaProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Area
      ref={ref}
      className={cn(styles.area, className)}
      {...props}
    />
  )
);

const CancelTrigger = React.forwardRef<
  HTMLButtonElement,
  Primitive.CancelTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.CancelTrigger
    ref={ref}
    className={cn(styles.cancelTrigger, className)}
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

const EditTrigger = React.forwardRef<
  HTMLButtonElement,
  Primitive.EditTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.EditTrigger
    ref={ref}
    className={cn(styles.editTrigger, className)}
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

const Preview = React.forwardRef<HTMLSpanElement, Primitive.PreviewProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Preview
      ref={ref}
      className={cn(styles.preview, className)}
      {...props}
    />
  )
);

const RootProvider = React.forwardRef<
  HTMLDivElement,
  Primitive.RootProviderProps
>(({ className, ...props }, ref) => (
  <Primitive.RootProvider
    ref={ref}
    className={cn(styles.root, className)}
    {...props}
  />
));

const SubmitTrigger = React.forwardRef<
  HTMLButtonElement,
  Primitive.SubmitTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.SubmitTrigger
    ref={ref}
    className={cn(styles.submitTrigger, className)}
    {...props}
  />
));

Root.displayName = "Root";
Area.displayName = "Area";
CancelTrigger.displayName = "CancelTrigger";
Control.displayName = "Control";
EditTrigger.displayName = "EditTrigger";
Input.displayName = "Input";
Label.displayName = "Label";
Preview.displayName = "Preview";
SubmitTrigger.displayName = "SubmitTrigger";

Editable.Root = Root;
Editable.Area = Area;
Editable.CancelTrigger = CancelTrigger;
Editable.Control = Control;
Editable.EditTrigger = EditTrigger;
Editable.Input = Input;
Editable.Label = Label;
Editable.Preview = Preview;
Editable.RootProvider = RootProvider;
Editable.SubmitTrigger = SubmitTrigger;
Editable.Context = Primitive.Context;

export function Editable(props: React.PropsWithChildren) {
  return props.children;
}
