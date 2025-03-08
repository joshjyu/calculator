const currentDigit = document.querySelectorAll(".digit");
const operator = document.querySelectorAll(".operator");
const equals = document.querySelector("#eq");
const clear = document.querySelector("#clear");
const backspaceButton = document.querySelector("#backspace");
const decimalButton = document.querySelector("#decimal");
let displayContent = document.querySelector(".display");

let firstNumberStr = "";
let secondNumberStr = "";
let operatorStr = "";
let result;

for (i = 0; i < currentDigit.length; i++) {
  currentDigit[i].addEventListener("click", clickDigit);
}
for (i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", clickOperator);
}
equals.addEventListener("click", calculate);
clear.addEventListener("click", allClear);
backspaceButton.addEventListener("click", backspace);
decimalButton.addEventListener("click", clickDecimal);

function clickDigit(event) {
  if (operatorStr.length == 0) {
    firstNumberStr += event.target.id;
    displayInput();
  } else if (operatorStr.length > 0) {
    secondNumberStr += event.target.id;
    displayInput();
  } else if (result) {
    allClear();
    firstNumberStr += event.target.id;
    displayInput();
  } else {
    return;
  }
}

function clickOperator(event) {
  if (
    parseFloat(firstNumberStr) &&
    secondNumberStr.length == 0 &&
    operatorStr.length == 0
  ) {
    operatorStr = event.target.id;
    displayInput();
  } else if (event.target.id == "-" && firstNumberStr.length == 0) {
    firstNumberStr += "-";
    displayInput();
  } else if (
    event.target.id == "-" &&
    operatorStr.length > 0 &&
    secondNumberStr.length == 0
  ) {
    secondNumberStr += "-";
    displayInput();
  } else if (parseFloat(secondNumberStr)) {
    calculate();
    firstNumberStr = result;
    secondNumberStr = "";
    operatorStr = event.target.id;
    displayInput();
  } else {
    return;
  }
}

function clickDecimal() {
  switch (operatorStr.length) {
    case 0:
      if (!firstNumberStr.includes(".")) {
        firstNumberStr += ".";
        displayInput();
        break;
      } else {
        break;
      }
    case 1:
      if (!secondNumberStr.includes(".")) {
        secondNumberStr += ".";
        displayInput();
        break;
      } else {
        break;
      }
  }
}

function allClear() {
  firstNumberStr = "";
  secondNumberStr = "";
  operatorStr = "";
  result = undefined;
  displayInput();
}

function backspace() {
  if (secondNumberStr.length > 0) {
    secondNumberStr = secondNumberStr.slice(0, -1);
    displayInput();
  } else if (operatorStr.length > 0) {
    operatorStr = "";
    displayInput();
  } else if (firstNumberStr.length > 0) {
    firstNumberStr = firstNumberStr.slice(0, -1);
    displayInput();
  } else {
    return;
  }
}

function calculate() {
  if (!parseFloat(secondNumberStr)) {
    return;
  }

  const firstNum = parseFloat(firstNumberStr);
  const secondNum = parseFloat(secondNumberStr);

  switch (operatorStr) {
    case "+":
      result = add(firstNum, secondNum);
      break;
    case "-":
      result = subtr(firstNum, secondNum);
      break;
    case "x":
      result = multip(firstNum, secondNum);
      break;
    case "/":
      result = div(firstNum, secondNum);
      break;
  }

  displayResult();
  return result;
}

function displayInput() {
  displayContent.textContent =
    firstNumberStr + " " + operatorStr + " " + secondNumberStr;
  return displayContent;
}

function displayResult() {
  displayContent.textContent = result;
  return displayContent;
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
