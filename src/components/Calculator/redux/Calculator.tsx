import React, { ChangeEvent, useState } from "react";
import { CalculatorForm } from "./CalculatorForm";
import { CalculatorButtons } from "./CalculatorButtons";
import { CalculatorHistory } from "./CalculatorHistory";
import { CalculatorResult } from "./CalculatorResult";
import { Provider } from "react-redux";
import { store } from "./store";

export enum Operation {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
}

export const Calculator = () => {
  return (
    <div>
      <Provider store={store}>
        <CalculatorForm />
        <CalculatorResult />
        <CalculatorButtons />
        <CalculatorHistory />
      </Provider>
    </div>
  );
};
