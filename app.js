console.log("hello world");

const btnTranslate = document.querySelector("#click");
console.log(btnTranslate);

var txtInput = document.querySelector("#txt-Input");
console.log(txtInput);

var outputDiv = document.querySelector("#output");
outputDiv.innerText = "Prince ";

function clickEventHandler() {
  console.log("clicked");
  console.log(txtInput.value);
  outputDiv.innerText = "prince" + txtInput.value;
}

// console.log(txtInput.value);

btnTranslate.addEventListener("click", clickEventHandler);
