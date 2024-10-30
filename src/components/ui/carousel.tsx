import { cn } from "@/lib/utils";
import { Carousel as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  control: "",
  indicatorGroup: "",
  indicator: "",
  itemGroup: "",
  item: "",
  nextTrigger: "",
  prevTrigger: "",
  viewport: "",
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

const Control = React.forwardRef<HTMLDivElement, Primitive.ControlProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Control
      ref={ref}
      className={cn(styles.control, className)}
      {...props}
    />
  )
);

const IndicatorGroup = React.forwardRef<
  HTMLDivElement,
  Primitive.IndicatorGroupProps
>(({ className, ...props }, ref) => (
  <Primitive.IndicatorGroup
    ref={ref}
    className={cn(styles.indicatorGroup, className)}
    {...props}
  />
));

const Indicator = React.forwardRef<HTMLButtonElement, Primitive.IndicatorProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Indicator
      ref={ref}
      className={cn(styles.indicator, className)}
      {...props}
    />
  )
);

const ItemGroup = React.forwardRef<HTMLDivElement, Primitive.ItemGroupProps>(
  ({ className, ...props }, ref) => (
    <Primitive.ItemGroup
      ref={ref}
      className={cn(styles.itemGroup, className)}
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

const NextTrigger = React.forwardRef<
  HTMLButtonElement,
  Primitive.NextTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.NextTrigger
    ref={ref}
    className={cn(styles.nextTrigger, className)}
    {...props}
  />
));

const PrevTrigger = React.forwardRef<
  HTMLButtonElement,
  Primitive.PrevTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.PrevTrigger
    ref={ref}
    className={cn(styles.prevTrigger, className)}
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

const Viewport = React.forwardRef<HTMLDivElement, Primitive.ViewportProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Viewport
      ref={ref}
      className={cn(styles.viewport, className)}
      {...props}
    />
  )
);

Root.displayName = "Root";
Control.displayName = "Control";
IndicatorGroup.displayName = "IndicatorGroup";
Indicator.displayName = "Indicator";
ItemGroup.displayName = "ItemGroup";
Item.displayName = "Item";
NextTrigger.displayName = "NextTrigger";
PrevTrigger.displayName = "PrevTrigger";
RootProvider.displayName = "RootProvider";
Viewport.displayName = "Viewport";

Carousel.Root = Root;
Carousel.Control = Control;
Carousel.IndicatorGroup = IndicatorGroup;
Carousel.Indicator = Indicator;
Carousel.ItemGroup = ItemGroup;
Carousel.Item = Item;
Carousel.NextTrigger = NextTrigger;
Carousel.PrevTrigger = PrevTrigger;
Carousel.RootProvider = RootProvider;
Carousel.Viewport = Viewport;

export function Carousel(props: React.PropsWithChildren) {
  return props.children;
}
