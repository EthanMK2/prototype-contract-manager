// calculator eval logic
// NOTE: only works for clean math expressions free of input errors ()

const addNums = (x: number, y: number): number => {
  return x + y;
};

const subtractNums = (x: number, y: number): number => {
  return x - y;
};

const multiplyNums = (x: number, y: number): number => {
  return x * y;
};

const divideNums = (x: number, y: number): number => {
  return x / y;
};

const performOperation = (
  firstNum: number,
  secondNum: number,
  operator: string
): number => {
  if (operator == "+") {
    return addNums(firstNum, secondNum);
  }
  if (operator == "-") {
    return subtractNums(firstNum, secondNum);
  }
  if (operator == "*") {
    return multiplyNums(firstNum, secondNum);
  }
  if (operator == "/") {
    return divideNums(firstNum, secondNum);
  }

  return 0; // never runs
};

const calculate = (expression: string): string => {
    console.log("recieved expression: " + expression)
  const validOperators = ["+", "-", "/", "*"];
  let numArr: string[] = [];
  let operatorArr = [];
  let currentNum = "";

  // create two arrays, one for numbers in expression, and one for operators
  for (let i = 0; i < expression.length; i++) {
    if (validOperators.includes(expression[i])) {
      numArr.push(currentNum);
      operatorArr.push(expression[i]);
      currentNum = "";
      continue;
    }
    currentNum += expression[i];
  }

  if (currentNum.length > 0) {
    numArr.push(currentNum);
    currentNum = "";
  }

  while (numArr.length > 1) {
    const firstNum = parseFloat(numArr[0]);
    const secondNum = parseFloat(numArr[1]);
    const newNum = performOperation(firstNum, secondNum, operatorArr[0]);

    numArr.shift();
    numArr.shift();
    operatorArr.shift();

    numArr.unshift(newNum.toString());
  }

  // failsafe for first number
  if (currentNum.length > 0) {
    console.log("got RESULT: " + currentNum)
    return currentNum;
  }

  console.log("got RESULT: " + numArr[0])
  return numArr[0];
};

export default calculate;
