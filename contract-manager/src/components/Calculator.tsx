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

const checkOperatorInput = (expression: string, operator: string): string => {
  if (expression.length == 0) {
    return "";
  }

  let newExpression = expression;
  const validOperators = ["+", "-", "/", "*"];
  while (
    newExpression[newExpression.length - 1] == "." ||
    validOperators.includes(newExpression[newExpression.length - 1])
  ) {
    newExpression = newExpression.slice(0, -1);
  }

  if (newExpression.length == 0 || validOperators.includes(newExpression[0])) {
    return "";
  } else {
    return newExpression + operator;
  }
};

const checkDecimalInput = (expression: string): boolean => {
  for (let i = expression.length - 1; i >= 0; i--) {
    console.log(expression[i]);
    const validOperators = ["+", "-", "/", "*"];
    if (validOperators.includes(expression[i])) {
      return true;
    } else if (expression[i] == ".") {
      return false;
    }
  }
  return true;
};

const Calculator = () => {
  const addNum = (num: string): void => {
    setExpression((prevExpression) => {
      return prevExpression + num;
    });
  };

  const addOperator = (operator: string): void => {
    // check for input problems, then add to expression
    setExpression((prevExpression) => {
      return checkOperatorInput(prevExpression, operator);
    });
  };

  const addDecimal = (): void => {
    // prevent decimal mistakes, then add to expression otherwise
    setExpression((prevExpression) => {
      return checkDecimalInput(prevExpression)
        ? prevExpression + "."
        : prevExpression;
    });
  };

  const [expression, setExpression] = useState<string>("");

  return (
    <div>
      <h1>{expression}</h1>
      <h2>= {}</h2>
      <ul>
        <div>
          <button
            onClick={() => {
              addNum("0");
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              addNum("1");
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              addNum("2");
            }}
          >
            2
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              addNum("3");
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              addNum("4");
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              addNum("5");
            }}
          >
            5
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              addNum("6");
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              addNum("7");
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              addNum("8");
            }}
          >
            8
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              addNum("9");
            }}
          >
            9
          </button>
          <button
            onClick={() => {
              addOperator("-");
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              addOperator("+");
            }}
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              addOperator("*");
            }}
          >
            x
          </button>
          <button
            onClick={() => {
              addOperator("/");
            }}
          >
            ÷
          </button>
          <button
            onClick={() => {
              addDecimal();
            }}
          >
            .
          </button>
        </div>
        <button
          onClick={() => {
            setExpression("");
          }}
        >
          C
        </button>
        <button onClick={() => {}}>=</button>
      </ul>
    </div>
  );
};

export default Calculator;
