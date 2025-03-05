const currentDigit = document.querySelectorAll(".digit");
const operator = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

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
    return operatorStr;
  } else if (event.target.id == "minus" && firstNumberStr === "") {
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
  } else if (
    event.target.id == "minus" &&
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
    case "plus":
      result = add(firstNum, secondNum);
      break;
    case "minus":
      result = subtr(firstNum, secondNum);
      break;
    case "multip":
      result = multip(firstNum, secondNum);
      break;
    case "div":
      result = div(firstNum, secondNum);
      break;
  }

  console.log("result = " + result);
  result = undefined;
  firstNumberStr = "";
  secondNumberStr = "";
  operatorStr = "";
  return;
}
