import { SegmentGroup } from "@/components/ui/segment-group";

export function SegmentGroupDisabled() {
  const frameworks = ["React", "Solid", "Svelte", "Vue"];
  return (
    <SegmentGroup.Root defaultValue="React">
      <SegmentGroup.Indicator />
      {frameworks.map((framework) => (
        <SegmentGroup.Item
          key={framework}
          value={framework}
          disabled={framework === "Svelte"}
        >
          <SegmentGroup.ItemText>{framework}</SegmentGroup.ItemText>
          <SegmentGroup.ItemControl />
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      ))}
    </SegmentGroup.Root>
  );
}
