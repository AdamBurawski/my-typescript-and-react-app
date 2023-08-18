import { Operation } from "./Calculator";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import {
  addToHistory,
  setResult,
} from "./features/calculator/calculator-slice";

export const CalculatorArithmeticbuttons = () => {
  const dispatch = useDispatch();
  const { first, second } = useSelector((store: RootState) => store.calculator);

  const handleSetOperationResult = (result: number | string) => {
    dispatch(setResult(result));
  };

  const handleAddHistory = (line: string) => {
    dispatch(addToHistory(line));
  };

  const handleOperation = (operation: Operation) => {
    switch (operation) {
      case Operation.ADD: {
        const operationResult = first + second;
        handleSetOperationResult(operationResult);
        handleAddHistory(
          `Added ${first} to ${second} and got ${operationResult}`
        );
        break;
      }
      case Operation.SUBTRACT: {
        const operationResult = first - second;
        handleSetOperationResult(operationResult);
        handleAddHistory(
          `Subtracted ${second} from ${first} and got ${operationResult}`
        );
        break;
      }
      case Operation.MULTIPLY: {
        const operationResult = first * second;
        handleSetOperationResult(operationResult);
        handleAddHistory(
          `Multiplied ${first} by ${second} and got ${operationResult}`
        );
        break;
      }
      case Operation.DIVIDE: {
        if (second === 0) {
          handleSetOperationResult("nie dziel przez 0");
          handleAddHistory(
            `Tried to divide ${first} by ${second} but it's prohibited`
          );
        } else {
          const operationResult = first / second;
          handleSetOperationResult(operationResult);
          handleAddHistory(
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
