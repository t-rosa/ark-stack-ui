import { Progress } from "@/components/ui/progress";
import { useProgress } from "@ark-ui/react/progress";

export function ProgressCircularRootProvider() {
  const progress = useProgress();

  return (
    <>
      <button onClick={() => progress.setToMax()}>Set to MAX</button>

      <Progress.RootProvider value={progress}>
        <Progress.Label>Label</Progress.Label>
        <Progress.ValueText />
        <Progress.Circle>
          <Progress.CircleTrack />
          <Progress.CircleRange />
        </Progress.Circle>
      </Progress.RootProvider>
    </>
  );
}
