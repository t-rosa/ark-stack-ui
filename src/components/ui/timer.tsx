import { cn } from "@/lib/utils";
import { Timer as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  actionTrigger: "",
  area: "",
  control: "",
  item: "",
  separator: "",
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

const ActionTrigger = React.forwardRef<
  HTMLButtonElement,
  Primitive.ActionTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.ActionTrigger
    ref={ref}
    className={cn(styles.actionTrigger, className)}
    {...props}
  />
));

const Area = React.forwardRef<HTMLDivElement, Primitive.AreaProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Area
      ref={ref}
      className={cn(styles.area, className)}
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

const Item = React.forwardRef<HTMLDivElement, Primitive.ItemProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Item
      ref={ref}
      className={cn(styles.item, className)}
      {...props}
    />
  )
);

const Separator = React.forwardRef<HTMLDivElement, Primitive.SeparatorProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Separator
      ref={ref}
      className={cn(styles.separator, className)}
      {...props}
    />
  )
);

Root.displayName = "Root";
ActionTrigger.displayName = "ActionTrigger";
Area.displayName = "Area";
Control.displayName = "Control";
Item.displayName = "Item";
Separator.displayName = "Separator";

Timer.Root = Root;
Timer.ActionTrigger = ActionTrigger;
Timer.Area = Area;
Timer.Control = Control;
Timer.Item = Item;
Timer.Separator = Separator;

Timer.RootProvider = Primitive.RootProvider;
Timer.Context = Primitive.Context;

export function Timer(props: React.PropsWithChildren) {
  return props.children;
}
