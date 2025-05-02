import React from "react";
import { CalculatorProvider } from "./context/CalculatorContext";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import History from "./components/History";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <CalculatorProvider>
      <main className="min-h-screen bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-white flex items-center justify-center p-4 transition-colors duration-500">
        <div className="w-full max-w-4xl rounded-2xl shadow-2xl bg-zinc-100 dark:bg-zinc-800 grid grid-cols-1 md:grid-cols-[2fr_1fr] overflow-hidden transition-colors duration-500">
          
          {/* Calculator Panel */}
          <div className="flex flex-col justify-between p-6 gap-4">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-semibold text-emerald-600 dark:text-emerald-400 transition-colors duration-500">Sum Sense</h1>
              <ThemeToggle />
            </div>
            <Display />
            <Keypad />
          </div>

          {/* History Panel */}
          <div className="bg-zinc-200 dark:bg-zinc-700 p-4 border-l border-zinc-300 dark:border-zinc-600 hidden md:block transition-colors duration-500">
            <h2 className="text-xl font-semibold text-emerald-500 dark:text-emerald-300 mb-2 transition-colors duration-500">History</h2>
            <History />
          </div>

        </div>
      </main>
    </CalculatorProvider>
  );
};

export default App;
