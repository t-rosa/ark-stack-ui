import { SplitterBasic } from "@/components/examples/splitter/splitter-basic";
import { SplitterEvents } from "@/components/examples/splitter/splitter-events";
import { SplitterRenderProp } from "@/components/examples/splitter/splitter-render-prop";
import { SplitterRootProvider } from "@/components/examples/splitter/splitter-root-provider";
import { SplitterVertical } from "@/components/examples/splitter/splitter-vertical";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/splitter")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="splitter">
      <SplitterBasic />
      <SplitterRenderProp />
      <SplitterEvents />
      <SplitterVertical />
      <SplitterRootProvider />
    </section>
  );
}
