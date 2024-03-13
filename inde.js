const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
let action = "+";

console.log(input1.value);
console.log(input2.value);
let result = 0;

plusBtn.onclick = function () {
  action = "+";
  console.log(action);
};

minusBtn.onclick = function () {
  action = "-";
  console.log(action);
};

multiplyBtn.onclick = function () {
  action = "/";
  console.log(action);
};

divideBtn.onclick = function () {
  action = "*";
  console.log(action);
};

submitBtn.onclick = function () {
  if (action == "+") {
    result = Number(input1.value) + Number(input2.value);
    console.log(result);
  }
  if (action == "-") {
    result = Number(input1.value) - Number(input2.value);
    console.log(result);
  }
  if (action == "*") {
    result = Number(input1.value) * Number(input2.value);
    console.log(result);
  }
  if (action == "/") {
    result = Number(input1.value) / Number(input2.value);
    console.log(result);
  }
};

function addColor(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
}
