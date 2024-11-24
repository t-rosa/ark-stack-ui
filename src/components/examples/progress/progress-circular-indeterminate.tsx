import { Progress } from "@/components/ui/progress";

export function ProgressCircularIndeterminate() {
  return (
    <Progress.Root value={null}>
      <Progress.Label>Label</Progress.Label>
      <Progress.ValueText />
      <Progress.Circle>
        <Progress.CircleTrack />
        <Progress.CircleRange />
      </Progress.Circle>
    </Progress.Root>
  );
}
