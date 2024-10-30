import { cn } from "@/lib/utils";
import { ColorPicker as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  areaBackground: "",
  area: "",
  areaThumb: "",
  channelInput: "",
  channelSliderLabel: "",
  channelSlider: "",
  channelSliderThumb: "",
  channelSliderTrack: "",
  channelSliderValueText: "",
  content: "",
  control: "",
  eyeDropperTrigger: "",
  formatSelect: "",
  formatTrigger: "",
  hiddenInput: "",
  label: "",
  positioner: "",
  swatchGroup: "",
  swatchIndicator: "",
  swatch: "",
  swatchTrigger: "",
  transparencyGrid: "",
  trigger: "",
  valueSwatch: "",
  valueText: "",
  view: "",
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

const AreaBackground = React.forwardRef<
  HTMLDivElement,
  Primitive.AreaBackgroundProps
>(({ className, ...props }, ref) => (
  <Primitive.AreaBackground
    ref={ref}
    className={cn(styles.areaBackground, className)}
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

const AreaThumb = React.forwardRef<HTMLDivElement, Primitive.AreaThumbProps>(
  ({ className, ...props }, ref) => (
    <Primitive.AreaThumb
      ref={ref}
      className={cn(styles.areaThumb, className)}
      {...props}
    />
  )
);

const ChannelInput = React.forwardRef<
  HTMLInputElement,
  Primitive.ChannelInputProps
>(({ className, ...props }, ref) => (
  <Primitive.ChannelInput
    ref={ref}
    className={cn(styles.channelInput, className)}
    {...props}
  />
));

const ChannelSliderLabel = React.forwardRef<
  HTMLLabelElement,
  Primitive.ChannelSliderLabelProps
>(({ className, ...props }, ref) => (
  <Primitive.ChannelSliderLabel
    ref={ref}
    className={cn(styles.channelSliderLabel, className)}
    {...props}
  />
));

const ChannelSlider = React.forwardRef<
  HTMLDivElement,
  Primitive.ChannelSliderProps
>(({ className, ...props }, ref) => (
  <Primitive.ChannelSlider
    ref={ref}
    className={cn(styles.channelSlider, className)}
    {...props}
  />
));

const ChannelSliderThumb = React.forwardRef<
  HTMLDivElement,
  Primitive.ChannelSliderThumbProps
>(({ className, ...props }, ref) => (
  <Primitive.ChannelSliderThumb
    ref={ref}
    className={cn(styles.channelSliderThumb, className)}
    {...props}
  />
));

const ChannelSliderTrack = React.forwardRef<
  HTMLDivElement,
  Primitive.ChannelSliderTrackProps
>(({ className, ...props }, ref) => (
  <Primitive.ChannelSliderTrack
    ref={ref}
    className={cn(styles.channelSliderTrack, className)}
    {...props}
  />
));

const ChannelSliderValueText = React.forwardRef<
  HTMLSpanElement,
  Primitive.ChannelSliderValueTextProps
>(({ className, ...props }, ref) => (
  <Primitive.ChannelSliderValueText
    ref={ref}
    className={cn(styles.channelSliderValueText, className)}
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

const Control = React.forwardRef<HTMLDivElement, Primitive.ControlProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Control
      ref={ref}
      className={cn(styles.control, className)}
      {...props}
    />
  )
);

const EyeDropperTrigger = React.forwardRef<
  HTMLButtonElement,
  Primitive.EyeDropperTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.EyeDropperTrigger
    ref={ref}
    className={cn(styles.eyeDropperTrigger, className)}
    {...props}
  />
));

const FormatSelect = React.forwardRef<
  HTMLSelectElement,
  Primitive.FormatSelectProps
>(({ className, ...props }, ref) => (
  <Primitive.FormatSelect
    ref={ref}
    className={cn(styles.formatSelect, className)}
    {...props}
  />
));

const FormatTrigger = React.forwardRef<
  HTMLButtonElement,
  Primitive.FormatTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.FormatTrigger
    ref={ref}
    className={cn(styles.formatTrigger, className)}
    {...props}
  />
));

const HiddenInput = React.forwardRef<
  HTMLInputElement,
  Primitive.HiddenInputProps
>(({ className, ...props }, ref) => (
  <Primitive.HiddenInput
    ref={ref}
    className={cn(styles.hiddenInput, className)}
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

const Positioner = React.forwardRef<HTMLDivElement, Primitive.PositionerProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Positioner
      ref={ref}
      className={cn(styles.positioner, className)}
      {...props}
    />
  )
);

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

const SwatchGroup = React.forwardRef<
  HTMLDivElement,
  Primitive.SwatchGroupProps
>(({ className, ...props }, ref) => (
  <Primitive.SwatchGroup
    ref={ref}
    className={cn(styles.swatchGroup, className)}
    {...props}
  />
));

const SwatchIndicator = React.forwardRef<
  HTMLDivElement,
  Primitive.SwatchIndicatorProps
