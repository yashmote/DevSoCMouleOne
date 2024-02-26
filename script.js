const display = document.querySelector(".display");
display.focus();
const buttons = document.querySelectorAll("button");
let output = "";

document.addEventListener("keydown", () => {
  output = display.value;
});

const calculate = (btnValue) => {
  display.focus();
  if ((btnValue === "=" && output !== "")) {
    output = eval(output.replace("%", "/100"));
  } 
  else if (btnValue === "AC") {
    output = "";
  } 
  else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } 
  else {
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

document.addEventListener('keydown', (event) => {
var name = event.key;
var code = event.code;
if (name === 'Enter') {
    calculate('=')
}
else if (name === 'Backspace') {
    calculate('DEL')
}
else if (name === 'Escape') {
    calculate('AC')
}
}, false);