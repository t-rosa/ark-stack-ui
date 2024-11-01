import { NumberInput } from "@/components/ui/number-input";
import { useNumberInput } from "@ark-ui/react/number-input";

export function NumberInputRootProvider() {
  const numberInput = useNumberInput();

  return (
    <>
      <button onClick={() => numberInput.focus()}>Focus</button>

      <NumberInput.RootProvider value={numberInput}>
        <NumberInput.Label>Label</NumberInput.Label>
        <NumberInput.Input />
        <NumberInput.Control>
          <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
          <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
        </NumberInput.Control>
      </NumberInput.RootProvider>
    </>
  );
}
