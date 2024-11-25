import { Splitter } from "@/components/ui/splitter";

export function SplitterVertical() {
  return (
    <Splitter.Root
      orientation="vertical"
      defaultSize={[
        { id: "a", size: 50 },
        { id: "b", size: 50 },
      ]}
    >
      <Splitter.Panel id="a">A</Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" />
      <Splitter.Panel id="b">B</Splitter.Panel>
    </Splitter.Root>
  );
}
