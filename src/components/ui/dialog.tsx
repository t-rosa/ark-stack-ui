import { cn } from "@/lib/utils";
import { Dialog as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  backdrop: "",
  closeTrigger: "",
  content: "",
  description: "",
  positioner: "",
  title: "",
  trigger: "",
};

const Backdrop = React.forwardRef<HTMLDivElement, Primitive.BackdropProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Backdrop
      ref={ref}
      className={cn(styles.backdrop, className)}
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

const Positioner = React.forwardRef<HTMLDivElement, Primitive.PositionerProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Positioner
      ref={ref}
      className={cn(styles.positioner, className)}
      {...props}
    />
  )
);

const Title = React.forwardRef<HTMLHeadingElement, Primitive.TitleProps>(
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

Backdrop.displayName = "Backdrop";
CloseTrigger.displayName = "CloseTrigger";
Content.displayName = "Content";
Description.displayName = "Description";
Positioner.displayName = "Positioner";
Title.displayName = "Title";
Trigger.displayName = "Trigger";

Dialog.Root = Primitive.Root;
Dialog.Backdrop = Backdrop;
Dialog.CloseTrigger = CloseTrigger;
Dialog.Content = Content;
Dialog.Description = Description;
Dialog.Positioner = Positioner;
Dialog.RootProvider = Primitive.RootProvider;
Dialog.Title = Title;
Dialog.Trigger = Trigger;
Dialog.Context = Primitive.Context;

export function Dialog(props: React.PropsWithChildren) {
  return props.children;
}
