const colorArray = {
  Blue: "#0000FF",
  Red: "#FF0000",
  Green: "#00FF00",
  Yellow: "#FFFF00",
  Orange: "#FFA500",
  Black: "#000000",
  Gray: "#808080",
  Azure: "#0080FF",
  Brown: "#964B00",
  Beige: "#F5F5DC",
  Violet: "#7F00FF",
  Indigo: "#4B0082",
  Almond: "#EADDCA",
  Charcoal: "#36454F",
  Coffee: "#6F4E37",
  Coral: "#FF7F50",
  Denim: "#6F8FAF",
};

let newArray = [];

const DOM = {
  numberInput: document.getElementById("numberInput"),
  colorArea: document.getElementById("colorArea"),
  displayedColorName: document.getElementById("displayedColorName"),
  resultArea: document.getElementById("resultArea"),
  restartButton: document.getElementById("restartButton"),
};

let entries = Object.entries(colorArray);

function generate(numberInput, colorArea, displayedColorName, resultArea) {
  for (let i = 0; i < numberInput; i++) {
    let random = entries[Math.floor(Math.random() * entries.length)];
    let newId = `option${i}`;
    if (newArray.includes(random[0])) {
      i -= 1;
    } else {
      colorArea.insertAdjacentHTML(
        "beforeend",
        `<div class="type" id="${newId}"></div>`
      );
      document.getElementById(newId).style.backgroundColor = `${random[1]}`;
      newArray.push(`${random[0]}`);
    }
  }

  let chosenColor = (displayedColorName.textContent =
    newArray[Math.floor(Math.random() * newArray.length)]);
  displayedColorName.textContent = chosenColor;

  function check(key) {
    let modified = `option${key}`;
    document.getElementById(modified).addEventListener("click", function () {
      // console.log(newArray[key]);
      // console.log(chosenColor);
      if (newArray[key] == chosenColor) {
        resultArea.textContent = "Correct";
        newArray.forEach(function (element, index) {
          document.getElementById(modified).textContent = "e";
        });
        // newArray.forEach(function (element, index) {
        //   while (element != chosenColor) {
        //     console.log(index);
        //     let newlyModified = `option${index}`;
        //     console.log(newlyModified);
        //     document.getElementById(newlyModified).remove();
        //   }
        // });
      } else {
        resultArea.textContent = "Incorrect";
        this.remove();
      }
    });
  }
  Object.keys(newArray).forEach((key) => check(key));
}

generate(
  DOM.numberInput.value,
  DOM.colorArea,
  DOM.displayedColorName,
  DOM.resultArea
);

DOM.restartButton.addEventListener("click", function () {
  DOM.displayedColorName.textContent = "";
  DOM.colorArea.textContent = "";
  newArray = [];
  generate(
    DOM.numberInput.value,
    DOM.colorArea,
    DOM.displayedColorName,
    DOM.resultArea
  );
});
