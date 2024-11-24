import { RadioGroup } from "@/components/ui/radio-group";

export function RadioGroupBasic() {
  const frameworks = ["React", "Solid", "Vue"];

  return (
    <RadioGroup.Root>
      <RadioGroup.Label>Framework</RadioGroup.Label>
      <RadioGroup.Indicator />
      {frameworks.map((framework) => (
        <RadioGroup.Item key={framework} value={framework}>
          <RadioGroup.ItemText>{framework}</RadioGroup.ItemText>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}
