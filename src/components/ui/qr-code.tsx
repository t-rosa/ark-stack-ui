import { cn } from "@/lib/utils";
import { QrCode as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  frame: "",
  overlay: "",
  pattern: "",
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

const Frame = React.forwardRef<SVGSVGElement, Primitive.FrameProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Frame
      ref={ref}
      className={cn(styles.frame, className)}
      {...props}
    />
  )
);

const Overlay = React.forwardRef<HTMLDivElement, Primitive.OverlayProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Overlay
      ref={ref}
      className={cn(styles.overlay, className)}
      {...props}
    />
  )
);

const Pattern = React.forwardRef<SVGPathElement, Primitive.PatternProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Pattern
      ref={ref}
      className={cn(styles.pattern, className)}
      {...props}
    />
  )
);

Root.displayName = "Root";
Frame.displayName = "Frame";
Overlay.displayName = "Overlay";
Pattern.displayName = "Pattern";

QrCode.Root = Root;
QrCode.Frame = Frame;
QrCode.Overlay = Overlay;
QrCode.Pattern = Pattern;
QrCode.RootProvider = Primitive.RootProvider;

export function QrCode(props: React.PropsWithChildren) {
  return props.children;
}
