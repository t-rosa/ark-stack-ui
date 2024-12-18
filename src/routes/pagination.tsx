import { PaginationBasic } from "@/components/examples/pagination/pagination-baisc";
import { PaginationControlled } from "@/components/examples/pagination/pagination-controlled";
import { PaginationCustomized } from "@/components/examples/pagination/pagination-customized";
import { PaginationRootProvider } from "@/components/examples/pagination/pagination-root-provider";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pagination")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="pagination">
      <PaginationBasic />
      <PaginationControlled />
      <PaginationCustomized />
      <PaginationRootProvider />
    </section>
  );
}
