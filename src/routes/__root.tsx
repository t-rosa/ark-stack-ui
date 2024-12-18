import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="grid grid-cols-[auto_1fr] h-svh">
      <nav className="w-56 border-r flex flex-col">
        <Link to="/">Home</Link>
        <Link to="/accordion">Accordion</Link>
        <Link to="/avatar">Avatar</Link>
        <Link to="/carousel">Carousel</Link>
        <Link to="/checkbox">Checkbox</Link>
        <Link to="/clipboard">Clipboard</Link>
        <Link to="/collapsible">Collapsible</Link>
        <Link to="/color-picker">Color Picker</Link>
        <Link to="/combobox">Combobox</Link>
        <Link to="/date-picker">Date Picker</Link>
        <Link to="/dialog">Dialog</Link>
        <Link to="/editable">Editable</Link>
        <Link to="/field">Field</Link>
        <Link to="/fieldset">Fieldset</Link>
        <Link to="/file-upload">File Upload</Link>
        <Link to="/hover-card">Hover Card</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/number-input">Number Input</Link>
        <Link to="/pagination">Pagination</Link>
        <Link to="/pin-input">Pin Input</Link>
        <Link to="/popover">Popover</Link>
        <Link to="/progress">Progress</Link>
        <Link to="/qr-code">QR Code</Link>
        <Link to="/radio-group">Radio Group</Link>
        <Link to="/rating-group">Rating Group</Link>
        <Link to="/segment-group">Segment Group</Link>
        <Link to="/select">Select</Link>
        <Link to="/signature-pad">Signature Pad</Link>
        <Link to="/slider">Slider</Link>
        <Link to="/splitter">Splitter</Link>
        <Link to="/steps">Steps</Link>
        <Link to="/switch">Switch</Link>
        <Link to="/tabs">Tabs</Link>
        <Link to="/tags-input">Tags Input</Link>
        <Link to="/timer">Timer</Link>
        <Link to="/toggle-group">Toggle Group</Link>
        <Link to="/toggle">Toggle</Link>
        <Link to="/tooltip">Tooltip</Link>
        <Link to="/tree-view">Tree View</Link>
      </nav>
      <main className="p-3">
        <Outlet />
      </main>
    </div>
  );
}
