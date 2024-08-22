const display = document.getElementById("display");

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  const lastChar = display.value.slice(-1);
  if (!isNaN(lastChar) || lastChar === "") {
    display.value += operator;
  }
}

function appendPercentage() {
  const expression = display.value;
  let percentageValue = eval(expression) * 0.01;
  display.value = percentageValue.toFixed(2);
}

function clearDisplay() {
  display.value = "";
}

function deleteN() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const expression = display.value;
  let result = eval(expression);
  result = parseFloat(result.toFixed(2));

  display.value = result;
}
