import { cn } from "@/lib/utils";
import { Splitter as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  panel: "",
  resizeTrigger: "",
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

const Panel = React.forwardRef<HTMLDivElement, Primitive.PanelProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Panel
      ref={ref}
      className={cn(styles.panel, className)}
      {...props}
    />
  )
);

const ResizeTrigger = React.forwardRef<
  HTMLButtonElement,
  Primitive.ResizeTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.ResizeTrigger
    ref={ref}
    className={cn(styles.resizeTrigger, className)}
    {...props}
  />
));

Root.displayName = "Root";
Panel.displayName = "Panel";
ResizeTrigger.displayName = "ResizeTrigger";

Splitter.Root = Root;
Splitter.Panel = Panel;
Splitter.ResizeTrigger = ResizeTrigger;

Splitter.RootProvider = Primitive.RootProvider;
Splitter.Context = Primitive.Context;

export function Splitter(props: React.PropsWithChildren) {
  return props.children;
}
