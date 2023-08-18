import { useContext } from "react";
import { CalculatorContext } from "./Calculator";
import { CalculatorArithmeticbuttons } from "./CalculatorArithmeticsButtons";

export const CalculatorButtons = () => {
  const context = useContext(CalculatorContext);

  if (!context) return null;

  const { history, clearHistory } = context;

  return (
    <>
      <CalculatorArithmeticbuttons />
      <button onClick={clearHistory}>Clear History ({history.length})</button>
    </>
  );
};
