import { cn } from "@/lib/utils";
import { Fieldset as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  errorText: "",
  helperText: "",
  legend: "",
};

const Root = React.forwardRef<HTMLFieldSetElement, Primitive.RootProps>(
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

const Legend = React.forwardRef<HTMLLegendElement, Primitive.LegendProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Legend
      ref={ref}
      className={cn(styles.legend, className)}
      {...props}
    />
  )
);

const RootProvider = React.forwardRef<
  HTMLFieldSetElement,
  Primitive.RootProviderProps
>(({ className, ...props }, ref) => (
  <Primitive.RootProvider
    ref={ref}
    className={cn(styles.root, className)}
    {...props}
  />
));

Root.displayName = "Root";
ErrorText.displayName = "ErrorText";
HelperText.displayName = "HelperText";
Legend.displayName = "Legend";
RootProvider.displayName = "RootProvider";

Fieldset.Root = Root;
Fieldset.ErrorText = ErrorText;
Fieldset.HelperText = HelperText;
Fieldset.Legend = Legend;
Fieldset.RootProvider = RootProvider;

export function Fieldset(props: React.PropsWithChildren) {
  return props.children;
}
