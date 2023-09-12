import { useState } from "react";

const performOperation: any = {
  "+": function (x: number, y: number): number {
    return x + y;
  },
  "-": function (x: number, y: number): number {
    return x - y;
  },
  x: function (x: number, y: number): number {
    return x * y;
  },
  "/": function (x: number, y: number): number {
    return x / y;
  },
};

const Calculator = () => {
  const numEntered = (num: number) => {
    setCurNum((prevNumber) => {
      if (!prevNumber && !operation) {
        setResult(num.toString());
        return num;
      } else if (prevNumber && !operation) {
        setResult((prevResult) => {
          if (num === 0 && prevNumber.toString().includes(".")) {
            const trailZeroString: string = prevResult.toString() + num.toString();
            return parseFloat(trailZeroString).toFixed(trailZeroString.split('.')[1].length);
          }
          return parseFloat(prevResult.toString() + num.toString()).toString();
        });
        return parseFloat(prevNumber.toString() + num.toString());
      } else if (prevNumber && operation) {
        return parseFloat(prevNumber.toString() + num.toString());
      } else if (!prevNumber && operation) {
        return num;
      }

      // will never run?
      return num;
    });
    setDisplayedOperations(() => {
      let displayOperation: string;
      if (curNum && !operation) {
        return (displayOperation =
          `${curNum.toString()}` + `${num.toString()}`);
      } else if (curNum && operation) {
        displayOperation = `${curNum.toString()}` + `${num.toString()}`;
        return displayOperation;
      } else {
        return num.toString();
      }
    });
  };
  const operationEntered = (operation: string) => {
    // show result when previous operation exists
    setOperation((prevOperation) => {
      if (operation === "." && !prevOperation) {
        console.log("Make Decimal Function");  // prime number for first number after decimal? CHECK IF "." already there (already a decimal)
        return null;
      } else if (operation === "." && prevOperation != ".") {
        console.log("don't touch previous operation: do nothing");
        return prevOperation;
      } else if (operation === "." && prevOperation == ".") {
        console.log("repeated decimal: do nothing")
        // track whether curNum is already a decimal?
        return prevOperation;
      }
      if (prevOperation && curNum) {
        setResult((prevResult) => {
          return performOperation[prevOperation](prevResult, curNum).toString();
        });
        return operation;
      } else {
        if (curNum) {
          setDisplayedOperations(`${curNum}${operation}`);
          return operation;
        } else if (prevOperation) {
          setDisplayedOperations((prevDisplay) => {
            const newOperationDisplay =
              prevDisplay!.slice(0, prevDisplay!.length - 1) + operation;
            return newOperationDisplay;
          });
          return operation;
        } else {
          return null;
        }
      }
    });
    if (operation === ".") {
      return;
    } else if (curNum && operation) {
      setCurNum(null);
    }
  };

  const clearNumbers = () => {
    setCurNum(null);
    setResult("");
    setOperation(null);
    setDisplayedOperations(null);
  };

  const onEquals = () => {
    if (curNum && operation) {
      setResult((prevResult) => {
        const result: number = performOperation[operation](prevResult, curNum);
        setCurNum(result);
        setDisplayedOperations(result.toString());
        return result.toString();
      });
      setOperation(null);
    }
  };

  const [displayedOperations, setDisplayedOperations] = useState<string | null>(
    null
  );
  const [curNum, setCurNum] = useState<number | null | undefined>(0);
  const [operation, setOperation] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");

  return (
    <div>
      <h1>{displayedOperations}</h1>
      <h2>= {result}</h2>
      <ul>
        <div>
          <button
            onClick={() => {
              numEntered(0);
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              numEntered(1);
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              numEntered(2);
            }}
          >
            2
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              numEntered(3);
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              numEntered(4);
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              numEntered(5);
            }}
          >
            5
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              numEntered(6);
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              numEntered(7);
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              numEntered(8);
            }}
          >
            8
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              numEntered(9);
            }}
          >
            9
          </button>
          <button
            onClick={() => {
              operationEntered("-");
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              operationEntered("+");
            }}
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              operationEntered("x");
            }}
          >
            x
          </button>
          <button
            onClick={() => {
              operationEntered("/");
            }}
          >
            ÷
          </button>
          <button
            onClick={() => {
              operationEntered(".");
            }}
          >
            .
          </button>
        </div>
        <button
          onClick={() => {
            clearNumbers();
          }}
        >
          C
        </button>
        <button onClick={onEquals}>=</button>
      </ul>
    </div>
  );
};

export default Calculator;
