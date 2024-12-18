import { NumberInputBasic } from "@/components/examples/number-input/number-input-baisc";
import { NumberInputFormUsage } from "@/components/examples/number-input/number-input-form-usage";
import { NumberInputFormatted } from "@/components/examples/number-input/number-input-formatted";
import { NumberInputMinMax } from "@/components/examples/number-input/number-input-min-max";
import { NumberInputMouseWheel } from "@/components/examples/number-input/number-input-mouse-wheel";
import { NumberInputNoClamp } from "@/components/examples/number-input/number-input-no-clamp";
import { NumberInputRootProvider } from "@/components/examples/number-input/number-input-root-provider";
import { NumberInputScrubber } from "@/components/examples/number-input/number-input-scrubber";
import { NumberInputWithField } from "@/components/examples/number-input/number-input-with-field";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/number-input")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="number-input">
      <NumberInputBasic />
      <NumberInputMinMax />
      <NumberInputScrubber />
      <NumberInputMouseWheel />
      <NumberInputNoClamp />
      <NumberInputFormUsage />
      <NumberInputFormatted />
      <NumberInputWithField />
      <NumberInputRootProvider />
    </section>
  );
}
