import { cn } from "@/lib/utils";
import { HoverCard as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  arrow: "",
  arrowTip: "",
  content: "",
  positioner: "",
  trigger: "",
};

const Arrow = React.forwardRef<HTMLDivElement, Primitive.ArrowProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Arrow
      ref={ref}
      className={cn(styles.arrow, className)}
      {...props}
    />
  )
);

const ArrowTip = React.forwardRef<HTMLDivElement, Primitive.ArrowTipProps>(
  ({ className, ...props }, ref) => (
    <Primitive.ArrowTip
      ref={ref}
      className={cn(styles.arrowTip, className)}
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

const Positioner = React.forwardRef<HTMLDivElement, Primitive.PositionerProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Positioner
      ref={ref}
      className={cn(styles.positioner, className)}
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

Arrow.displayName = "Arrow";
ArrowTip.displayName = "ArrowTip";
Content.displayName = "Content";
Positioner.displayName = "Positioner";
Trigger.displayName = "Trigger";

HoverCard.Root = Primitive.Root;
HoverCard.Arrow = Arrow;
HoverCard.ArrowTip = ArrowTip;
HoverCard.Content = Content;
HoverCard.Positioner = Positioner;
HoverCard.RootProvider = Primitive.RootProvider;
HoverCard.Trigger = Trigger;
HoverCard.Context = Primitive.Context;

export function HoverCard(props: React.PropsWithChildren) {
  return props.children;
}
