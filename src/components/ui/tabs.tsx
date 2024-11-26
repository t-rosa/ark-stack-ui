import { cn } from "@/lib/utils";
import { Tabs as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  content: "",
  indicator: "",
  list: "",
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

const Indicator = React.forwardRef<HTMLDivElement, Primitive.IndicatorProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Indicator
      ref={ref}
      className={cn(styles.indicator, className)}
      {...props}
    />
  )
);

const List = React.forwardRef<HTMLDivElement, Primitive.ListProps>(
  ({ className, ...props }, ref) => (
    <Primitive.List
      ref={ref}
      className={cn(styles.list, className)}
      {...props}
    />
  )
);

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
Indicator.displayName = "Indicator";
List.displayName = "List";
Trigger.displayName = "Trigger";

Tabs.Root = Root;
Tabs.Content = Content;
Tabs.Indicator = Indicator;
Tabs.List = List;
Tabs.Trigger = Trigger;

Tabs.RootProvider = Primitive.RootProvider;
Tabs.Context = Primitive.Context;

export function Tabs(props: React.PropsWithChildren) {
  return props.children;
}
