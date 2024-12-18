import { cn } from "@/lib/utils";
import { TreeView as Primitive } from "@ark-ui/react";
import { TreeNode } from "@ark-ui/react/collection";
import * as React from "react";

const styles = {
  root: "",
  branchContent: "",
  branchControl: "",
  branchIndentGuide: "",
  branchIndicator: "",
  branch: "",
  branchText: "",
  branchTrigger: "",
  itemIndicator: "",
  item: "",
  itemText: "",
  label: "",
  tree: "",
};

const Root = React.forwardRef<HTMLDivElement, Primitive.RootProps<TreeNode>>(
  ({ className, ...props }, ref) => (
    <Primitive.Root
      ref={ref}
      className={cn(styles.root, className)}
      {...props}
    />
  )
);

const BranchContent = React.forwardRef<
  HTMLDivElement,
  Primitive.BranchContentProps
>(({ className, ...props }, ref) => (
  <Primitive.BranchContent
    ref={ref}
    className={cn(styles.branchContent, className)}
    {...props}
  />
));

const BranchControl = React.forwardRef<
  HTMLDivElement,
  Primitive.BranchControlProps
>(({ className, ...props }, ref) => (
  <Primitive.BranchControl
    ref={ref}
    className={cn(styles.branchControl, className)}
    {...props}
  />
));

const BranchIndentGuide = React.forwardRef<
  HTMLDivElement,
  Primitive.BranchIndentGuideProps
>(({ className, ...props }, ref) => (
  <Primitive.BranchIndentGuide
    ref={ref}
    className={cn(styles.branchIndentGuide, className)}
    {...props}
  />
));

const BranchIndicator = React.forwardRef<
  HTMLDivElement,
  Primitive.BranchIndicatorProps
>(({ className, ...props }, ref) => (
  <Primitive.BranchIndicator
    ref={ref}
    className={cn(styles.branchIndicator, className)}
    {...props}
  />
));

const Branch = React.forwardRef<HTMLDivElement, Primitive.BranchProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Branch
      ref={ref}
      className={cn(styles.branch, className)}
      {...props}
    />
  )
);

const BranchText = React.forwardRef<HTMLSpanElement, Primitive.BranchTextProps>(
  ({ className, ...props }, ref) => (
    <Primitive.BranchText
      ref={ref}
      className={cn(styles.branchText, className)}
      {...props}
    />
  )
);
const BranchTrigger = React.forwardRef<
  HTMLDivElement,
  Primitive.BranchTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.BranchTrigger
    ref={ref}
    className={cn(styles.branchTrigger, className)}
    {...props}
  />
));
const ItemIndicator = React.forwardRef<
  HTMLDivElement,
  Primitive.ItemIndicatorProps
>(({ className, ...props }, ref) => (
  <Primitive.ItemIndicator
    ref={ref}
    className={cn(styles.itemIndicator, className)}
    {...props}
  />
));
const Item = React.forwardRef<HTMLDivElement, Primitive.ItemProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Item
      ref={ref}
      className={cn(styles.item, className)}
      {...props}
    />
  )
);
const ItemText = React.forwardRef<HTMLSpanElement, Primitive.ItemTextProps>(
  ({ className, ...props }, ref) => (
    <Primitive.ItemText
      ref={ref}
      className={cn(styles.itemText, className)}
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
const Tree = React.forwardRef<HTMLDivElement, Primitive.TreeProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Tree
      ref={ref}
      className={cn(styles.tree, className)}
      {...props}
    />
  )
);

Root.displayName = "Root";
BranchContent.displayName = "BranchContent";
BranchControl.displayName = "BranchControl";
BranchIndentGuide.displayName = "BranchIndentGuide";
BranchIndicator.displayName = "BranchIndicator";
Branch.displayName = "Branch";
BranchText.displayName = "BranchText";
BranchTrigger.displayName = "BranchTrigger";
ItemIndicator.displayName = "ItemIndicator";
Item.displayName = "Item";
ItemText.displayName = "ItemText";
Label.displayName = "Label";
Tree.displayName = "Tree";

TreeView.Root = Root;
TreeView.BranchContent = BranchContent;
TreeView.BranchControl = BranchControl;
TreeView.BranchIndentGuide = BranchIndentGuide;
TreeView.BranchIndicator = BranchIndicator;
TreeView.Branch = Branch;
TreeView.BranchText = BranchText;
TreeView.BranchTrigger = BranchTrigger;
TreeView.ItemIndicator = ItemIndicator;
TreeView.Item = Item;
TreeView.ItemText = ItemText;
TreeView.Label = Label;
TreeView.Tree = Tree;

TreeView.NodeProvider = Primitive.NodeProvider;
TreeView.NodeContext = Primitive.NodeContext;
TreeView.RootProvider = Primitive.RootProvider;
TreeView.Context = Primitive.Context;

export function TreeView(props: React.PropsWithChildren) {
  return props.children;
}
