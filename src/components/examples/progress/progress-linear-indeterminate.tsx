import { Progress } from "@/components/ui/progress";

export function ProgressLinearIndeterminate() {
  return (
    <Progress.Root value={null}>
      <Progress.Label>Label</Progress.Label>
      <Progress.ValueText />
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  );
}
