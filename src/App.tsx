import { AccordionBasic } from "./components/examples/accordion/accordion-basic";
import { AccordionCollapsible } from "./components/examples/accordion/accordion-collapsible";
import { AccordionHorizontal } from "./components/examples/accordion/accordion-horizontal";
import { AccordionMultiple } from "./components/examples/accordion/accordion-multiple";
import { AccordionRootProvider } from "./components/examples/accordion/accordion-root-provider";
import { AvatarBasic } from "./components/examples/avatar/avatar-basic";
import { AvatarEvents } from "./components/examples/avatar/avatar-events";
import { AvatarRootProvider } from "./components/examples/avatar/avatar-root-provider";
import { CarouselBasic } from "./components/examples/carousel/carousel-basic";
import { CarouselControlled } from "./components/examples/carousel/carousel-controlled";
import { CarouselCustomized } from "./components/examples/carousel/carousel-customized";
import { CarouselRootProvider } from "./components/examples/carousel/carousel-root-provider";
import { CheckboxBasic } from "./components/examples/checkbox/checkbox-basic";
import { CheckboxControlled } from "./components/examples/checkbox/checkbox-controlled";
import { CheckboxGroup } from "./components/examples/checkbox/checkbox-group";
import { CheckboxIndeterminate } from "./components/examples/checkbox/checkbox-indeterminate";
import { CheckboxRenderProp } from "./components/examples/checkbox/checkbox-render-props";
import { CheckboxRootProvider } from "./components/examples/checkbox/checkbox-root-provider";
import { CheckboxWithField } from "./components/examples/checkbox/checkbox-with-field";
import { ClipboardBasic } from "./components/examples/clipboard/clipboard-basic";
import { ClipboardRootProvider } from "./components/examples/clipboard/clipboard-root-provider";
import { CollapsibleBasic } from "./components/examples/collapsible/collapsible-basic";
import { CollapsibleLazyMount } from "./components/examples/collapsible/collapsible-lazy-mount";
import { CollapsibleLazyMountAndUnmountOnExit } from "./components/examples/collapsible/collapsible-lazy-mount-and-unmount-on-exit";
import { CollapsibleOnExitComplete } from "./components/examples/collapsible/collapsible-on-exit-complete";
import { CollapsibleRootProvider } from "./components/examples/collapsible/collapsible-root-provider";
import { CollapsibleUnmountOnExit } from "./components/examples/collapsible/collapsible-unmount-on-exit";
import { ColorPickerBasic } from "./components/examples/color-picker/color-picker-basic";
import { ColorPickerControlled } from "./components/examples/color-picker/color-picker-controlled";
import { ColorPickerRootProvider } from "./components/examples/color-picker/color-picker-root-provider";
import { ColorPickerWithField } from "./components/examples/color-picker/color-picker-with-field";
import { ComboboxAdvanced } from "./components/examples/combobox/combobox-advanced";
import { ComboboxBasic } from "./components/examples/combobox/combobox-basic";
import { ComboboxRootProvider } from "./components/examples/combobox/combobox-root-provider";
import { ComboboxWithField } from "./components/examples/combobox/combobox-with-field";
import { DatePickerBasic } from "./components/examples/date-picker/date-picker-basic";
import { DatePickerRange } from "./components/examples/date-picker/date-picker-range";
import { DatePickerRootProvider } from "./components/examples/date-picker/date-picker-root-provider";
import { DatePickerStandalone } from "./components/examples/date-picker/date-picker-standalone";
import { DialogBasic } from "./components/examples/dialog/dialog-basic";
import { DialogControlled } from "./components/examples/dialog/dialog-controlled";
import { DialogLazyMount } from "./components/examples/dialog/dialog-lazy-mount";
import { DialogRenderFn } from "./components/examples/dialog/dialog-render-fn";
import { DialogRootProvider } from "./components/examples/dialog/dialog-root-provider";
import { EditableBasic } from "./components/examples/editable/editable-basic";
import { EditableCustomControls } from "./components/examples/editable/editable-custom-controls";
import { EditableRootProvider } from "./components/examples/editable/editable-root-provider";
import { EditableWithField } from "./components/examples/editable/editable-with-field";
import { FieldInput } from "./components/examples/field/field-input";
import { FieldSelect } from "./components/examples/field/field-select";
import { FieldTextarea } from "./components/examples/field/field-textarea";
import { FieldsetBasic } from "./components/examples/fieldset/fieldset-basic";
import { FieldsetWithCheckbox } from "./components/examples/fieldset/fieldset-with-checkbox";
import { FieldsetWithField } from "./components/examples/fieldset/fieldset-with-field";
import { FileUploadBasic } from "./components/examples/file-upload/file-upload-basic";
import { FileUploadRootProvider } from "./components/examples/file-upload/file-upload-root-provider";
import { FileUploadWithField } from "./components/examples/file-upload/file-upload-with-field";
import { HoverCardBasic } from "./components/examples/hover-card/hover-card-basic";
import { HoverCardControlled } from "./components/examples/hover-card/hover-card-controlled";
import { HoverCardPositioning } from "./components/examples/hover-card/hover-card-positioning";
import { HoverCardRootProvider } from "./components/examples/hover-card/hover-card-root-provider";
import { MenuBasic } from "./components/examples/menu/menu-basic";
import { MenuCheckbox } from "./components/examples/menu/menu-checkbox";
import { MenuContext } from "./components/examples/menu/menu-context";
import { MenuControlled } from "./components/examples/menu/menu-controlled";
import { MenuGroup } from "./components/examples/menu/menu-group";
import { MenuNested } from "./components/examples/menu/menu-nested";
import { MenuRadioGroup } from "./components/examples/menu/menu-radio-group";
import { MenuRootProvider } from "./components/examples/menu/menu-root-provider";
import { MenuSeparator } from "./components/examples/menu/menu-separator";

