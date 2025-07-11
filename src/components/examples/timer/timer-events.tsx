import { Timer } from "@/components/ui/timer";

export function TimerEvents() {
  return (
    <Timer.Root
      targetMs={5 * 1000}
      onComplete={() => console.log("Timer completed")}
      onTick={(details) => console.log("Tick:", details.formattedTime)}
    >
      <Timer.Item type="seconds" />
    </Timer.Root>
  );
}
