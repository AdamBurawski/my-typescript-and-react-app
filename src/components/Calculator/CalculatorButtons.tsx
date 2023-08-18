import { Operation } from "./Calculator";
import { CalculatorArithmeticbuttons } from "./CalculatorArithmeticsButtons";

interface Props {
  setOperationResult: (reust: number | string) => void;
  addHistory: (line: string) => void;
  clearHistory: () => void;
  history: string[];
  first: number;
  second: number;
}

export const CalculatorButtons = ({
  first,
  second,
  setOperationResult,
  addHistory,
  history,
  clearHistory,
}: Props) => {
  return (
    <>
      <CalculatorArithmeticbuttons
        setOperationResult={setOperationResult}
        first={first}
        second={second}
        addHistory={addHistory}
      />
      <button onClick={clearHistory}>Clear History ({history.length})</button>
    </>
  );
};
