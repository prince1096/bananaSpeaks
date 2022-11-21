console.log("hello world");

const btnTranslate = document.querySelector("#click");
console.log(btnTranslate);

var txtInput = document.querySelector("#txt-Input");
console.log(txtInput);

function clickEventHandler() {
  console.log("clicked");
  console.log(txtInput.value);
}

// console.log(txtInput.value);

btnTranslate.addEventListener("click", clickEventHandler);
