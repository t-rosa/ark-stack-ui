import { Progress } from "@/components/ui/progress";
import { useProgress } from "@ark-ui/react/progress";

export function ProgressLinearRootProvider() {
  const progress = useProgress();

  return (
    <>
      <button onClick={() => progress.setToMax()}>Set to MAX</button>

      <Progress.Root>
        <Progress.Label>Label</Progress.Label>
        <Progress.ValueText />
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
    </>
  );
}
