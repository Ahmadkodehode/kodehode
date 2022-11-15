import { keyBindings } from "./data.js";
import { sounds } from "./data.js";
const myDiv = document.getElementById("app");
console.log(sounds);
sounds.forEach((sound) => {
  let y = document.createElement("button");
  myDiv.append(y);
});
