import { useContext } from "react";
import { CalculatorContext, Operation } from "./Calculator";

export const CalculatorArithmeticbuttons = () => {
  const context = useContext(CalculatorContext);

  if (!context) return null;

  const { first, second, setOperationResult, addHistory } = context;

  const handleOperation = (operation: Operation) => {
    switch (operation) {
      case Operation.ADD: {
        const operationResult = first + second;
        setOperationResult(operationResult);
        addHistory(`Added ${first} to ${second} and got ${operationResult}`);
        break;
      }
      case Operation.SUBTRACT: {
        const operationResult = first - second;
        setOperationResult(operationResult);
        addHistory(
          `Subtracted ${second} from ${first} and got ${operationResult}`
        );
        break;
      }
      case Operation.MULTIPLY: {
        const operationResult = first * second;
        setOperationResult(operationResult);
        addHistory(
          `Multiplied ${first} by ${second} and got ${operationResult}`
        );
        break;
      }
      case Operation.DIVIDE: {
        if (second === 0) {
          setOperationResult("nie dziel przez 0");
          addHistory(
            `Tried to divide ${first} by ${second} but it's prohibited`
          );
        } else {
          const operationResult = first / second;
          setOperationResult(operationResult);
          addHistory(
            `Divided ${first} by ${second} and got ${operationResult}`
          );
        }
        break;
      }
    }
  };

  return (
    <>
      <button onClick={() => handleOperation(Operation.ADD)}>+</button>
      <button onClick={() => handleOperation(Operation.SUBTRACT)}>-</button>
      <button onClick={() => handleOperation(Operation.MULTIPLY)}>*</button>
      <button onClick={() => handleOperation(Operation.DIVIDE)}>/</button>
    </>
  );
};
