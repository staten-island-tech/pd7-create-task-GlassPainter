// Create a Color Guessing Game
// Create a large array for colors
// Add subarray for color name and color code to add for backgrounds
// Select a random color
// Multiple divs with buttons for selection
// Click on button
// If the color name of the div selected is correct, end game
// If not, delete original div, then keep going until correct

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

let entries = Object.entries(colorArray);

function test() {
  for (let i = 0; i < 4; i++) {
    let random = entries[Math.floor(Math.random() * entries.length)];
    let newId = `option${i}`;
    if (newArray.includes(random[0])) {
      i -= 1;
      console.log("No good");
    } else {
      document
        .getElementById("testing")
        .insertAdjacentHTML(
          "beforeend",
          `<div class="type" id="${newId}"></div>`
        );
      document.getElementById(newId).style.backgroundColor = `${random[1]}`;
      newArray.push(`${random[0]}`);
    }
    document.getElementById("name").textContent = random[0];
  }
}

test();

document.getElementById("option0").addEventListener("click", function () {
  console.log("Hi");
});

let startTime = performance.now();

let endTime = performance.now();

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