function App() {
  return (
    <main>
      <section id="accordion">
        <AccordionBasic />
        <AccordionCollapsible />
        <AccordionHorizontal />
        <AccordionMultiple />
        <AccordionRootProvider />
      </section>
      <section id="avatar">
        <AvatarBasic />
        <AvatarEvents />
        <AvatarRootProvider />
      </section>
      <section id="carousel">
        <CarouselBasic />
        <CarouselControlled />
        <CarouselCustomized />
        <CarouselRootProvider />
      </section>
      <section id="checkbox">
        <CheckboxBasic />
        <CheckboxControlled />
        <CheckboxIndeterminate />
        <CheckboxGroup />
        <CheckboxRenderProp />
        <CheckboxWithField />
        <CheckboxRootProvider />
      </section>
      <section id="clipboard">
        <ClipboardBasic />
        <ClipboardRootProvider />
      </section>
      <section id="collapsible">
        <CollapsibleBasic />
        <CollapsibleOnExitComplete />
        <CollapsibleLazyMount />
        <CollapsibleUnmountOnExit />
        <CollapsibleLazyMountAndUnmountOnExit />
        <CollapsibleRootProvider />
      </section>
      <section id="color-picker">
        <ColorPickerBasic />
        <ColorPickerControlled />
        <ColorPickerWithField />
        <ColorPickerRootProvider />
      </section>
      <section id="combobox">
        <ComboboxBasic />
        <ComboboxAdvanced />
        <ComboboxWithField />
        <ComboboxRootProvider />
      </section>
      <section id="date-picker">
        <DatePickerBasic />
        <DatePickerRange />
        <DatePickerStandalone />
        <DatePickerRootProvider />
      </section>
      <section id="dialog">
        <DialogBasic />
        <DialogControlled />
        <DialogLazyMount />
        <DialogRenderFn />
        <DialogRootProvider />
      </section>
      <section id="editable">
        <EditableBasic />
        <EditableCustomControls />
        <EditableWithField />
        <EditableRootProvider />
      </section>
      <section id="field">
        <FieldInput />
        <FieldTextarea />
        <FieldSelect />
      </section>
      <section id="fieldset">
        <FieldsetBasic />
        <FieldsetWithField />
        <FieldsetWithCheckbox />
      </section>
      <section id="file-upload">
        <FileUploadBasic />
        <FileUploadWithField />
        <FileUploadRootProvider />
      </section>
      <section id="hover-card">
        <HoverCardBasic />
        <HoverCardControlled />
        <HoverCardPositioning />
        <HoverCardRootProvider />
      </section>
      <section id="menu">
        <MenuBasic />
        <MenuControlled />
        <MenuGroup />
        <MenuSeparator />
        <MenuContext />
        <MenuNested />
        <MenuCheckbox />
        <MenuRadioGroup />
        <MenuRootProvider />
      </section>
    </main>
  );
}

export default App;
