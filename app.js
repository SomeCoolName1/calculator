var results = "";
var numberLine = "";
var firstoperand = "";
var secondoperand = "";
var operationMode = null;
var bottomScreen = document.getElementById("numberScreen1");
var topScreen = document.getElementById("numberScreen2"); //top one
var operatorOnScreen = document.getElementById("operatorScreen");
const numButtons = document.querySelectorAll("[data-number]");
const opButtons = document.querySelectorAll("[data-operator]");
const dotButton = document.querySelectorAll("[data-dot]");
const equalButton = document.querySelectorAll("[equal]");
const clearButton = document.querySelectorAll("[clear]");
const delButton = document.querySelectorAll("[backspace]");

numButtons.forEach((button) =>
  button.addEventListener("click", () => sewer(button.textContent))
);

opButtons.forEach((button) =>
  button.addEventListener("click", () => changeMode(button.textContent))
);

dotButton.forEach((button) =>
  button.addEventListener("click", () => appendPoint())
);

equalButton.forEach((button) =>
  button.addEventListener("click", () => equal())
);

clearButton.forEach((button) =>
  button.addEventListener("click", () => clearAll())
);
delButton.forEach((button) =>
  button.addEventListener("click", () => backSpace())
);

function sewer(e) {
  console.log(e);
  if (results !== "" && operationMode === null) {
    clearAll();
  }
  if (numberLine.length >= 9) {
    console.log("Too many numbers");
  } else {
    numberLine = numberLine + parseInt(e); //When pressing a number, parseInt concatenates it to variable numberLine
    bottomScreen.innerHTML = numberLine; //Updates screen number
  }
}
function appendPoint() {
  if (numberLine === "") {
    sewer(0);
  } else if (numberLine.includes(".")) return;
  else {
    numberLine += ".";
    bottomScreen.innerHTML = numberLine;
  }
}

function changeMode(e) {
  if (topScreen !== "") {
    switch (e) {
      case "+":
        operationCheck();
        operationMode = "add";
        specialCase();
        operatorOnScreen.innerHTML = "+";
        break;
      case "-":
        operationCheck();
        operationMode = "subtract";
        specialCase();
        operatorOnScreen.innerHTML = "-";
        break;
      case "÷":
        operationCheck();
        operationMode = "divide";
        specialCase();
        operatorOnScreen.innerHTML = "÷";
        break;
      case "x":
        operationCheck();
        operationMode = "multiply";
        specialCase();
        operatorOnScreen.innerHTML = "x";
        break;
    }
  }
}

function operationCheck() {
  if (firstoperand === "") {
    firstoperand = numberLine;
    bottomScreen.innerHTML = ""; //Clears the first inputted number
    topScreen.innerHTML = firstoperand; //Puts the inputted number to on top of screen
    numberLine = ""; //Resets numberLine so another number can be put in
  } else if (firstoperand !== "" && numberLine !== "") {
    //If there's already a first operand and a second number is inputted, calculate.
    equal();
  } else return; //When there's no second number inputted, then just add/update the operator
}

function equal() {
  if (operationMode !== null && secondoperand === "" && numberLine !== "") {
    secondoperand = numberLine;
    evaluate(firstoperand, secondoperand);
  } else operationMode === null;
  return;
}

function specialCase() {
  if (results !== "") {
    topScreen.innerHTML = results;
    firstoperand = results;
    bottomScreen.innerHTML = "";
  }
}

function readyNext() {
  topScreen.innerHTML +=
    " " + operatorOnScreen.innerHTML + " " + secondoperand + " = ";
  bottomScreen.innerHTML = results;
  operatorOnScreen.innerHTML = "";
  numberLine = "";
  secondoperand = "";
  operationMode = null;
}

function evaluate(a, b) {
  a = Number(a);
  b = Number(b);

  switch (operationMode) {
    case "add":
      results = a + b;
      readyNext();
      break;

    case "subtract":
      results = a - b;
      readyNext();
      break;

    case "divide":
      if (b === 0) {
        clearAll();
        alert("I see you dividing by 0");
      } else {
        results = a / b;
        readyNext();
      }
      break;

    case "multiply":
      results = a * b;
      readyNext();
      break;
  }
}

function clearAll() {
  operationMode = null;
  numberLine = "";
  secondoperand = "";
  firstoperand = "";
  topScreen.innerHTML = "";
  bottomScreen.innerHTML = "";
  operatorOnScreen.innerHTML = "";
  results = "";
}

function backSpace() {
  numberLine = numberLine.slice(0, -1);
  bottomScreen.innerHTML = numberLine;
}
