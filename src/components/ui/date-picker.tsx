import { cn } from "@/lib/utils";
import { DatePicker as Primitive } from "@ark-ui/react";
import * as React from "react";

const styles = {
  root: "border",
  clearTrigger: "",
  content: "",
  control: "",
  input: "",
  label: "",
  monthSelect: "",
  nextTrigger: "",
  positioner: "",
  presetTrigger: "",
  prevTrigger: "",
  rangeText: "",
  tableBody: "",
  tableCell: "",
  tableCellTrigger: "",
  tableHead: "",
  tableHeader: "",
  table: "",
  tableRow: "",
  trigger: "",
  viewControl: "",
  view: "",
  viewTrigger: "",
  yearSelect: "",
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

const Input = React.forwardRef<HTMLInputElement, Primitive.InputProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Input
      ref={ref}
      className={cn(styles.input, className)}
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

const MonthSelect = React.forwardRef<
  HTMLSelectElement,
  Primitive.MonthSelectProps
>(({ className, ...props }, ref) => (
  <Primitive.MonthSelect
    ref={ref}
    className={cn(styles.monthSelect, className)}
    {...props}
  />
));

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

const Positioner = React.forwardRef<HTMLDivElement, Primitive.PositionerProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Positioner
      ref={ref}
      className={cn(styles.positioner, className)}
      {...props}
    />
  )
);

const PresetTrigger = React.forwardRef<
  HTMLButtonElement,
  Primitive.PresetTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.PresetTrigger
    ref={ref}
    className={cn(styles.presetTrigger, className)}
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

const RangeText = React.forwardRef<HTMLDivElement, Primitive.RangeTextProps>(
  ({ className, ...props }, ref) => (
    <Primitive.RangeText
      ref={ref}
      className={cn(styles.rangeText, className)}
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

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  Primitive.TableBodyProps
>(({ className, ...props }, ref) => (
  <Primitive.TableBody
    ref={ref}
    className={cn(styles.tableBody, className)}
    {...props}
  />
));

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  Primitive.TableCellProps
>(({ className, ...props }, ref) => (
  <Primitive.TableCell
    ref={ref}
    className={cn(styles.tableCell, className)}
    {...props}
  />
));

const TableCellTrigger = React.forwardRef<
  HTMLDivElement,
  Primitive.TableCellTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.TableCellTrigger
    ref={ref}
    className={cn(styles.tableCellTrigger, className)}
    {...props}
  />
));

const TableHead = React.forwardRef<
  HTMLTableSectionElement,
  Primitive.TableHeadProps
>(({ className, ...props }, ref) => (
  <Primitive.TableHead
    ref={ref}
    className={cn(styles.tableHead, className)}
    {...props}
  />
));

const TableHeader = React.forwardRef<
  HTMLTableCellElement,
  Primitive.TableHeaderProps
>(({ className, ...props }, ref) => (
  <Primitive.TableHeader
    ref={ref}
    className={cn(styles.tableHeader, className)}
    {...props}
  />
));

const Table = React.forwardRef<HTMLTableElement, Primitive.TableProps>(
  ({ className, ...props }, ref) => (
    <Primitive.Table
      ref={ref}
      className={cn(styles.table, className)}
      {...props}
    />
  )
);

const TableRow = React.forwardRef<HTMLTableRowElement, Primitive.TableRowProps>(
  ({ className, ...props }, ref) => (
    <Primitive.TableRow
      ref={ref}
      className={cn(styles.tableRow, className)}
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

const ViewControl = React.forwardRef<
  HTMLDivElement,
  Primitive.ViewControlProps
>(({ className, ...props }, ref) => (
  <Primitive.ViewControl
    ref={ref}
    className={cn(styles.viewControl, className)}
    {...props}
  />
));
const View = React.forwardRef<HTMLDivElement, Primitive.ViewProps>(
  ({ className, ...props }, ref) => (
    <Primitive.View
      ref={ref}
      className={cn(styles.view, className)}
      {...props}
    />
  )
);

const ViewTrigger = React.forwardRef<
  HTMLButtonElement,
  Primitive.ViewTriggerProps
>(({ className, ...props }, ref) => (
  <Primitive.ViewTrigger
    ref={ref}
    className={cn(styles.viewTrigger, className)}
    {...props}
  />
));

const YearSelect = React.forwardRef<
  HTMLSelectElement,
  Primitive.YearSelectProps
>(({ className, ...props }, ref) => (
  <Primitive.YearSelect
    ref={ref}
    className={cn(styles.yearSelect, className)}
    {...props}
  />
));

Root.displayName = "Root";
ClearTrigger.displayName = "ClearTrigger";
Content.displayName = "Content";
Control.displayName = "Control";
Input.displayName = "Input";
Label.displayName = "Label";
MonthSelect.displayName = "MonthSelect";
NextTrigger.displayName = "NextTrigger";
Positioner.displayName = "Positioner";
PresetTrigger.displayName = "PresetTrigger";
PrevTrigger.displayName = "PresetTriggerIndicator";
RangeText.displayName = "RangeText";
RootProvider.displayName = "RootProvider";
TableBody.displayName = "TableBody";
TableCell.displayName = "TableCell";
TableCellTrigger.displayName = "TableCellTrigger";
TableHead.displayName = "TableHead";
TableHeader.displayName = "TableHeader";
Table.displayName = "Table";
TableRow.displayName = "TableRow";
Trigger.displayName = "Trigger";
ViewControl.displayName = "ViewControl";
View.displayName = "View";
ViewTrigger.displayName = "ViewTrigger";
YearSelect.displayName = "YearSelect";

DatePicker.Root = Root;
DatePicker.ClearTrigger = ClearTrigger;
DatePicker.Content = Content;
DatePicker.Control = Control;
DatePicker.Input = Input;
DatePicker.Label = Label;
DatePicker.MonthSelect = MonthSelect;
DatePicker.NextTrigger = NextTrigger;
DatePicker.Positioner = Positioner;
DatePicker.PresetTrigger = PresetTrigger;
DatePicker.PrevTrigger = PrevTrigger;
DatePicker.RangeText = RangeText;
DatePicker.RootProvider = RootProvider;
DatePicker.TableBody = TableBody;
DatePicker.TableCell = TableCell;
DatePicker.TableCellTrigger = TableCellTrigger;
DatePicker.TableHead = TableHead;
DatePicker.TableHeader = TableHeader;
DatePicker.Table = Table;
DatePicker.TableRow = TableRow;
DatePicker.Trigger = Trigger;
DatePicker.ViewControl = ViewControl;
DatePicker.View = View;
DatePicker.ViewTrigger = ViewTrigger;
DatePicker.YearSelect = YearSelect;
DatePicker.Context = Primitive.Context;

export function DatePicker(props: React.PropsWithChildren) {
  return props.children;
}
