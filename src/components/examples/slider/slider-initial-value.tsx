import { Slider } from "@/components/ui/slider";

export function SliderInitialValue() {
  return (
    <Slider.Root defaultValue={[42]}>
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
      <Slider.MarkerGroup>
        <Slider.Marker value={0}>*</Slider.Marker>
        <Slider.Marker value={30}>*</Slider.Marker>
        <Slider.Marker value={60}>*</Slider.Marker>
      </Slider.MarkerGroup>
    </Slider.Root>
  );
}
