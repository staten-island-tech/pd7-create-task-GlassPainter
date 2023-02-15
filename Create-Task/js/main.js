// Create a Color Guessing Game
// (DONE) Create a large array for colors
// (DONE) Add subarray for color name and color code to add for backgrounds
// (DONE) Select a random color
// (DONE) Multiple divs with buttons for selection
// (DONE) Click on button
// (DONE) If the color name of the div selected is correct, end game
// (DONE) If not, delete original div, then keep going until correct

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
      console.log("No good");
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

  function check(number) {
    let modified = `option${number}`;
    document.getElementById(modified).addEventListener("click", function () {
      if (newArray[number] == chosenColor) {
        resultArea.textContent = "Correct";
      } else {
        resultArea.textContent = "Incorrect";
        this.remove();
      }
    });
  }
  Object.keys(newArray).forEach((element) => check(element));
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
