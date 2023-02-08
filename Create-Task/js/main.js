// Create a Color Guessing Game
// Create a large array for colors
// Add subarray for color name and color code to add for backgrounds
// Select a random color
// Multiple divs with buttons for selection
// Click on button
// If the color name of the div selected is correct, end game
// If not, delete original div, then keep going until correct

import { colorArray } from "./array";
let entries = Object.entries(colorArray);
document.getElementById("testing").style.backgroundColor = `${
  entries[Math.floor(Math.random() * entries.length)][1]
}`;

console.log(entries[Math.floor(Math.random() * entries.length)]);
