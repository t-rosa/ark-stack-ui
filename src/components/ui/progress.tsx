import { cn } from "@/lib/utils";
import { Progress as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  circle: "",
  circleRange: "",
  circleTrack: "",
  label: "",
  range: "",
  track: "",
  valueText: "",
  view: "",
};

const Circle = React.forwardRef<SVGSVGElement, Primitive.CircleProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Circle
      ref={ref}
      className={cn(styles.circle, className)}
      {...props}
    />
  )
);

const CircleRange = React.forwardRef<
  SVGCircleElement,
  Primitive.CircleRangeProps
>(({ className, ...props }, ref) => (
  <Primitive.CircleRange
    ref={ref}
    className={cn(styles.circleRange, className)}
    {...props}
  />
));

const CircleTrack = React.forwardRef<
  SVGCircleElement,
  Primitive.CircleTrackProps
>(({ className, ...props }, ref) => (
  <Primitive.CircleTrack
    ref={ref}
    className={cn(styles.circleTrack, className)}
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

const Range = React.forwardRef<HTMLDivElement, Primitive.RangeProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Range
      ref={ref}
      className={cn(styles.range, className)}
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

const ValueText = React.forwardRef<HTMLSpanElement, Primitive.ValueTextProps>(
  ({ className, ...props }, ref) => (
    <Primitive.ValueText
      ref={ref}
      className={cn(styles.valueText, className)}
      {...props}
    />
  )
);

const View = React.forwardRef<HTMLSpanElement, Primitive.ViewProps>(
  ({ className, ...props }, ref) => (
    <Primitive.View
      ref={ref}
      className={cn(styles.view, className)}
      {...props}
    />
  )
);

Circle.displayName = "Circle";
CircleRange.displayName = "CircleRange";
CircleTrack.displayName = "CircleTrack";
Label.displayName = "Label";
Range.displayName = "Range";
Track.displayName = "Track";
ValueText.displayName = "ValueText";
View.displayName = "View";

Progress.Root = Primitive.Root;
Progress.Circle = Circle;
Progress.CircleRange = CircleRange;
Progress.CircleTrack = CircleTrack;
Progress.Label = Label;
Progress.Range = Range;
Progress.Track = Track;
Progress.ValueText = ValueText;
Progress.View = View;
Progress.RootProvider = Primitive.RootProvider;

export function Progress(props: React.PropsWithChildren) {
  return props.children;
}
