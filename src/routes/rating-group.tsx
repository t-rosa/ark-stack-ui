import { RatingGroupBasic } from "@/components/examples/rating-group/rating-group-basic";
import { RatingGroupControlled } from "@/components/examples/rating-group/rating-group-controlled";
import { RatingGroupDisabled } from "@/components/examples/rating-group/rating-group-disabled";
import { RatingGroupFormUsage } from "@/components/examples/rating-group/rating-group-form-usage";
import { RatingGroupHalfRatings } from "@/components/examples/rating-group/rating-group-half-ratings";
import { RatingGroupInitialValue } from "@/components/examples/rating-group/rating-group-initial-value";
import { RatingGroupReadOnly } from "@/components/examples/rating-group/rating-group-read-only";
import { RatingGroupRootProvider } from "@/components/examples/rating-group/rating-group-root-provider";
import { RatingGroupWithField } from "@/components/examples/rating-group/rating-group-with-field";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/rating-group")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="rating-group">
      <RatingGroupBasic />
      <RatingGroupHalfRatings />
      <RatingGroupInitialValue />
      <RatingGroupControlled />
      <RatingGroupDisabled />
      <RatingGroupReadOnly />
      <RatingGroupFormUsage />
      <RatingGroupWithField />
      <RatingGroupRootProvider />
    </section>
  );
}
