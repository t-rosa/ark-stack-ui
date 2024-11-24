import { Progress } from "@/components/ui/progress";

export function ProgressLinearMinMax() {
  return (
    <Progress.Root defaultValue={20} min={10} max={30}>
      <Progress.Label>Label</Progress.Label>
      <Progress.ValueText />
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  );
}
