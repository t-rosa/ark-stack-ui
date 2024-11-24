import { Progress } from "@/components/ui/progress";

export function ProgressLinearVertical() {
  return (
    <Progress.Root orientation="vertical">
      <Progress.Label>Label</Progress.Label>
      <Progress.ValueText />
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  );
}
