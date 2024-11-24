import { Progress } from "@/components/ui/progress";

export function ProgressCircularMinMax() {
  return (
    <Progress.Root defaultValue={20} min={10} max={30}>
      <Progress.Label>Label</Progress.Label>
      <Progress.ValueText />
      <Progress.Circle>
        <Progress.CircleTrack />
        <Progress.CircleRange />
      </Progress.Circle>
    </Progress.Root>
  );
}
