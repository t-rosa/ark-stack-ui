import { Accordion } from "@/components/ui/accordion";
import { ChevronDownIcon } from "lucide-react";

export function AccordionHorizontal() {
  return (
    <Accordion.Root defaultValue={["React"]} orientation="horizontal">
      {["React", "Solid", "Vue"].map((item) => (
        <Accordion.Item key={item} value={item}>
          <Accordion.ItemTrigger>
            What is {item}?
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            {item} is a JavaScript library for building user interfaces.
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
