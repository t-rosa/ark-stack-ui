import { cn } from "@/lib/utils";
import { FileUpload as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  clearTrigger: "",
  dropzone: "",
  hiddenInput: "",
  itemDeleteTrigger: "",
  itemGroup: "",
  itemName: "",
  itemPreviewImage: "",
  itemPreview: "",
  item: "",
  itemSizeText: "",
  label: "",
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

const Dropzone = React.forwardRef<HTMLDivElement, Primitive.DropzoneProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Dropzone
      ref={ref}
      className={cn(styles.dropzone, className)}
      {...props}
    />
  )
);

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

const ItemDeleteTrigger = React.forwardRef<
  HTMLButtonElement,
  Primitive.ItemDeleteTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.ItemDeleteTrigger
    ref={ref}
    className={cn(styles.itemDeleteTrigger, className)}
    {...props}
  />
));

const ItemGroup = React.forwardRef<HTMLUListElement, Primitive.ItemGroupProps>(
  ({ className, ...props }, ref) => (
    <Primitive.ItemGroup
      ref={ref}
      className={cn(styles.itemGroup, className)}
      {...props}
    />
  )
);

const ItemName = React.forwardRef<HTMLDivElement, Primitive.ItemNameProps>(
  ({ className, ...props }, ref) => (
    <Primitive.ItemName
      ref={ref}
      className={cn(styles.itemName, className)}
      {...props}
    />
  )
);

const ItemPreviewImage = React.forwardRef<
  HTMLImageElement,
  Primitive.ItemPreviewImageProps
>(({ className, ...props }, ref) => (
  <Primitive.ItemPreviewImage
    ref={ref}
    className={cn(styles.itemPreviewImage, className)}
    {...props}
  />
));

const ItemPreview = React.forwardRef<
  HTMLImageElement,
  Primitive.ItemPreviewProps
>(({ className, ...props }, ref) => (
  <Primitive.ItemPreview
    ref={ref}
    className={cn(styles.itemPreview, className)}
    {...props}
  />
));

const Item = React.forwardRef<HTMLLIElement, Primitive.ItemProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Item
      ref={ref}
      className={cn(styles.item, className)}
      {...props}
    />
  )
);

const ItemSizeText = React.forwardRef<
  HTMLDivElement,
  Primitive.ItemSizeTextProps
>(({ className, ...props }, ref) => (
  <Primitive.ItemSizeText
    ref={ref}
    className={cn(styles.itemSizeText, className)}
    {...props}
  />
));

const Label = React.forwardRef<HTMLLabelElement, Primitive.LabelProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Label
      ref={ref}
      className={cn(styles.itemGroup, className)}
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
ClearTrigger.displayName = "ClearTrigger";
Dropzone.displayName = "Dropzone";
HiddenInput.displayName = "HiddenInput";
ItemDeleteTrigger.displayName = "ItemDeleteTrigger";
ItemGroup.displayName = "ItemGroup";
ItemName.displayName = "ItemName";
ItemPreviewImage.displayName = "ItemPreviewImage";
ItemPreview.displayName = "ItemPreview";
Item.displayName = "Item";
ItemSizeText.displayName = "ItemSizeText";
Label.displayName = "Label";
RootProvider.displayName = "RootProvider";
Trigger.displayName = "Trigger";

FileUpload.Root = Root;
FileUpload.ClearTrigger = ClearTrigger;
FileUpload.Dropzone = Dropzone;
FileUpload.HiddenInput = HiddenInput;
FileUpload.ItemDeleteTrigger = ItemDeleteTrigger;
FileUpload.ItemGroup = ItemGroup;
FileUpload.ItemName = ItemName;
FileUpload.ItemPreviewImage = ItemPreviewImage;
FileUpload.ItemPreview = ItemPreview;
FileUpload.Item = Item;
FileUpload.ItemSizeText = ItemSizeText;
FileUpload.Label = Label;
FileUpload.RootProvider = RootProvider;
FileUpload.Trigger = Trigger;
FileUpload.Context = Primitive.Context;

export function FileUpload(props: React.PropsWithChildren) {
  return props.children;
}
