import React from "react";
import clsx from "clsx";

const Button = ({ label, onClick, type, span }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "py-4 rounded-lg text-lg font-semibold shadow-sm transition-colors",
        "hover:brightness-110 active:scale-95",
        "bg-zinc-700 text-white",
        type === "operator" && "bg-emerald-600",
        type === "action" && "bg-zinc-600",
        type === "equals" && "bg-emerald-500 col-span-1",
        span === 2 && "col-span-2"
      )}
    >
      {label}
    </button>
  );
};

export default Button;
