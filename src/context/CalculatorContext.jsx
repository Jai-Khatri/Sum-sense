import React, { createContext, useContext, useEffect, useState } from "react";
import { evaluate } from "mathjs";
import { getHistoryFromStorage, saveHistoryToStorage } from "../utils/localStorage";

const CalculatorContext = createContext();

export const useCalculator = () => useContext(CalculatorContext);

export const CalculatorProvider = ({ children }) => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState(getHistoryFromStorage());

  // Save history to localStorage on change
  useEffect(() => {
    saveHistoryToStorage(history);
  }, [history]);

  const addToExpression = (value) => {
    setExpression((prev) => prev + value);
  };

  const clear = () => {
    setExpression("");
    setResult("");
  };

  const deleteLast = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      const evalResult = evaluate(expression);
      setResult(evalResult.toString());
      setHistory((prev) => [...prev, { expression, result: evalResult.toString() }]);
    } catch (err) {
      setResult("Error");
    }
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const contextValue = {
    expression,
    result,
    history,
    addToExpression,
    clear,
    deleteLast,
    calculate,
    clearHistory,
    setExpression,
  };

  return (
    <CalculatorContext.Provider value={contextValue}>
      {children}
    </CalculatorContext.Provider>
  );
};
