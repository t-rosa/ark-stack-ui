import { cn } from "@/lib/utils";
import { Collapsible as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  content: "",
  trigger: "",
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

const Content = React.forwardRef<HTMLDivElement, Primitive.ContentProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Content
      ref={ref}
      className={cn(styles.content, className)}
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

const Trigger = React.forwardRef<HTMLButtonElement, Primitive.TriggerProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Trigger
      ref={ref}
      className={cn(styles.trigger, className)}
      {...props}
    />
  )
);

Root.displayName = "Root";
Content.displayName = "Content";
RootProvider.displayName = "RootProvider";
Trigger.displayName = "Trigger";

Collapsible.Root = Root;
Collapsible.Content = Content;
Collapsible.RootProvider = RootProvider;
Collapsible.Trigger = Trigger;

export function Collapsible(props: React.PropsWithChildren) {
  return props.children;
}
