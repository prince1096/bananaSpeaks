// console.log("hello world");

const btnTranslate = document.querySelector("#click");
console.log(btnTranslate);

var txtInput = document.querySelector("#txt-Input");
console.log(txtInput);

var outputDiv = document.querySelector("#output");
// outputDiv.innerText = "Prince ";

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslation(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
}

function clickEventHandler() {
  //   console.log("clicked");
  //   console.log(txtInput.value);
  //   outputDiv.innerText = "prince" + txtInput.value;

  var inputText = txtInput.value;

  // calling server for processing
  fetch(getTranslation(inputText))
    .then((response) => response.json())
    .then((json) => {
      var finalText = json.contents.translated;
      outputDiv.innerText = finalText;
    })
    // console.log(json.contents.translated))
    .catch(errorHandler);
}

// console.log(txtInput.value);

btnTranslate.addEventListener("click", clickEventHandler);
