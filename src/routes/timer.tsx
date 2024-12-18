import { TimerBasic } from "@/components/examples/timer/timer-basic";
import { TimerCountdown } from "@/components/examples/timer/timer-countdown";
import { TimerEvents } from "@/components/examples/timer/timer-events";
import { TimerRootProvider } from "@/components/examples/timer/timer-root-provider";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/timer")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="timer">
      <TimerBasic />
      <TimerCountdown />
      <TimerEvents />
      <TimerRootProvider />
    </section>
  );
}
