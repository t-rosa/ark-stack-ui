import { AvatarBasic } from "@/components/examples/avatar/avatar-basic";
import { AvatarEvents } from "@/components/examples/avatar/avatar-events";
import { AvatarRootProvider } from "@/components/examples/avatar/avatar-root-provider";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/avatar")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="avatar">
      <AvatarBasic />
      <AvatarEvents />
      <AvatarRootProvider />
    </section>
  );
}
