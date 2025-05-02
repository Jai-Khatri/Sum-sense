import React from "react";
import { useCalculator } from "../context/CalculatorContext";
import { motion, AnimatePresence } from "framer-motion";

const Display = () => {
  const { expression, result } = useCalculator(); 

  return (
    <div className="bg-zinc-200 dark:bg-zinc-900 text-zinc-800 dark:text-white rounded-lg p-4 shadow-inner transition-colors duration-500">
      <div className="text-right space-y-2 min-h-[4.5rem] flex flex-col justify-end">
        <AnimatePresence mode="wait">
          <motion.div
            key={expression}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 break-words"
          >
            {expression}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={result}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-3xl font-semibold break-words"
          >
            {result || "0"}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Display;
