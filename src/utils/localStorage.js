const HISTORY_KEY = "calculator_history";

export const getHistoryFromStorage = () => {
  try {
    const stored = localStorage.getItem(HISTORY_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const saveHistoryToStorage = (history) => {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch (err) {
    console.error("Failed to save history:", err);
  }
};
