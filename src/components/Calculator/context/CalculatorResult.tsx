import { useContext } from "react";
import { CalculatorContext } from "./Calculator";

export const CalculatorResult = () => {
  const context = useContext(CalculatorContext);

  if (!context) return null;

  const { first, second, result } = context;

  return (
    <>
      <h1>{result}</h1>
      <p>
        Current values {first} and {second}
      </p>
    </>
  );
};