>(({ className, ...props }, ref) => (
  <Primitive.SwatchIndicator
    ref={ref}
    className={cn(styles.swatchIndicator, className)}
    {...props}
  />
));

const Swatch = React.forwardRef<HTMLDivElement, Primitive.SwatchProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Swatch
      ref={ref}
      className={cn(styles.swatch, className)}
      {...props}
    />
  )
);

const SwatchTrigger = React.forwardRef<
  HTMLButtonElement,
  Primitive.SwatchTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.SwatchTrigger
    ref={ref}
    className={cn(styles.swatchTrigger, className)}
    {...props}
  />
));

const TransparencyGrid = React.forwardRef<
  HTMLDivElement,
  Primitive.TransparencyGridProps
>(({ className, ...props }, ref) => (
  <Primitive.TransparencyGrid
    ref={ref}
    className={cn(styles.transparencyGrid, className)}
    {...props}
  />
));

const Trigger = React.forwardRef<HTMLButtonElement, Primitive.TriggerProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Trigger
      ref={ref}
      className={cn(styles.trigger, className)}
      {...props}
    />
  )
);

const ValueSwatch = React.forwardRef<
  HTMLDivElement,
  Primitive.ValueSwatchProps
>(({ className, ...props }, ref) => (
  <Primitive.ValueSwatch
    ref={ref}
    className={cn(styles.valueSwatch, className)}
    {...props}
  />
));

const ValueText = React.forwardRef<HTMLDivElement, Primitive.ValueTextProps>(
  ({ className, ...props }, ref) => (
    <Primitive.ValueText
      ref={ref}
      className={cn(styles.valueText, className)}
      {...props}
    />
  )
);

const View = React.forwardRef<HTMLDivElement, Primitive.ViewProps>(
  ({ className, ...props }, ref) => (
    <Primitive.View
      ref={ref}
      className={cn(styles.view, className)}
      {...props}
    />
  )
);

Root.displayName = "Root";
AreaBackground.displayName = "AreaBackground";
Area.displayName = "Area";
AreaThumb.displayName = "AreaThumb";
ChannelInput.displayName = "ChannelInput";
ChannelSliderLabel.displayName = "ChannelSliderLabel";
ChannelSlider.displayName = "ChannelSlider";
ChannelSliderThumb.displayName = "ChannelSliderThumb";
ChannelSliderTrack.displayName = "ChannelSliderTrack";
ChannelSliderValueText.displayName = "ChannelSliderValueText";
Content.displayName = "Content";
Control.displayName = "Control";
EyeDropperTrigger.displayName = "EyeDropperTrigger";
FormatSelect.displayName = "FormatSelect";
FormatTrigger.displayName = "FormatTrigger";
HiddenInput.displayName = "HiddenInput";
Label.displayName = "Label";
Positioner.displayName = "Positioner";
RootProvider.displayName = "RootProvider";
SwatchGroup.displayName = "SwatchGroup";
SwatchIndicator.displayName = "SwatchIndicator";
Swatch.displayName = "Swatch";
SwatchTrigger.displayName = "SwatchTrigger";
TransparencyGrid.displayName = "TransparencyGrid";
Trigger.displayName = "Trigger";
ValueSwatch.displayName = "ValueSwatch";
ValueText.displayName = "ValueText";
View.displayName = "View";

ColorPicker.Root = Root;
ColorPicker.AreaBackground = AreaBackground;
ColorPicker.Area = Area;
ColorPicker.AreaThumb = AreaThumb;
ColorPicker.ChannelInput = ChannelInput;
ColorPicker.ChannelSliderLabel = ChannelSliderLabel;
ColorPicker.ChannelSliderLabel = ChannelSliderLabel;
ColorPicker.ChannelSlider = ChannelSlider;
ColorPicker.ChannelSliderThumb = ChannelSliderThumb;
ColorPicker.ChannelSliderTrack = ChannelSliderTrack;
ColorPicker.ChannelSliderValueText = ChannelSliderValueText;
ColorPicker.Content = Content;
ColorPicker.Control = Control;
ColorPicker.EyeDropperTrigger = EyeDropperTrigger;
ColorPicker.FormatSelect = FormatSelect;
ColorPicker.FormatTrigger = FormatTrigger;
ColorPicker.HiddenInput = HiddenInput;
ColorPicker.Label = Label;
ColorPicker.Positioner = Positioner;
ColorPicker.RootProvider = RootProvider;
ColorPicker.SwatchGroup = SwatchGroup;
ColorPicker.SwatchIndicator = SwatchIndicator;
ColorPicker.Swatch = Swatch;
ColorPicker.SwatchTrigger = SwatchTrigger;
ColorPicker.TransparencyGrid = TransparencyGrid;
ColorPicker.Trigger = Trigger;
ColorPicker.ValueSwatch = ValueSwatch;
ColorPicker.ValueText = ValueText;
ColorPicker.View = View;

export function ColorPicker(props: React.PropsWithChildren) {
  return props.children;
}
