import React from "react";
import { useCalculator } from "../context/CalculatorContext";

const Keypad = () => {
  const {
    expression,
    result,
    addToExpression,
    clear,
    deleteLast,
    calculate,
    setExpression,
  } = useCalculator();

  // Handle memory functions
  const memory = {
    M: "",
  };

  const handleMemoryAdd = () => {
    memory.M = result;
  };

  const handleMemoryClear = () => {
    memory.M = "";
  };

  const handleMemoryRecall = () => {
    setExpression(memory.M);
  };

  const handleSquareRoot = () => {
    // Ensure expression is a valid number before calculating square root
    if (expression && !isNaN(expression)) {
      setExpression(Math.sqrt(Number(expression)).toString());
    } else {
      setExpression("Error");
    }
  };

  const handlePercentage = () => {
    // Ensure expression is a valid number before calculating percentage
    if (expression && !isNaN(expression)) {
      setExpression((Number(expression) / 100).toString());
    } else {
      setExpression("Error");
    }
  };

  return (
    <div className="buttons">
      <button
        className="button"
        onClick={clear}
      >
        AC
      </button>
      <button
        className="button"
        onClick={deleteLast}
      >
        ⬅️
      </button>
      <button
        className="button"
        onClick={() => addToExpression("/")}
      >
        ÷
      </button>
      <button
        className="button"
        onClick={() => addToExpression("*")}
      >
        ✖️
      </button>
      <button
        className="button"
        onClick={() => addToExpression("7")}
      >
        7
      </button>
      <button
        className="button"
        onClick={() => addToExpression("8")}
      >
        8
      </button>
      <button
        className="button"
        onClick={() => addToExpression("9")}
      >
        9
      </button>
      <button
        className="button"
        onClick={() => addToExpression("-")}
      >
        -
      </button>
      <button
        className="button"
        onClick={() => addToExpression("4")}
      >
        4
      </button>
      <button
        className="button"
        onClick={() => addToExpression("5")}
      >
        5
      </button>
      <button
        className="button"
        onClick={() => addToExpression("6")}
      >
        6
      </button>
      <button
        className="button"
        onClick={() => addToExpression("+")}
      >
        +
      </button>
      <button
        className="button"
        onClick={() => addToExpression("1")}
      >
        1
      </button>
      <button
        className="button"
        onClick={() => addToExpression("2")}
      >
        2
      </button>
      <button
        className="button"
        onClick={() => addToExpression("3")}
      >
        3
      </button>
      <button
        className="button"
        onClick={() => addToExpression("0")}
      >
        0
      </button>
      <button
        className="button"
        onClick={() => addToExpression(".")}
      >
        .
      </button>
      <button
        className="button"
        onClick={calculate}
      >
        =
      </button>

      {/* New feature buttons */}
      <button
        className="button"
        onClick={handleSquareRoot}
      >
        √
      </button>
      <button
        className="button"
        onClick={handlePercentage}
      >
        %
      </button>

      {/* Memory Functions */}
      <button
        className="button"
        onClick={handleMemoryAdd}
      >
        M+
      </button>
      <button
        className="button"
        onClick={handleMemoryRecall}
      >
        MR
      </button>
      <button
        className="button"
        onClick={handleMemoryClear}
      >
        MC
      </button>
    </div>
  );
};

export default Keypad;
