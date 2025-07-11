import { SegmentGroup } from "@/components/ui/segment-group";
import { useSegmentGroup } from "@ark-ui/react/segment-group";

export function SegmentGroupRootProvider() {
  const frameworks = ["React", "Solid", "Svelte", "Vue"];
  const segmentGroup = useSegmentGroup();

  return (
    <>
      <button onClick={() => segmentGroup.focus()}>Focus</button>

      <SegmentGroup.RootProvider value={segmentGroup}>
        <SegmentGroup.Indicator />
        {frameworks.map((framework) => (
          <SegmentGroup.Item key={framework} value={framework}>
            <SegmentGroup.ItemText>{framework}</SegmentGroup.ItemText>
            <SegmentGroup.ItemControl />
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
        ))}
      </SegmentGroup.RootProvider>
    </>
  );
}
