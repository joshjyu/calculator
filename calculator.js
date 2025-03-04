const currentDigit = document.querySelectorAll(".digit");
const operator = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");

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

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function calculate() {
  if (secondNumberStr === "") {
    return;
  }

  const firstNum = parseFloat(firstNumberStr);
  const secondNum = parseFloat(secondNumberStr);

  switch (operatorStr) {
    case "plus":
      result = addition(firstNum, secondNum);
      break;
    case "minus":
      result = subtraction(firstNum, secondNum);
      break;
  }

  return console.log("result = " + result);
}

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
  } else if (result) {
    result = undefined;
    secondNumberStr = "";
    operatorStr = "";
    firstNumberStr = event.target.id;
    console.clear();
    console.log(
      "1st num: " +
        firstNumberStr +
        "  2nd num: " +
        secondNumberStr +
        "  operator: " +
        operatorStr,
    );
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
  if (firstNumberStr !== "" && secondNumberStr === "" && !result) {
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
  } else {
    return;
  }
}
