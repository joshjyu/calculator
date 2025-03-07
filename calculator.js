const currentDigit = document.querySelectorAll(".digit");
const operator = document.querySelectorAll(".operator");
const equals = document.querySelector("#eq");
const clear = document.querySelector("#clear");
const backspaceButton = document.querySelector("#backspace");
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

function clickDigit(event) {
  if (operatorStr.length == 0) {
    firstNumberStr += event.target.id;
    displayInput();
    return firstNumberStr;
  } else if (operatorStr.length > 0 && !result) {
    secondNumberStr += event.target.id;
    displayInput();
    return secondNumberStr;
  } else {
    return;
  }
}

function clickOperator(event) {
  if (
    firstNumberStr.length > 0 &&
    secondNumberStr.length == 0 &&
    operatorStr.length == 0
  ) {
    operatorStr = event.target.id;
    displayInput();
    return operatorStr;
  } else if (event.target.id == "-" && firstNumberStr.length == 0) {
    firstNumberStr += "-";
    displayInput();
    return firstNumberStr;
  } else if (
    event.target.id == "-" &&
    operatorStr.length > 0 &&
    secondNumberStr.length == 0
  ) {
    secondNumberStr += "-";
    displayInput();
    return secondNumberStr;
  } else {
    return;
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
    return secondNumberStr;
  } else if (operatorStr.length > 0) {
    operatorStr = "";
    displayInput();
    return operatorStr;
  } else if (firstNumberStr.length > 0) {
    firstNumberStr = firstNumberStr.slice(0, -1);
    displayInput();
    return firstNumberStr;
  } else {
    return;
  }
}

function calculate() {
  if (secondNumberStr === "") {
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
  result = undefined;
  firstNumberStr = "";
  secondNumberStr = "";
  operatorStr = "";
  return;
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
