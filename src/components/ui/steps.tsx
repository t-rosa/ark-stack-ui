import { cn } from "@/lib/utils";
import { Steps as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  completedContent: "",
  content: "",
  indicator: "",
  item: "",
  list: "",
  nextTrigger: "",
  prevTrigger: "",
  progress: "",
  separator: "",
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

const CompletedContent = React.forwardRef<
  HTMLDivElement,
  Primitive.CompletedContentProps
>(({ className, ...props }, ref) => (
  <Primitive.CompletedContent
    ref={ref}
    className={cn(styles.completedContent, className)}
    {...props}
  />
));

const Content = React.forwardRef<HTMLDivElement, Primitive.ContentProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Content
      ref={ref}
      className={cn(styles.completedContent, className)}
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

const Item = React.forwardRef<HTMLLIElement, Primitive.ItemProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Item
      ref={ref}
      className={cn(styles.item, className)}
      {...props}
    />
  )
);

const List = React.forwardRef<HTMLOListElement, Primitive.ListProps>(
  ({ className, ...props }, ref) => (
    <Primitive.List
      ref={ref}
      className={cn(styles.list, className)}
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

const Progress = React.forwardRef<HTMLDivElement, Primitive.ProgressProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Progress
      ref={ref}
      className={cn(styles.progress, className)}
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
CompletedContent.displayName = "CompletedContent";
Content.displayName = "Content";
Indicator.displayName = "Indicator";
Item.displayName = "Item";
List.displayName = "List";
NextTrigger.displayName = "NextTrigger";
PrevTrigger.displayName = "PrevTrigger";
Progress.displayName = "Progress";
Separator.displayName = "Separator";
Trigger.displayName = "Trigger";

Steps.Root = Root;
Steps.CompletedContent = CompletedContent;
Steps.Content = Content;
Steps.Indicator = Indicator;
Steps.Item = Item;
Steps.List = List;
Steps.NextTrigger = NextTrigger;
Steps.PrevTrigger = PrevTrigger;
Steps.Progress = Progress;
Steps.Separator = Separator;
Steps.Trigger = Trigger;

Steps.RootProvider = Primitive.RootProvider;

export function Steps(props: React.PropsWithChildren) {
  return props.children;
}
