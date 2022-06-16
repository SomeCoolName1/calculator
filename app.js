var mode = "";
var results = "";
var numberLine = "";
var firstoperand = "";
var secondoperand = "";
var operationMode = null;
var numberOnScreen1 = document.getElementById("numberScreen1");
var numberOnScreen2 = document.getElementById("numberScreen2");

function number(e) {
  if (numberLine.length >= 9) {
    console.log("Too many numbers");
  } else if (numberLine === "" && e === 0) {
  } else {
    numberLine = numberLine + parseInt(e); //When pressing a number, parseInt concatenates it to variable numberLine
    numberOnScreen1.innerHTML = numberLine; //Updates screen number
  }
}

function changeMode(e) {
  if (numberLine !== "") {
    switch (e) {
      case "addition":
        operationMode = "add";
        operationCheck();

        break;
      case "subtraction":
        operationMode = "subtract";
        operationCheck();
        break;
      case "division":
        operationMode = "divide";
        operationCheck();

        break;
      case "multiplication":
        operationMode = "multiply";
        operationCheck();

        break;
      case "=":
        if (operationMode !== null) {
          secondoperand = numberLine;
          evaluate(firstoperand, secondoperand);
        } else {
          console.log("fk you");
        }

        break;
    }
  } else console.log("Please input numbers first");
}

function operationCheck() {
  if (firstoperand === "") {
    firstoperand = numberLine;
    numberOnScreen2.innerHTML = firstoperand; //Updates second screen number to be listed above
    numberLine = ""; // Resets numberLine
  } else {
    secondoperand = numberLine;
    evaluate(firstoperand, secondoperand);
  }
}

function evaluate(a, b) {
  a = Number(a);
  b = Number(b);

  switch (operationMode) {
    case "add":
      results = a + b;
      firstoperand = results;
      numberOnScreen2.innerHTML = firstoperand;
      numberOnScreen1.innerHTML = "";

      operationMode = null;
      numberLine = "";
      secondoperand = "";
      break;

    case "subtract":
      results = a - b;
      firstoperand = results;
      numberOnScreen2.innerHTML = firstoperand;
      numberOnScreen1.innerHTML = "";

      operationMode = null;
      numberLine = "";
      secondoperand = "";
      break;

    case "divide":
      results = a / b;
      firstoperand = results;
      numberOnScreen2.innerHTML = firstoperand;
      numberOnScreen1.innerHTML = "";

      operationMode = null;
      numberLine = "";
      secondoperand = "";
      break;

    case "multiply":
      results = a * b;
      firstoperand = results;
      numberOnScreen2.innerHTML = firstoperand;
      numberOnScreen1.innerHTML = "";

      operationMode = null;
      numberLine = "";
      secondoperand = "";
      break;
  }
}

function clearAll() {
  operationMode = null;
  numberLine = "";
  secondoperand = "";
  firstoperand = "";
  numberOnScreen2.innerHTML = "";
  numberOnScreen1.innerHTML = "";
}

function backSpace() {
  numberLine = numberLine.slice(0, -1);
  numberOnScreen1.innerHTML = numberLine;
}
