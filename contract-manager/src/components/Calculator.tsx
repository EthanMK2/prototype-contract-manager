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
        setResult(num);
        return num;
      } else if (prevNumber && !operation) {
        setResult((prevResult) => {
          return parseInt(prevResult.toString() + num.toString());
        });
        return parseInt(prevNumber.toString() + num.toString());
      } else if (prevNumber && operation) {
        return parseInt(prevNumber.toString() + num.toString());
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
      if (prevOperation && curNum) {
        setResult((prevResult) => {
          return performOperation[prevOperation](prevResult, curNum);
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
    setCurNum(null);
  };

  const clearNumbers = () => {
    setCurNum(null);
    setResult(0);
    setOperation(null);
    setDisplayedOperations(null);
  };

  const onEquals = () => {
    if (curNum && operation) {
      setResult((prevResult) => {
        const result: number = performOperation[operation](prevResult, curNum);
        setCurNum(result);
        setDisplayedOperations(result.toString());
        return result;
      });
      setOperation(null);
    }
  };

  const [displayedOperations, setDisplayedOperations] = useState<string | null>(
    null
  );
  const [curNum, setCurNum] = useState<number | null | undefined>(0);
  const [operation, setOperation] = useState<string | null>(null);
  const [result, setResult] = useState<number>(0);

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
