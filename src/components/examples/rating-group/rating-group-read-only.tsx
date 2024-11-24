import { RatingGroup } from "@/components/ui/rating-group";
import { StarIcon } from "lucide-react";

export function RatingGroupReadOnly() {
  return (
    <RatingGroup.Root count={5} defaultValue={3} readOnly>
      <RatingGroup.Label>Label</RatingGroup.Label>
      <RatingGroup.Control>
        <RatingGroup.Context>
          {({ items }) =>
            items.map((item) => (
              <RatingGroup.Item key={item} index={item}>
                <RatingGroup.ItemContext>
                  {({ highlighted }) =>
                    highlighted ? <StarIcon fill="currrent" /> : <StarIcon />
                  }
                </RatingGroup.ItemContext>
              </RatingGroup.Item>
            ))
          }
        </RatingGroup.Context>
        <RatingGroup.HiddenInput />
      </RatingGroup.Control>
    </RatingGroup.Root>
  );
}
