import React, { useState } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      if (expression.trim() === "") {
        setResult("Error");
        return;
      }
      try {
        const calculatedResult = eval(expression);
        setResult(calculatedResult);
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setExpression("");
      setResult("");
    } else {
      setExpression((prev) => prev + value);
    }
  };

  const buttons = [
    "7", "8", "9", "+",
    "4", "5", "6", "-",
    "1", "2", "3", "*",
    "C", "0", "=", "/",
  ];

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input
        type="text"
        value={expression}
        readOnly
        className="calculator-input"
      />
      <div className="result">{result}</div>
      <div className="calculator-buttons">
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => handleButtonClick(button)}
            className="calculator-button"
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
