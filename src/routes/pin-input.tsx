import { PinInputBasic } from "@/components/examples/pin-input/pin-input-basic";
import { PinInputBlurred } from "@/components/examples/pin-input/pin-input-blurred";
import { PinInputCustomized } from "@/components/examples/pin-input/pin-input-customized";
import { PinInputInitialValue } from "@/components/examples/pin-input/pin-input-initial-value";
import { PinInputOTPMode } from "@/components/examples/pin-input/pin-input-otp-mode";
import { PinInputRootProvider } from "@/components/examples/pin-input/pin-input-root-provider";
import { PinInputWithField } from "@/components/examples/pin-input/pin-input-with-field";
import { PinInpuWithMask } from "@/components/examples/pin-input/pin-input-with-mask";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pin-input")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="pin-input">
      {" "}
      <PinInputBasic />
      <PinInputInitialValue />
      <PinInputCustomized />
      <PinInputBlurred />
      <PinInputOTPMode />
      <PinInpuWithMask />
      <PinInputWithField />
      <PinInputRootProvider />
    </section>
  );
}
