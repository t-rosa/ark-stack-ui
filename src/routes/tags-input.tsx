import { TagsInputBasic } from "@/components/examples/tags-input/tags-input-basic";
import { TagsInputBlurBehavior } from "@/components/examples/tags-input/tags-input-blur-behavior";
import { TagsInputDisabledEditing } from "@/components/examples/tags-input/tags-input-disabled-editing";
import { TagsInputInitialValue } from "@/components/examples/tags-input/tags-input-initial-value";
import { TagsInputMaxWithOverflow } from "@/components/examples/tags-input/tags-input-max-with-overflow";
import { TagsInputOnEvent } from "@/components/examples/tags-input/tags-input-on-event";
import { TagsInputPasteBehavior } from "@/components/examples/tags-input/tags-input-paste-behavior";
import { TagsInputRootProvider } from "@/components/examples/tags-input/tags-input-root-provider";
import { TagsInputValidated } from "@/components/examples/tags-input/tags-input-validated";
import { TagsInputWithField } from "@/components/examples/tags-input/tags-input-with-field";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tags-input")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="tags-input">
      <TagsInputBasic />
      <TagsInputInitialValue />
      <TagsInputMaxWithOverflow />
      <TagsInputValidated />
      <TagsInputBlurBehavior />
      <TagsInputPasteBehavior />
      <TagsInputDisabledEditing />
      <TagsInputOnEvent />
      <TagsInputWithField />
      <TagsInputRootProvider />
    </section>
  );
}
