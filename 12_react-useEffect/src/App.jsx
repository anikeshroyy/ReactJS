import { useState } from "react";
import { useEffect } from "react";

export const App = () => {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(100);

  useEffect(() => {
    console.log("UseEffect used");
    // document.title = `count: ${num1}`;
  }, [num1]);

  return (
    <div className="card-container">
      <div className="card">
        <h1>{num1}</h1>
        <button
          onClick={() => {
            setNum1((prev) => prev + 1);
          }}
        >
          Increase
        </button>
      </div>
      <div className="card">
        <h1>{num2}</h1>
        <button
          onClick={() => {
            setNum2((prev) => prev - 10);
          }}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};
