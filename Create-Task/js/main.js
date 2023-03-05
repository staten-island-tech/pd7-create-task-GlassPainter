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

let colorArrayEntries = Object.entries(colorArray);

const DOM = {
  numberOfChildDivs: document.getElementById("numberOfChildDivs"),
  parentDiv: document.getElementById("parentDiv"),
  chosenColorDiv: document.getElementById("chosenColorDiv"),
  statusDiv: document.getElementById("statusDiv"),
  startButton: document.getElementById("startButton"),
};

function addChildDivsWithColors(
  numberOfChildDivs,
  parentDiv,
  chosenColorDiv,
  statusDiv
) {
  if (
    isNaN(numberOfChildDivs) ||
    numberOfChildDivs > colorArrayEntries.length
  ) {
    alert("Invalid input");
  } else {
    for (let i = 0; i < numberOfChildDivs; i++) {
      let random =
        colorArrayEntries[Math.floor(Math.random() * colorArrayEntries.length)];
      if (newArray.includes(random[0])) {
        i -= 1;
      } else {
        let newId = `option${i}`;
        parentDiv.insertAdjacentHTML(
          "beforeend",
          `<div class="type" id="${newId}"></div>`
        );
        document.getElementById(newId).style.backgroundColor = `${random[1]}`;
        newArray.push(`${random[0]}`);
      }
    }
  }

  let chosenColor = (chosenColorDiv.textContent =
    newArray[Math.floor(Math.random() * newArray.length)]);
  chosenColorDiv.textContent = chosenColor;

  function check(key) {
    let modified = `option${key}`;
    document.getElementById(modified).addEventListener("click", function () {
      if (newArray[key] == chosenColor) {
        statusDiv.textContent = "Status: Correct";
      } else {
        statusDiv.textContent = "Status: Incorrect";
        this.remove();
      }
    });
  }
  Object.keys(newArray).forEach((key) => check(key));
}

DOM.startButton.addEventListener("click", function () {
  DOM.chosenColorDiv.textContent = "";
  DOM.parentDiv.textContent = "";
  newArray = [];
  addChildDivsWithColors(
    DOM.numberOfChildDivs.value,
    DOM.parentDiv,
    DOM.chosenColorDiv,
    DOM.statusDiv
  );
  DOM.numberOfChildDivs.value = "";
  DOM.statusDiv.textContent = "Status: ";
});
