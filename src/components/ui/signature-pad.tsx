import { cn } from "@/lib/utils";
import { SignaturePad as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  clearTrigger: "",
  control: "",
  guide: "",
  hiddenInput: "",
  label: "",
  segment: "",
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

const ClearTrigger = React.forwardRef<
  HTMLButtonElement,
  Primitive.ClearTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.ClearTrigger
    ref={ref}
    className={cn(styles.clearTrigger, className)}
    {...props}
  />
));

const Control = React.forwardRef<HTMLDivElement, Primitive.ControlProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Control
      ref={ref}
      className={cn(styles.control, className)}
      {...props}
    />
  )
);

const Guide = React.forwardRef<HTMLDivElement, Primitive.GuideProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Guide
      ref={ref}
      className={cn(styles.guide, className)}
      {...props}
    />
  )
);

const Label = React.forwardRef<HTMLLabelElement, Primitive.LabelProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Label
      ref={ref}
      className={cn(styles.label, className)}
      {...props}
    />
  )
);

const Segment = React.forwardRef<SVGSVGElement, Primitive.SegmentProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Segment
      ref={ref}
      className={cn(styles.segment, className)}
      {...props}
    />
  )
);

Root.displayName = "Root";
ClearTrigger.displayName = "ClearTrigger";
Control.displayName = "Control";
Guide.displayName = "Guide";
Label.displayName = "Label";
Segment.displayName = "Segment";

SignaturePad.Root = Root;
SignaturePad.ClearTrigger = ClearTrigger;
SignaturePad.Control = Control;
SignaturePad.Guide = Guide;
SignaturePad.Label = Label;
SignaturePad.Segment = Segment;

SignaturePad.HiddenInput = Primitive.HiddenInput;
SignaturePad.RootProvider = Primitive.RootProvider;

export function SignaturePad(props: React.PropsWithChildren) {
  return props.children;
}
