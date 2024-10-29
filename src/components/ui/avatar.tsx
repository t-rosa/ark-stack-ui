import { cn } from "@/lib/utils";
import { Avatar as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  fallback: "",
  image: "",
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

const Fallback = React.forwardRef<HTMLSpanElement, Primitive.FallbackProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Fallback
      ref={ref}
      className={cn(styles.fallback, className)}
      {...props}
    />
  )
);

const Image = React.forwardRef<HTMLImageElement, Primitive.ImageProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Image
      ref={ref}
      className={cn(styles.fallback, className)}
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

Root.displayName = "Root";
Image.displayName = "Image";
Fallback.displayName = "Fallback";
RootProvider.displayName = "RootProvider";

Avatar.Root = Root;
Avatar.Image = Image;
Avatar.Fallback = Fallback;
Avatar.RootProvider = RootProvider;

export function Avatar(props: React.PropsWithChildren) {
  return props.children;
}
