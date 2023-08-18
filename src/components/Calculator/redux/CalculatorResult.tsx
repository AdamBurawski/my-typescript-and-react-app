import { useSelector } from "react-redux";
import { RootState } from "./store";

export const CalculatorResult = () => {
  const { result, first, second } = useSelector(
    (store: RootState) => store.calculator
  );
  return (
    <>
      <h1>{result}</h1>
      <p>
        Current values {first} and {second}
      </p>
    </>
  );
};
