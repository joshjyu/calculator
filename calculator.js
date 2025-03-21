const currentDigit = document.querySelectorAll(".digit");
const operator = document.querySelectorAll(".operator");
const equals = document.querySelector("#eq");
const clear = document.querySelector("#clear");
const backspaceButton = document.querySelector("#backspace");
const decimalButton = document.querySelector("#decimal");
let displayContent = document.querySelector(".display");

let firstOperandStr = "";
let secondOperandStr = "";
let operatorStr = "";
let result = null;

window.addEventListener("keydown", kbInputHandler);
currentDigit.forEach((button) =>
  button.addEventListener("click", () => clickDigit(button.id)),
);
operator.forEach((button) =>
  button.addEventListener("click", () => clickOperator(button.id)),
);
equals.addEventListener("click", calculate);
clear.addEventListener("click", allClear);
backspaceButton.addEventListener("click", backspace);
decimalButton.addEventListener("click", clickDecimal);

function clickDigit(event) {
  if (typeof result === "number") {
    allClear();
    firstOperandStr += event;
    displayInput();
  } else if (operatorStr.length == 0) {
    firstOperandStr += event;
    displayInput();
  } else if (operatorStr.length > 0) {
    secondOperandStr += event;
    displayInput();
  } else {
    return;
  }
}

function clickOperator(event) {
  if (
    parseFloat(secondOperandStr) ||
    parseFloat(secondOperandStr) == 0 ||
    parseFloat(secondOperandStr) == -0
  ) {
    calculate();
    operatorStr = event;
    displayInput();
  } else if (
    (parseFloat(firstOperandStr) ||
      parseFloat(firstOperandStr) == 0 ||
      parseFloat(firstOperandStr) == -0) &&
    secondOperandStr.length == 0 &&
    operatorStr.length == 0
  ) {
    operatorStr = event;
    displayInput();
  } else if (event == "-" && firstOperandStr.length == 0) {
    firstOperandStr += "-";
    displayInput();
  } else if (
    event == "-" &&
    operatorStr.length > 0 &&
    secondOperandStr.length == 0
  ) {
    secondOperandStr += "-";
    displayInput();
  } else {
    return;
  }
}

function clickDecimal() {
  switch (operatorStr.length) {
    case 0:
      if (!firstOperandStr.includes(".")) {
        firstOperandStr += ".";
        displayInput();
        break;
      } else {
        break;
      }
    case 1:
      if (!secondOperandStr.includes(".")) {
        secondOperandStr += ".";
        displayInput();
        break;
      } else {
        break;
      }
  }
}

function allClear() {
  firstOperandStr = "";
  secondOperandStr = "";
  operatorStr = "";
  result = null;
  displayInput();
}

function backspace() {
  if (secondOperandStr.length > 0) {
    secondOperandStr = secondOperandStr.slice(0, -1);
    displayInput();
  } else if (operatorStr.length > 0) {
    operatorStr = "";
    displayInput();
  } else if (firstOperandStr.length > 0) {
    firstOperandStr = firstOperandStr.slice(0, -1);
    displayInput();
  } else {
    return;
  }
}

function calculate() {
  if (
    !(
      parseFloat(secondOperandStr) ||
      parseFloat(secondOperandStr) == 0 ||
      parseFloat(secondOperandStr) == -0
    )
  ) {
    return;
  }

  const firstOperand = parseFloat(firstOperandStr);
  const secondOperand = parseFloat(secondOperandStr);

  switch (operatorStr) {
    case "+":
      result = add(firstOperand, secondOperand);
      break;
    case "-":
      result = subtr(firstOperand, secondOperand);
      break;
    case "x":
      result = multip(firstOperand, secondOperand);
      break;
    case "*":
      result = multip(firstOperand, secondOperand);
      break;
    case "/":
      result = div(firstOperand, secondOperand);
      break;
  }

  displayResult();
  firstOperandStr = result.toString();
  secondOperandStr = "";
  operatorStr = "";
  result = null;
}

function displayInput() {
  displayContent.textContent =
    firstOperandStr + " " + operatorStr + " " + secondOperandStr;
  return displayContent;
}

function displayResult() {
  displayContent.textContent = roundResult(result);
  return displayContent;
}

function kbInputHandler(e) {
  if (e.key >= 0 && e.key <= 9) clickDigit(e.key);
  if (e.key === ".") clickDecimal();
  if (e.key === "=" || e.key === "Enter") calculate();
  if (e.key === "Backspace") backspace();
  if (e.key === "Escape") allClear();
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "x" || e.key === "/") {
    e.preventDefault();
    clickOperator(e.key);
  }
}

function add(a, b) {
  return a + b;
}

function subtr(a, b) {
  return a - b;
}

function multip(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function roundResult(num) {
  return Math.round(num * Math.pow(10, 9)) / Math.pow(10, 9);
}
