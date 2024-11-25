import { cn } from "@/lib/utils";
import { Slider as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  control: "",
  draggingIndicator: "",
  hiddenInput: "",
  label: "",
  markerGroup: "",
  marker: "",
  range: "",
  thumb: "",
  track: "",
  valueText: "",
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

const DraggingIndicator = React.forwardRef<
  HTMLSpanElement,
  Primitive.DraggingIndicatorProps
>(({ className, ...props }, ref) => (
  <Primitive.DraggingIndicator
    ref={ref}
    className={cn(styles.draggingIndicator, className)}
    {...props}
  />
));

const Label = React.forwardRef<HTMLLabelElement, Primitive.LabelProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Label
      ref={ref}
      className={cn(styles.label, className)}
      {...props}
    />
  )
);

const MarkerGroup = React.forwardRef<
  HTMLDivElement,
  Primitive.MarkerGroupProps
>(({ className, ...props }, ref) => (
  <Primitive.MarkerGroup
    ref={ref}
    className={cn(styles.markerGroup, className)}
    {...props}
  />
));

const Marker = React.forwardRef<HTMLSpanElement, Primitive.MarkerProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Marker
      ref={ref}
      className={cn(styles.marker, className)}
      {...props}
    />
  )
);

const Range = React.forwardRef<HTMLDivElement, Primitive.RangeProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Range
      ref={ref}
      className={cn(styles.range, className)}
      {...props}
    />
  )
);

const Thumb = React.forwardRef<HTMLDivElement, Primitive.ThumbProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Thumb
      ref={ref}
      className={cn(styles.thumb, className)}
      {...props}
    />
  )
);

const Track = React.forwardRef<HTMLDivElement, Primitive.TrackProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Track
      ref={ref}
      className={cn(styles.track, className)}
      {...props}
    />
  )
);

const ValueText = React.forwardRef<HTMLDivElement, Primitive.ValueTextProps>(
  ({ className, ...props }, ref) => (
    <Primitive.ValueText
      ref={ref}
      className={cn(styles.valueText, className)}
      {...props}
    />
  )
);

Root.displayName = "Root";
Control.displayName = "Control";
DraggingIndicator.displayName = "DraggingIndicator";
Label.displayName = "Label";
MarkerGroup.displayName = "MarkerGroup";
Marker.displayName = "Marker";
Range.displayName = "Range";
Thumb.displayName = "Thumb";
Track.displayName = "Track";
ValueText.displayName = "ValueText";

Slider.Root = Root;
Slider.Control = Control;
Slider.DraggingIndicator = DraggingIndicator;
Slider.Label = Label;
Slider.MarkerGroup = MarkerGroup;
Slider.Marker = Marker;
Slider.Range = Range;
Slider.Thumb = Thumb;
Slider.Track = Track;
Slider.ValueText = ValueText;

Slider.HiddenInput = Primitive.HiddenInput;
Slider.RootProvider = Primitive.RootProvider;

export function Slider(props: React.PropsWithChildren) {
  return props.children;
}
