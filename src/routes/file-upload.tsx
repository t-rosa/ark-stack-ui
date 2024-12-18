import { FileUploadBasic } from "@/components/examples/file-upload/file-upload-basic";
import { FileUploadRootProvider } from "@/components/examples/file-upload/file-upload-root-provider";
import { FileUploadWithField } from "@/components/examples/file-upload/file-upload-with-field";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/file-upload")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="file-upload">
      <FileUploadBasic />
      <FileUploadWithField />
      <FileUploadRootProvider />
    </section>
  );
}
