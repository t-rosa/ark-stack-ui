import { cn } from "@/lib/utils";
import { Toggle as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  indicator: "",
};

const Root = React.forwardRef<HTMLButtonElement, Primitive.RootProps>(
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

Root.displayName = "Root";
Indicator.displayName = "Indicator";

Toggle.Root = Root;
Toggle.Indicator = Indicator;

Toggle.Context = Primitive.Context;

export function Toggle(props: React.PropsWithChildren) {
  return props.children;
}
