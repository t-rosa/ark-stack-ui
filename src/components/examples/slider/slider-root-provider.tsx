import { Slider } from "@/components/ui/slider";
import { useSlider } from "@ark-ui/react/slider";

export function SliderRootProvider() {
  const slider = useSlider();

  return (
    <>
      <button onClick={() => slider.focus()}>Focus</button>

      <Slider.RootProvider value={slider}>
        <Slider.Label>Label</Slider.Label>
        <Slider.ValueText />
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb index={0}>
            <Slider.HiddenInput />
          </Slider.Thumb>
        </Slider.Control>
      </Slider.RootProvider>
    </>
  );
}
