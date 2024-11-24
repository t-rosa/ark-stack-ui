import { RadioGroup } from "@/components/ui/radio-group";

export function RadioGroupInitialValue() {
  const frameworks = ["React", "Solid", "Vue"];

  return (
    <RadioGroup.Root defaultValue="Solid">
      <RadioGroup.Label>Framework</RadioGroup.Label>
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
