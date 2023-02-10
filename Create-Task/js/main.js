// Create a Color Guessing Game
// Create a large array for colors
// Add subarray for color name and color code to add for backgrounds
// Select a random color
// Multiple divs with buttons for selection
// Click on button
// If the color name of the div selected is correct, end game
// If not, delete original div, then keep going until correct

import { colorArray } from "./array";
import { newArray } from "./array";

let entries = Object.entries(colorArray);
function test() {
  for (let i = 0; i < 4; i++) {
    let random = entries[Math.floor(Math.random() * entries.length)];
    let newId = `testing${[i]}`;
    while (newArray.includes(random[0])) {
      i = i - 1;
    }
    document
      .getElementById("testing")
      .insertAdjacentHTML(
        "beforeend",
        `<div class="type" id="${newId}"></div>`
      );
    document.getElementById(newId).style.backgroundColor = `${random[1]}`;
    newArray.push(`${random[0]}`);
  }
}

test();
