import { Progress } from "@/components/ui/progress";

export function ProgressCircularBasic() {
  return (
    <Progress.Root>
      <Progress.Label>Label</Progress.Label>
      <Progress.ValueText />
      <Progress.Circle>
        <Progress.CircleTrack />
        <Progress.CircleRange />
      </Progress.Circle>
    </Progress.Root>
  );
}
