import React from "react";

function Button({ bgColor, color, text, borderRadius }) {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-sm p-2 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
}

export default Button;
