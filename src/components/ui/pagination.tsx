import { cn } from "@/lib/utils";
import { Pagination as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  ellipsis: "",
  item: "",
  nextTrigger: "",
  prevTrigger: "",
};

const Root = React.forwardRef<HTMLDivElement, Primitive.RootProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Root
      ref={ref}
      className={cn(styles.ellipsis, className)}
      {...props}
    />
  )
);

const Ellipsis = React.forwardRef<HTMLDivElement, Primitive.EllipsisProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Ellipsis
      ref={ref}
      className={cn(styles.ellipsis, className)}
      {...props}
    />
  )
);

const Item = React.forwardRef<HTMLButtonElement, Primitive.ItemProps>(
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

Root.displayName = "Root";
Ellipsis.displayName = "Ellipsis";
Item.displayName = "Item";
NextTrigger.displayName = "NextTrigger";
PrevTrigger.displayName = "PrevTrigger";

Pagination.Root = Root;
Pagination.Ellipsis = Ellipsis;
Pagination.Item = Item;
Pagination.NextTrigger = NextTrigger;
Pagination.PrevTrigger = PrevTrigger;
Pagination.RootProvider = Primitive.RootProvider;
Pagination.Context = Primitive.Context;

export function Pagination(props: React.PropsWithChildren) {
  return props.children;
}
