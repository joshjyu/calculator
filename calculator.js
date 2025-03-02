const currentDigit = document.querySelectorAll(".digit");
const operator = document.querySelectorAll(".operator");

let firstNumber = "";
let secondNumber = "";
let selectedOp = "";

for (i = 0; i < currentDigit.length; i++) {
  currentDigit[i].addEventListener("click", (event) => {
    if (secondNumber === "" && selectedOp === "") {
      firstNumber += event.target.id;
      console.clear();
      console.log(
        "1st num: " +
          firstNumber +
          "  2nd num: " +
          secondNumber +
          "  operator: " +
          selectedOp,
      );
      return firstNumber;
    } else if (firstNumber !== "" && selectedOp !== "") {
      secondNumber += event.target.id;
      console.clear();
      console.log(
        "1st num: " +
          firstNumber +
          "  2nd num: " +
          secondNumber +
          "  operator: " +
          selectedOp,
      );
      return secondNumber;
    } else {
      return;
    }
  });
}

for (i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", (event) => {
    if (firstNumber !== "" && secondNumber === "") {
      selectedOp = event.target.id;
      console.clear();
      console.log(
        "1st num: " +
          firstNumber +
          "  2nd num: " +
          secondNumber +
          "  operator: " +
          selectedOp,
      );
      return selectedOp;
    } else {
      return;
    }
  });
}

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}
