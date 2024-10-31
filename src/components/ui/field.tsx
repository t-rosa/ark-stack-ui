import { cn } from "@/lib/utils";
import { Field as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  errorText: "",
  helperText: "",
  input: "",
  control: "",
  label: "",
  requiredIndicator: "",
  select: "",
  textarea: "",
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

const ErrorText = React.forwardRef<HTMLSpanElement, Primitive.ErrorTextProps>(
  ({ className, ...props }, ref) => (
    <Primitive.ErrorText
      ref={ref}
      className={cn(styles.errorText, className)}
      {...props}
    />
  )
);

const HelperText = React.forwardRef<HTMLSpanElement, Primitive.HelperTextProps>(
  ({ className, ...props }, ref) => (
    <Primitive.HelperText
      ref={ref}
      className={cn(styles.helperText, className)}
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

const Label = React.forwardRef<HTMLLabelElement, Primitive.LabelProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Label
      ref={ref}
      className={cn(styles.label, className)}
      {...props}
    />
  )
);

const RequiredIndicator = React.forwardRef<
  HTMLSpanElement,
  Primitive.RequiredIndicatorProps
>(({ className, ...props }, ref) => (
  <Primitive.RequiredIndicator
    ref={ref}
    className={cn(styles.requiredIndicator, className)}
    {...props}
  />
));

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

const Select = React.forwardRef<HTMLSelectElement, Primitive.SelectProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Select
      ref={ref}
      className={cn(styles.select, className)}
      {...props}
    />
  )
);

const Textarea = React.forwardRef<HTMLTextAreaElement, Primitive.TextareaProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Textarea
      ref={ref}
      className={cn(styles.textarea, className)}
      {...props}
    />
  )
);

Root.displayName = "Root";
ErrorText.displayName = "ErrorText";
HelperText.displayName = "HelperText";
Input.displayName = "Input";
Label.displayName = "Label";
RequiredIndicator.displayName = "RequiredIndicator";
RootProvider.displayName = "RootProvider";
Select.displayName = "Select";
Textarea.displayName = "Textarea";

Field.Root = Root;
Field.ErrorText = ErrorText;
Field.HelperText = HelperText;
Field.Input = Input;
Field.Label = Label;
Field.RequiredIndicator = RequiredIndicator;
Field.RootProvider = RootProvider;
Field.Select = Select;
Field.Textarea = Textarea;

export function Field(props: React.PropsWithChildren) {
  return props.children;
}
