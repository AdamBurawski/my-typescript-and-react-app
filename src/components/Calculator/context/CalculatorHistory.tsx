import { useContext } from "react";
import { CalculatorContext, Operation } from "./Calculator";

export const CalculatorHistory = () => {
  const context = useContext(CalculatorContext);

  if (!context) return null;

  const { history } = context;

  return (
    <ul>
      {history.map((line, index) => (
        <li key={index}>{line}</li>
      ))}
    </ul>
  );
};
