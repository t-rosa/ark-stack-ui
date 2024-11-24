import { Progress } from "@/components/ui/progress";

export function ProgressCircularInitialValue() {
  return (
    <Progress.Root defaultValue={70}>
      <Progress.Label>Label</Progress.Label>
      <Progress.ValueText />
      <Progress.Circle>
        <Progress.CircleTrack />
        <Progress.CircleRange />
      </Progress.Circle>
    </Progress.Root>
  );
}
