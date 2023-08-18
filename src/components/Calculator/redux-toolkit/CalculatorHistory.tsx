import { useSelector } from "react-redux";
import { RootState } from "./store";

export const CalculatorHistory = () => {
  const { history } = useSelector((store: RootState) => store.calculator);
  return (
    <ul>
      {history.map((line, index) => (
        <li key={index}>{line}</li>
      ))}
    </ul>
  );
};
