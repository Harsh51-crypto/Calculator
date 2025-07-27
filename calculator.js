let displayBox = document.getElementById("calculator-display");

function display(value) {
  displayBox.value += value;
}

function clearDisplay() {
  displayBox.value = "";
}

function operation() {
  try {
      let expression=displayBox.value;
    displayBox.value  = eval(expression);
  } catch (err) {
    displayBox.value = "Error";
  }
}
