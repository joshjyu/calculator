const currentDigit = document.querySelectorAll(".digit");
const operator = document.querySelectorAll(".operator");
const equals = document.querySelector("#eq");
const clear = document.querySelector("#clear");
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

function clickDigit(event) {
  if (secondNumberStr === "" && operatorStr === "") {
    firstNumberStr += event.target.id;
    console.clear();
    console.log(
      "1st num: " +
        firstNumberStr +
        "  2nd num: " +
        secondNumberStr +
        "  operator: " +
        operatorStr,
    );
    displayInput();
    return firstNumberStr;
  } else if (firstNumberStr !== "" && operatorStr !== "" && !result) {
    secondNumberStr += event.target.id;
    console.clear();
    console.log(
      "1st num: " +
        firstNumberStr +
        "  2nd num: " +
        secondNumberStr +
        "  operator: " +
        operatorStr,
    );
    displayInput();
    return secondNumberStr;
  } else {
    return;
  }
}

function clickOperator(event) {
  if (firstNumberStr !== "" && secondNumberStr === "" && operatorStr === "") {
    operatorStr = event.target.id;
    console.clear();
    console.log(
      "1st num: " +
        firstNumberStr +
        "  2nd num: " +
        secondNumberStr +
        "  operator: " +
        operatorStr,
    );
    displayInput();
    return operatorStr;
  } else if (event.target.id == "-" && firstNumberStr === "") {
    firstNumberStr += "-";
    console.clear();
    console.log(
      "1st num: " +
        firstNumberStr +
        "  2nd num: " +
        secondNumberStr +
        "  operator: " +
        operatorStr,
    );
    displayInput();
    return firstNumberStr;
  } else if (
    event.target.id == "-" &&
    operatorStr !== "" &&
    secondNumberStr === ""
  ) {
    secondNumberStr += "-";
    console.clear();
    console.log(
      "1st num: " +
        firstNumberStr +
        "  2nd num: " +
        secondNumberStr +
        "  operator: " +
        operatorStr,
    );
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
  console.clear();
  console.log(
    "1st num: " +
      firstNumberStr +
      "  2nd num: " +
      secondNumberStr +
      "  operator: " +
      operatorStr,
  );
  displayInput();
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
  console.log("result = " + result);
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
}
