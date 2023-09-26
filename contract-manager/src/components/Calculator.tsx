import { useState } from "react";

// const performOperation: any = {
//   "+": function (x: number, y: number): number {
//     return x + y;
//   },
//   "-": function (x: number, y: number): number {
//     return x - y;
//   },
//   x: function (x: number, y: number): number {
//     return x * y;
//   },
//   "/": function (x: number, y: number): number {
//     return x / y;
//   },
// };

//////////////////////////////// TODO: MAKE SOLUTION ON WHITE BOARD, THEN IMPLEMENT (make string from values, prevent certain entries when ending is specific operators, pass to final analysis function)

const Calculator = () => {
  // const [curNum, setCurNum] = useState<number | null | undefined>(0);
  // const [operation, setOperation] = useState<string | null>(null);
  // const [result, setResult] = useState<string>("");

  return (
    <div>
      <h1>{}</h1>
      <h2>= {}</h2>
      <ul>
        <div>
          <button onClick={() => {}}>0</button>
          <button onClick={() => {}}>1</button>
          <button onClick={() => {}}>2</button>
        </div>
        <div>
          <button onClick={() => {}}>3</button>
          <button onClick={() => {}}>4</button>
          <button onClick={() => {}}>5</button>
        </div>
        <div>
          <button onClick={() => {}}>6</button>
          <button onClick={() => {}}>7</button>
          <button onClick={() => {}}>8</button>
        </div>
        <div>
          <button onClick={() => {}}>9</button>
          <button onClick={() => {}}>-</button>
          <button onClick={() => {}}>+</button>
        </div>
        <div>
          <button onClick={() => {}}>x</button>
          <button onClick={() => {}}>÷</button>
          <button onClick={() => {}}>.</button>
        </div>
        <button onClick={() => {}}>C</button>
        <button onClick={() => {}}>=</button>
      </ul>
    </div>
  );
};

export default Calculator;
