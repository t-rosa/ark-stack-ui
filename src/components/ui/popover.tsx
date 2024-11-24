import { cn } from "@/lib/utils";
import { Popover as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  anchor: "",
  arrow: "",
  arrowTip: "",
  closeTrigger: "",
  content: "",
  description: "",
  indicator: "",
  positioner: "",
  title: "",
  trigger: "",
};

const Anchor = React.forwardRef<HTMLDivElement, Primitive.AnchorProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Anchor
      ref={ref}
      className={cn(styles.anchor, className)}
      {...props}
    />
  )
);

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

const CloseTrigger = React.forwardRef<
  HTMLButtonElement,
  Primitive.CloseTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.CloseTrigger
    ref={ref}
    className={cn(styles.closeTrigger, className)}
    {...props}
  />
));

const Content = React.forwardRef<HTMLDivElement, Primitive.ContentProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Content
      ref={ref}
      className={cn(styles.content, className)}
      {...props}
    />
  )
);

const Description = React.forwardRef<
  HTMLDivElement,
  Primitive.DescriptionProps
>(({ className, ...props }, ref) => (
  <Primitive.Description
    ref={ref}
    className={cn(styles.description, className)}
    {...props}
  />
));

const Indicator = React.forwardRef<HTMLDivElement, Primitive.IndicatorProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Indicator
      ref={ref}
      className={cn(styles.indicator, className)}
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

const Title = React.forwardRef<HTMLDivElement, Primitive.TitleProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Title
      ref={ref}
      className={cn(styles.title, className)}
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

Anchor.displayName = "Anchor";
Arrow.displayName = "Arrow";
ArrowTip.displayName = "ArrowTip";
CloseTrigger.displayName = "CloseTrigger";
Content.displayName = "Content";
Description.displayName = "Description";
Indicator.displayName = "Indicator";
Positioner.displayName = "Positioner";
Title.displayName = "Title";
Trigger.displayName = "Trigger";

Popover.Root = Primitive.Root;
Popover.Anchor = Anchor;
Popover.Arrow = Arrow;
Popover.ArrowTip = ArrowTip;
Popover.CloseTrigger = CloseTrigger;
Popover.Content = Content;
Popover.Description = Description;
Popover.Indicator = Indicator;
Popover.Positioner = Positioner;
Popover.Title = Title;
Popover.Trigger = Trigger;
Popover.RootProvider = Primitive.RootProvider;

export function Popover(props: React.PropsWithChildren) {
  return props.children;
}
