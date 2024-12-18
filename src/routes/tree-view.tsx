import { TreeViewBasic } from "@/components/examples/tree-view/tree-view-basic";
import { TreeViewRootProvider } from "@/components/examples/tree-view/tree-view-root-provider";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tree-view")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="tree-view">
      <TreeViewBasic />
      <TreeViewRootProvider />
    </section>
  );
}
