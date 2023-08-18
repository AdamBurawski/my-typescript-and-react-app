import { useDispatch, useSelector } from "react-redux";
import { CalculatorArithmeticbuttons } from "./CalculatorArithmeticsButtons";
import { RootState } from "./store";
import { clearHistory } from "./features/calculator/calculator-slice";

export const CalculatorButtons = () => {
  const dispatch = useDispatch();
  const { history } = useSelector((store: RootState) => store.calculator);

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  return (
    <>
      <CalculatorArithmeticbuttons />
      <button onClick={handleClearHistory}>
        Clear History ({history.length})
      </button>
    </>
  );
};
