import { Switch } from "@/components/ui/switch";
import { useSwitch } from "@ark-ui/react/switch";

export function SwitchRootProvider() {
  const switchApi = useSwitch();

  return (
    <>
      <button onClick={() => switchApi.toggleChecked()}>Toggle</button>

      <Switch.RootProvider value={switchApi}>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>Label</Switch.Label>
        <Switch.HiddenInput />
      </Switch.RootProvider>
    </>
  );
}
