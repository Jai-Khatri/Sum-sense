import React from "react";
import { useCalculator } from "../context/CalculatorContext";

const History = () => {
  const { history, setExpression, clearHistory } = useCalculator();

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-zinc-300">Tap to reuse</span>
        <button
          onClick={clearHistory}
          className="text-xs text-red-400 hover:underline"
        >
          Clear All
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        {history.length === 0 && (
          <p className="text-zinc-400 text-sm italic">No history yet.</p>
        )}
        {history
          .slice()
          .reverse()
          .map((entry, index) => (
            <div
              key={index}
              onClick={() => setExpression(entry.expression)}
              className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-md cursor-pointer"
            >
              <div className="text-xs text-zinc-400 break-all">
                {entry.expression}
              </div>
              <div className="text-sm font-semibold text-emerald-400 text-right">
                = {entry.result}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default History;
