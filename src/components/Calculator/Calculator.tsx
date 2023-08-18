import React, { ChangeEvent, useState } from "react";
import { CalculatorForm } from "./CalculatorForm";
import { CalculatorButtons } from "./CalculatorButtons";
import { CalculatorHistory } from "./CalculatorHistory";
import { CalculatorResult } from "./CalculatorResult";

export enum Operation {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
}

export const Calculator = () => {
  const [first, setFirst] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const [result, setResult] = useState<number | string>();
  const [history, setHistory] = useState<string[]>([]);

  const handleFirstChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirst(Number(e.target.value));
  };

  const handleSecondChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSecond(Number(e.target.value));
  };

  const setOperationResult = (operationResult: number | string) => {
    setResult(operationResult);
  };

  const addHistory = (line: string) => {
    setHistory((prevHistory) => [...prevHistory, line]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div>
      <CalculatorForm
        first={first}
        second={second}
        handleFirstChange={handleFirstChange}
        handleSecondChange={handleSecondChange}
      />

      <CalculatorResult result={result} first={first} second={second} />

      <CalculatorButtons
        setOperationResult={setOperationResult}
        first={first}
        second={second}
        addHistory={addHistory}
        history={history}
        clearHistory={clearHistory}
      />
      <CalculatorHistory history={history} />
    </div>
  );
};
